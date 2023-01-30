// This is used within the quoteslist component to display a single quote.

import {View, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/colors';
import StyledText from '../StyledText/StyledText';
import {IQuote} from '../../interfaces/quotesList';
import {useNavigation} from '@react-navigation/native';

const QuotesListItem = ({item, color = ''}: IQuote) => {
  const navigation = useNavigation();
  // True if color prop is being used and false if it is not
  const overrideColor = !!color;

  function navigateToQuoteScreen() {
    navigation.navigate('QuoteScreen');
  }
  return (
    <Pressable
      style={[
        styles.quoteContainer,
        overrideColor
          ? {backgroundColor: color}
          : {backgroundColor: colors.darkGreen},
      ]}
      onPress={navigateToQuoteScreen}>
      <StyledText numberOfLines={3} style={styles.quoteText}>
        {item.text}
      </StyledText>
      <StyledText style={styles.quoteAuthor}>- {item.author}</StyledText>
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
          name={item.favorite ? 'bookmark' : 'bookmark-outline'}
          style={{color: colors.mintGreen}}
        />
      </View>
    </Pressable>
  );
};

export default QuotesListItem;
