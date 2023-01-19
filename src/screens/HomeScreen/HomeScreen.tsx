import {FlatList, Pressable, View} from 'react-native';
import React from 'react';
import styles from './styles';
import StyledText from '../../components/StyledText/StyledText';
import spacing from '../../theme/spacing';

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
    </View>
  );
};

export default HomeScreen;
