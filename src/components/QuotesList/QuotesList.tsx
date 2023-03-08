// This component is used between the your quotes list and favorites quotes list to
// display quotes.

import {FlatList, View} from 'react-native';
import React from 'react';
import styles from './styles';
import QuotesListItem from './QuotesListItem';
import {IQuotesList} from '../../interfaces/quotesListInterface';
import StyledText from '../StyledText/StyledText';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const QuotesList = ({data, color}: IQuotesList) => {
  if (data?.length === 0) {
    return (
      <View style={styles.quotePlaceholder}>
        <StyledText style={{color: colors.grey, fontSize: fonts.size.md}}>
          No quotes saved
        </StyledText>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.categoriesList}
      data={data}
      renderItem={({item, index}) => {
        return <QuotesListItem item={item} color={color} index={index} />;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default QuotesList;
