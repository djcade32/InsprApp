import {FlatList, Pressable, View} from 'react-native';
import React from 'react';
import styles from './styles';
import StyledText from '../../components/StyledText/StyledText';
import QUOTES_LIST from '../../../assets/data/quotes.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/colors';

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
console.log(QUOTES_LIST);

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <StyledText style={styles.headerTitle}>Inspr</StyledText>
      </View>
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
        <FlatList
          style={styles.categoriesList}
          data={QUOTES_LIST}
          renderItem={({item}) => {
            return (
              <Pressable style={styles.quoteContainer}>
                <StyledText numberOfLines={3} style={styles.quoteText}>
                  {item.text}
                </StyledText>
                <StyledText style={styles.quoteAuthor}>
                  - {item.author}
                </StyledText>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.categoryBadgeContainer}>
                    <StyledText style={styles.categoryBadgeText}>
                      {item.category}
                    </StyledText>
                  </View>
                  <MaterialCommunityIcons
                    size={35}
                    name="bookmark-outline"
                    style={{color: colors.mintGreen}}
                  />
                </View>
              </Pressable>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
