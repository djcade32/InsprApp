import {View, FlatList, ActivityIndicator, ImageBackground} from 'react-native';
import React from 'react';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import spacing from '../../theme/spacing';
import colors from '../../theme/colors';
import QuotesScreenItem from './QuotesScreenItem';
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
import NoQuotesMessage from '../../components/NoQuotesMessage';
import bgImage from '../../../assets/images/bgs/3-tan-circles.png';
import styles from './styles';

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

  let quotes =
    data?.quotesByUserIDAndCreatedAt?.items.filter(quote => {
      if (!quote?._deleted) {
        if (title !== 'Favorite' && title !== 'Your quotes') {
          return quote?.category === title;
        }
        return quote;
      }
    }) || [];

  if (title === 'Favorite') {
    quotes = quotes?.filter(quote => quote?.favorite) || [];
  }

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
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
      <View style={{flex: 1}}>
        <HeaderNavigation title={title} />
        {quotes.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{height: '100%'}}
            contentContainerStyle={{alignItems: 'center'}}
            data={quotes}
            renderItem={({item, index}) => (
              <QuotesScreenItem
                index={index}
                item={item}
                color={title == 'Favorite' ? colors.red : ''}
                screen={title}
              />
            )}
          />
        ) : (
          <NoQuotesMessage
            message={
              title === 'Favorite'
                ? 'You have no quotes favorited'
                : 'You have no quotes created'
            }
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default QuotesScreen;
