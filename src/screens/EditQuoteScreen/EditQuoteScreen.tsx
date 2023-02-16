import {View, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import StyledButton from '../../components/StyledButton/StyledButton';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import {getUser, updateQuote} from './queries';
import {useMutation, useQuery} from '@apollo/client';
import {
  GetUserQuery,
  GetUserQueryVariables,
  UpdateQuoteInput,
  UpdateQuoteMutation,
  UpdateQuoteMutationVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import CreateCategoryModal from '../../components/CreateCategoryModal/CreateCategoryModal';
import FormInput from '../../components/FormInput/FormInput';
import {useForm} from 'react-hook-form';
import FormDropdown from '../../components/FormDropdown/FormDropdown';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  EditQuoteScreenItemProp,
  EditQuoteScreenRouteProp,
} from '../../navigation/types/HomeStackNavigatorParamList';
import StyledText from '../../components/StyledText/StyledText';

type EditQuoteData = {
  category: string;
  author: string;
  quote: string;
};

const EditQuoteScreen = () => {
  const navigation = useNavigation<EditQuoteScreenItemProp>();
  const route = useRoute<EditQuoteScreenRouteProp>();
  const {control, handleSubmit, reset, setValue} = useForm<EditQuoteData>();
  const activeQuote = route.params.quote;
  const {userId} = useAuthContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState<
    {label: string; value: string}[]
  >([]);
  const [dropdownValue, setDropdownValue] = useState<string | null>(
    activeQuote?.category || '',
  );
  const {data, error, loading} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  );
  useEffect(() => {
    setValue('category', activeQuote?.category || '');
    setValue('author', activeQuote?.author || '');
    setValue('quote', activeQuote?.quote || '');
  }, [activeQuote]);
  const [runUpdateQuote, {loading: updateLoading, error: updateError}] =
    useMutation<UpdateQuoteMutation, UpdateQuoteMutationVariables>(updateQuote);

  const fetchedCategories = data?.getUser?.categories;

  function createCategoryList(categories: string[] | null | undefined) {
    if (!categories || categories.length < 1) {
      return;
    }
    if (dropdownItems.some(e => e.value.toLowerCase() === 'motivation')) {
      return;
    }
    categories.forEach(category => {
      setDropdownItems(prev => [...prev, {label: category, value: category}]);
    });
  }
  createCategoryList(fetchedCategories);

  const onEditQuote = async ({category, author, quote}: EditQuoteData) => {
    if (!activeQuote || updateLoading) {
      return;
    }
    const input: UpdateQuoteInput = {
      id: activeQuote?.id,
      author: author ? author : 'Anonymous',
      category,
      quote,
      _version: activeQuote._version,
    };

    try {
      await runUpdateQuote({
        variables: {
          input,
        },
      });
      navigation.goBack();
    } catch (e) {
      Alert.alert('Oopps', (e as Error).message);
    }
  };

  const cancelButton = (
    <StyledText style={styles.createButton} onPress={() => navigation.goBack()}>
      Cancel
    </StyledText>
  );

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setOpen(prev => prev === true && false);
      }}>
      <View style={styles.screen}>
        <HeaderNavigation
          title="Edit quote"
          showBackButton={true}
          leftButton={cancelButton}
        />
        <CreateCategoryModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <View style={styles.inputForm}>
          {dropdownItems.length > 0 ? (
            <FormDropdown
              open={open}
              setOpen={setOpen}
              dropdownValue={dropdownValue}
              setDropdownValue={setDropdownValue}
              dropdownItems={dropdownItems}
              setDropdownItems={setDropdownItems}
              name="category"
              labelText="Category"
              control={control}
              rules={{
                required: 'Category is required',
              }}
            />
          ) : (
            <StyledButton
              containerStyle={{width: 300}}
              text="Tap to create a category"
              onPress={() => setModalVisible(!modalVisible)}
            />
          )}
          <FormInput
            name="author"
            labelText="Author"
            placeholder="Who said the quote?"
            control={control}
          />

          <FormInput
            multiline
            name="quote"
            labelText="Quote"
            placeholder="What was said?"
            control={control}
            rules={{
              required: 'Quote is required',
            }}
          />

          <StyledButton
            text={updateLoading ? 'Saving...' : 'Save'}
            onPress={handleSubmit(onEditQuote)}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EditQuoteScreen;
