import {View, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
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

const createButton = (
  <StyledText style={styles.createButton}>Create</StyledText>
);

const CategoriesScreen = () => {
  return (
    <View>
      <HeaderNavigation title={'Categories'} rightButton={createButton} />
      <FlatList
        style={{height: '100%', paddingTop: spacing.sm}}
        columnWrapperStyle={{
          justifyContent: 'space-around',
          marginBottom: spacing.sm,
        }}
        contentContainerStyle={{alignItems: 'center'}}
        data={CATEGORIES_LIST}
        renderItem={({item}) => (
          <View style={styles.categoryContainer}>
            <StyledText style={styles.categoryText}>{item}</StyledText>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
