import {View, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import QUOTES_LIST from '../../../assets/data/quotes.json';
import spacing from '../../theme/spacing';
import colors from '../../theme/colors';
import QuotesScreenItem from './QuotesScreenItem';
import {IQuotesScreen} from '../../interfaces/quotesScreenInterface';
import {useRoute} from '@react-navigation/native';
import {QuotesScreenRouteProp} from '../../navigation/types/HomeStackNavigatorParamList';
import {useQuery} from '@apollo/client';
import {
  ModelSortDirection,
  QuotesByUserIDAndCreatedAtQuery,
  QuotesByUserIDAndCreatedAtQueryVariables,
} from '../../API';
import {quotesByUserIDAndCreatedAt} from './queries';
import {useAuthContext} from '../../contexts/AuthContext';
import ApiErrorMessage from '../../components/ApiErrorMessage';

const QuotesScreen = () => {
  const route = useRoute<QuotesScreenRouteProp>();
  const {userId} = useAuthContext();
  const title = route.params?.title;

  const {data, loading, error} = useQuery<
    QuotesByUserIDAndCreatedAtQuery,
    QuotesByUserIDAndCreatedAtQueryVariables
  >(quotesByUserIDAndCreatedAt, {
    variables: {
      userID: userId,
      sortDirection: ModelSortDirection.DESC,
    },
  });

  const quotes =
    data?.quotesByUserIDAndCreatedAt?.items.filter(quote => !quote?._deleted) ||
    [];
  const favoriteQuotes = quotes?.filter(quote => quote?.favorite) || [];

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={'large'} color={colors.grey} />
      </View>
    );
  }
  if (error) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ApiErrorMessage message={error?.message} />
      </View>
    );
  }
  return (
    <View style={{backgroundColor: 'white'}}>
      <HeaderNavigation title={title} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: spacing.xsm, height: '100%'}}
        data={title === 'Favorite' ? favoriteQuotes : quotes}
        renderItem={({item, index}) => (
          <QuotesScreenItem
            index={index}
            item={item}
            color={title == 'Favorite' ? colors.red : ''}
            screen={title}
          />
        )}
      />
    </View>
  );
};

export default QuotesScreen;
