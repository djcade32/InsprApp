import {View, FlatList} from 'react-native';
import React from 'react';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import QUOTES_LIST from '../../../assets/data/quotes.json';
import spacing from '../../theme/spacing';
import colors from '../../theme/colors';
import QuotesScreenItem from './QuotesScreenItem';
import {IQuotesScreen} from '../../interfaces/quotesScreenInterface';

const QuotesScreen = ({title}: IQuotesScreen) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <HeaderNavigation title={title} />
      <FlatList
        style={{marginHorizontal: spacing.xsm, height: '100%'}}
        data={QUOTES_LIST}
        renderItem={({item}) => (
          <QuotesScreenItem
            item={item.item}
            color={title == 'Favorite' ? colors.red : ''}
          />
        )}
      />
    </View>
  );
};

export default QuotesScreen;
