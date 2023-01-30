import {View, FlatList} from 'react-native';
import React from 'react';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import QUOTES_LIST from '../../../assets/data/quotes.json';
import spacing from '../../theme/spacing';
import colors from '../../theme/colors';
import QuotesScreenItem from './QuotesScreenItem';
import {IQuotesScreen} from '../../interfaces/quotesScreenInterface';
import {useRoute} from '@react-navigation/native';

const QuotesScreen = () => {
  const route = useRoute();
  const title = route.params?.title;
  return (
    <View style={{backgroundColor: 'white'}}>
      <HeaderNavigation title={title} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: spacing.xsm, height: '100%'}}
        data={QUOTES_LIST}
        renderItem={({item}) => (
          <QuotesScreenItem
            item={item.item}
            color={title == 'Favorite' ? colors.red : ''}
            screen={title}
          />
        )}
      />
    </View>
  );
};

export default QuotesScreen;
