import {ActivityIndicator, FlatList, Pressable, View} from 'react-native';
import React from 'react';
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
import {getUser} from './queries';
import {GetUserQuery, GetUserQueryVariables} from '../../API';
import ApiErrorMessage from '../../components/ApiErrorMessage';

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const {userId} = useAuthContext();
  const {data, error, loading} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  );

  const categories = data?.getUser?.categories;
  const quotes = data?.getUser?.Quotes?.items;
  const favoriteQuotes = quotes?.filter(quote => quote?.favorite);

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
        <ApiErrorMessage message={error.message} />
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
      <HeaderNavigation
        title="Inspr"
        showBackButton={false}
        boldTitle
        titleSize={fonts.size.xlg}
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
        {categories ? (
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
          <View style={styles.noCategoriesContainer}>
            <StyledText style={styles.categoryText}>
              Tap to create a category
            </StyledText>
          </View>
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
    </View>
  );
};

export default HomeScreen;
