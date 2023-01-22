// This component is used between the your quotes list and favorites quotes list to
// display quotes.

import {FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import QuotesListItem from './QuotesListItem';
import {IQuotesList} from '../../interfaces/quotesList';

const QuotesList = ({data, color}: IQuotesList) => {
  return (
    <FlatList
      style={styles.categoriesList}
      data={data}
      renderItem={({item}) => {
        return <QuotesListItem item={item.item} color={color} />;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default QuotesList;
