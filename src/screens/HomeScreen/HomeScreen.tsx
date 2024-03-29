import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  Pressable,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import StyledText from '../../components/StyledText/StyledText';
import QuotesList from '../../components/QuotesList/QuotesList';
import colors from '../../theme/colors';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import fonts from '../../theme/fonts';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenProp} from '../../navigation/types/HomeStackNavigatorParamList';
import {useAuthContext} from '../../contexts/AuthContext';
import {useQuery} from '@apollo/client';
import {getUser, quotesByUserIDAndCreatedAt} from './queries';
import {
  GetUserQuery,
  GetUserQueryVariables,
  ModelSortDirection,
  QuotesByUserIDAndCreatedAtQuery,
  QuotesByUserIDAndCreatedAtQueryVariables,
} from '../../API';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import bgImage from '../../../assets/images/bgs/3-green-circles.png';
import StyledButton from '../../components/StyledButton/StyledButton';
import CreateCategoryModal from '../../components/CreateCategoryModal/CreateCategoryModal';
import spacing from '../../theme/spacing';

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const {userId} = useAuthContext();
  const [modalVisible, setModalVisible] = useState(false);
  const {data, error, loading} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  );
  const {
    data: quotesByUserdata,
    loading: quotesByUserloading,
    error: quotesByUsererror,
  } = useQuery<
    QuotesByUserIDAndCreatedAtQuery,
    QuotesByUserIDAndCreatedAtQueryVariables
  >(quotesByUserIDAndCreatedAt, {
    variables: {
      userID: userId,
      sortDirection: ModelSortDirection.DESC,
    },
  });
  const categories = data?.getUser?.categories;
  const quotes =
    quotesByUserdata?.quotesByUserIDAndCreatedAt?.items.filter(
      quote => !quote?._deleted,
    ) || [];
  const favoriteQuotes =
    quotesByUserdata?.quotesByUserIDAndCreatedAt?.items.filter(
      quote => quote?.favorite && !quote?._deleted,
    ) || [];

  if (loading || quotesByUserloading) {
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
  if (error || quotesByUsererror) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ApiErrorMessage
          message={error?.message || quotesByUsererror?.message}
        />
      </View>
    );
  }

  function navigateToCategoriesScreen() {
    navigation.navigate('CategoriesScreen');
  }

  function navigateToQuotesScreen(item: string) {
    navigation.navigate('QuotesScreen', {
      title: item,
    });
  }

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.bgImage}>
        <HeaderNavigation
          title="Inspr"
          showBackButton={false}
          titleSize={fonts.size.xlg}
          spacing={false}
        />
        <CreateCategoryModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        {/* Categories list */}
        <View style={styles.categoriesContainer}>
          <View style={{flexDirection: 'row'}}>
            <StyledText style={styles.categoriesTitle}>Categories</StyledText>
            <StyledText
              style={styles.viewAllButton}
              onPress={navigateToCategoriesScreen}>
              View all
            </StyledText>
          </View>
          {categories.length > 0 ? (
            <FlatList
              style={styles.categoriesList}
              data={categories}
              renderItem={({item}) => {
                return (
                  <Pressable
                    style={styles.categoryContainer}
                    onPress={() => navigateToQuotesScreen(item)}>
                    <StyledText style={styles.categoryText}>{item}</StyledText>
                  </Pressable>
                );
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <StyledButton
              containerStyle={{
                width: 300,
                marginTop: spacing.md,
              }}
              text="Tap to create a category"
              onPress={() => setModalVisible(!modalVisible)}
            />
          )}
        </View>
        {/* Your quotes list */}
        <View style={styles.categoriesContainer}>
          <View style={{flexDirection: 'row'}}>
            <StyledText style={styles.categoriesTitle}>Your quotes</StyledText>
            <StyledText
              style={styles.viewAllButton}
              onPress={() => navigateToQuotesScreen('Your quotes')}>
              View all
            </StyledText>
          </View>
          <QuotesList data={quotes} />
        </View>
        {/* Favorite quotes list */}
        <View style={styles.categoriesContainer}>
          <View style={{flexDirection: 'row'}}>
            <StyledText style={styles.categoriesTitle}>
              Favorite quotes
            </StyledText>
            <StyledText
              style={styles.viewAllButton}
              onPress={() => navigateToQuotesScreen('Favorite')}>
              View all
            </StyledText>
          </View>
          <QuotesList data={favoriteQuotes} color={colors.red} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
