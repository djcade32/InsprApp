import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
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
import bgImage from '../../../assets/images/bgs/3-tan-circles.png';
import {isIphone14ProMax} from '../../helpers/helpers';

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
  const {control, handleSubmit, reset} = useForm<CreateQuoteData>();

  const {data, error, loading} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  );
  const [runCreateQuote] = useMutation<
    CreateQuoteMutation,
    CreateQuoteMutationVariables
  >(createQuote, {refetchQueries: ['QuotesByUserIDAndCreatedAt']});

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
  useEffect(() => {
    createCategoryList(fetchedCategories);
  }, [fetchedCategories]);

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
    <ImageBackground
      source={bgImage}
      resizeMode="cover"
      style={[
        styles.bgImage,
        isIphone14ProMax() && [styles.bgImage, {paddingTop: 50}],
      ]}>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log('pressed');
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
    </ImageBackground>
  );
};

export default CreateQuoteScreen;
