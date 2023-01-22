import {FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import QuotesListItem from './QuotesListItem';

const QuotesList = ({data}) => {
  return (
    <FlatList
      style={styles.categoriesList}
      data={data}
      renderItem={({item}) => {
        return <QuotesListItem item={item} />;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default QuotesList;
