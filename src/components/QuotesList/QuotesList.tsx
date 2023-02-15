// This component is used between the your quotes list and favorites quotes list to
// display quotes.

import {FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import QuotesListItem from './QuotesListItem';
import {IQuotesList} from '../../interfaces/quotesListInterface';

const QuotesList = ({data, color}: IQuotesList) => {
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
