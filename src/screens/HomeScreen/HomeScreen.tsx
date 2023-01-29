import {FlatList, Pressable, View} from 'react-native';
import React from 'react';
import styles from './styles';
import StyledText from '../../components/StyledText/StyledText';
import QUOTES_LIST from '../../../assets/data/quotes.json';
import FAVORITE_QUOTES_LIST from '../../../assets/data/favoriteQuotes.json';
import QuotesList from '../../components/QuotesList/QuotesList';
import colors from '../../theme/colors';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import fonts from '../../theme/fonts';

const CATEGORIES_LIST = [
  'Art',
  'Beauty',
  'Business',
  'Design',
  'Failure',
  'Finance',
  'Health',
  'Motivation',
];

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <HeaderNavigation
        title="Inspr"
        showBackButton={false}
        boldTitle
        titleSize={fonts.size.xlg}
      />
      {/* <View style={styles.headerContainer}>
        <StyledText style={styles.headerTitle}>Inspr</StyledText>
      </View> */}
      {/* Categories list */}
      <View style={styles.categoriesContainer}>
        <View style={{flexDirection: 'row'}}>
          <StyledText style={styles.categoriesTitle}>Categories</StyledText>
          <StyledText style={styles.viewAllButton}>View all</StyledText>
        </View>
        <FlatList
          style={styles.categoriesList}
          data={CATEGORIES_LIST}
          renderItem={({item}) => {
            return (
              <Pressable style={styles.categoryContainer}>
                <StyledText style={styles.categoryText}>{item}</StyledText>
              </Pressable>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* Your quotes list */}
      <View style={styles.categoriesContainer}>
        <View style={{flexDirection: 'row'}}>
          <StyledText style={styles.categoriesTitle}>Your quotes</StyledText>
          <StyledText style={styles.viewAllButton}>View all</StyledText>
        </View>
        <QuotesList data={QUOTES_LIST} />
      </View>
      {/* Favorite quotes list */}
      <View style={styles.categoriesContainer}>
        <View style={{flexDirection: 'row'}}>
          <StyledText style={styles.categoriesTitle}>
            Favorite quotes
          </StyledText>
          <StyledText style={styles.viewAllButton}>View all</StyledText>
        </View>
        <QuotesList data={FAVORITE_QUOTES_LIST} color={colors.red} />
      </View>
    </View>
  );
};

export default HomeScreen;
