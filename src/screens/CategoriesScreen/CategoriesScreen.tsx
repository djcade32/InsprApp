import {
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import StyledText from '../../components/StyledText/StyledText';
import spacing from '../../theme/spacing';
import {useNavigation} from '@react-navigation/native';
import CreateCategoryModal from '../../components/CreateCategoryModal/CreateCategoryModal';
import {CategoriesScreenProp} from '../../navigation/types/HomeStackNavigatorParamList';
import {useAuthContext} from '../../contexts/AuthContext';
import {getUser, deleteQuote, updateUser} from './queries';
import {useMutation, useQuery} from '@apollo/client';
import {
  DeleteQuoteMutation,
  DeleteQuoteMutationVariables,
  GetUserQuery,
  GetUserQueryVariables,
  Quote,
  UpdateUserInput,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from '../../API';
import colors from '../../theme/colors';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import Entypo from 'react-native-vector-icons/Entypo';

const CategoriesScreen = () => {
  const navigation = useNavigation<CategoriesScreenProp>();
  const [modalVisible, setModalVisible] = useState(false);

  const {userId} = useAuthContext();
  const {data, error, loading} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  );
  const [runUpdateUser, {loading: updateLoading, error: updateError}] =
    useMutation<UpdateUserMutation, UpdateUserMutationVariables>(updateUser);

  const [runDeleteQuote] = useMutation<
    DeleteQuoteMutation,
    DeleteQuoteMutationVariables
  >(deleteQuote);

  const user = data?.getUser;
  const categories = data?.getUser?.categories;

  async function deleteCategory(category: string) {
    if (updateLoading) {
      return;
    }
    const categoryQuotes = getQuotesForCategory(category);
    console.log('quotes: ', categoryQuotes);

    const input: UpdateUserInput = {
      id: userId,
      categories: categories?.filter(
        currentCategory => currentCategory !== category,
      ),
      _version: user?._version,
    };
    try {
      deleteCategoryQuotes(categoryQuotes);
      await runUpdateUser({
        variables: {
          input,
        },
      });
    } catch (error) {
      console.log('Error updating user: ', error);
      Alert.alert('Oops', 'Error deleting category.');
    }
  }

  function getQuotesForCategory(category: string) {
    return user?.Quotes?.items.filter(quote => quote?.category === category);
  }

  function deleteCategoryQuotes(quotes: (Quote | null)[] | undefined) {
    if (!quotes || quotes.length === 0) {
      return;
    }
    quotes.forEach(async quote => {
      await runDeleteQuote({
        variables: {
          input: {id: quote?.id || '', _version: quote?._version},
        },
      });
    });
  }

  const createButton = (
    <StyledText
      style={styles.createButton}
      onPress={() => setModalVisible(true)}>
      Create
    </StyledText>
  );

  function navigateToQuotesScreen(item: string) {
    navigation.navigate('QuotesScreen', {
      title: item,
    });
  }

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={'large'} color={colors.grey} />
      </View>
    );
  }
  if (error) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ApiErrorMessage message={error?.message} />
      </View>
    );
  }
  return (
    <View style={{backgroundColor: 'white'}}>
      <HeaderNavigation
        title={'Categories'}
        rightButton={createButton}
        showBackButton
      />
      <CreateCategoryModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <FlatList
        style={{height: '100%', paddingTop: spacing.sm}}
        columnWrapperStyle={{
          justifyContent: 'space-around',
          marginBottom: spacing.sm,
        }}
        contentContainerStyle={{paddingHorizontal: spacing.xxsm}}
        data={categories}
        renderItem={({item}) => (
          <Pressable
            style={styles.categoryContainer}
            onPress={() => navigateToQuotesScreen(item)}>
            <StyledText style={styles.categoryText}>{item}</StyledText>
            <Entypo
              name="cross"
              size={25}
              color={'white'}
              style={styles.crossIcon}
              suppressHighlighting
              onPress={() => {
                Alert.alert(
                  'Are you sure?',
                  'Deleting categories will also delete its quotes.',
                  [
                    {text: 'Cancel', style: 'cancel'},
                    {
                      text: 'Yes, delete',
                      style: 'destructive',
                      onPress: () => deleteCategory(item),
                    },
                  ],
                );
              }}
            />
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
