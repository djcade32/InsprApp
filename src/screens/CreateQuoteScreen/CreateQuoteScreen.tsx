import {View, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import styles from './styles';
import StyledText from '../../components/StyledText/StyledText';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import DropDownPicker from 'react-native-dropdown-picker';
import StyledTextInput from '../../components/StyledTextInput/StyledTextInput';
import StyledButton from '../../components/StyledButton/StyledButton';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import {createQuote, getUser} from './queries';
import {useMutation, useQuery} from '@apollo/client';
import {
  CreateQuoteInput,
  CreateQuoteMutation,
  CreateQuoteMutationVariables,
  GetUserQuery,
  GetUserQueryVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import CreateCategoryModal from '../../components/CreateCategoryModal/CreateCategoryModal';
import FormInput from '../../components/FormInput/FormInput';
import {useForm} from 'react-hook-form';
import FormDropdown from '../../components/FormDropdown/FormDropdown';

type CreateQuoteData = {
  category: string;
  author: string;
  quote: string;
};

const CreateQuoteScreen = () => {
  const {userId} = useAuthContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState<
    {label: string; value: string}[]
  >([]);
  const [dropdownValue, setDropdownValue] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const {control, handleSubmit, reset, watch} = useForm<CreateQuoteData>();

  const {data, error, loading} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  );
  const [runCreateQuote] = useMutation<
    CreateQuoteMutation,
    CreateQuoteMutationVariables
  >(createQuote);

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

  const onCreateQuote = async ({category, author, quote}: CreateQuoteData) => {
    if (creating) {
      return;
    }
    setCreating(true);
    const input: CreateQuoteInput = {
      author: author ? author : 'Anonymous',
      category,
      quote,
      favorite: false,
      userID: userId,
      allquotesID: userId,
    };

    try {
      await runCreateQuote({
        variables: {
          input,
        },
      });
      reset();
      setDropdownValue(null);
    } catch (e) {
      Alert.alert('Oopps', (e as Error).message);
    } finally {
      setCreating(false);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setOpen(prev => prev === true && false);
      }}>
      <View style={styles.screen}>
        <HeaderNavigation title="Create quote" showBackButton={false} />
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
            text={creating ? 'Creating...' : 'Create'}
            onPress={handleSubmit(onCreateQuote)}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreateQuoteScreen;
