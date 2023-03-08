import {
  ActivityIndicator,
  Alert,
  FlatList,
  Share,
  View,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import StyledText from '../../components/StyledText/StyledText';
import fonts from '../../theme/fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import spacing from '../../theme/spacing';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/colors';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import QuoteMenu from '../../components/QuoteMenu/QuoteMenu';
import {useAuthContext} from '../../contexts/AuthContext';
import {useMutation, useQuery} from '@apollo/client';
import {
  ModelSortDirection,
  QuotesByUserIDAndCreatedAtQuery,
  QuotesByUserIDAndCreatedAtQueryVariables,
  UpdateQuoteInput,
  UpdateQuoteMutation,
  UpdateQuoteMutationVariables,
} from '../../API';
import {quotesByUserIDAndCreatedAt} from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import {useRoute} from '@react-navigation/native';
import {QuoteScreenRouteProp} from '../../navigation/types/HomeStackNavigatorParamList';
import {updateQuote} from './queries';
import {Quote} from '../../API';

const QuoteScreen = () => {
  const route = useRoute<QuoteScreenRouteProp>();
  const flatListRef = useRef<FlatList | null>(null);
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(route.params.index);
  const [activeQuoteFavorite, setActiveQuoteFavorite] = useState(false);
  const [activeQuote, setActiveQuote] = useState<Quote | null>(null);
  const {userId} = useAuthContext();

  const {data, loading, error} = useQuery<
    QuotesByUserIDAndCreatedAtQuery,
    QuotesByUserIDAndCreatedAtQueryVariables
  >(quotesByUserIDAndCreatedAt, {
    variables: {
      userID: userId,
      sortDirection: ModelSortDirection.DESC,
    },
  });

  const [runUpdateQuote, {loading: updateLoading}] = useMutation<
    UpdateQuoteMutation,
    UpdateQuoteMutationVariables
  >(updateQuote);

  async function onFavoritePress() {
    if (!activeQuote || updateLoading) {
      return;
    }
    const input: UpdateQuoteInput = {
      id: activeQuote?.id,
      favorite: !activeQuote?.favorite,
      _version: activeQuote?._version,
    };

    try {
      await runUpdateQuote({variables: {input}});
      setActiveQuoteFavorite(prev => !prev);
    } catch (error) {
      Alert.alert('Oops', 'There was an error favoriting this quote.');
      console.log(error);
    }
  }

  const quotes =
    data?.quotesByUserIDAndCreatedAt?.items.filter(quote => !quote?._deleted) ||
    [];

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
        <ApiErrorMessage message={error.message} />
      </View>
    );
  }

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (loading) {
        return;
      }
      if (viewableItems.length > 0) {
        const {item, index} = viewableItems[0];
        setActiveQuoteIndex(index || 0);
        setActiveQuoteFavorite(item?.favorite);
        setActiveQuote(item);
      }
    },
  );

  const shareHandler = async () => {
    const message =
      '"' +
      activeQuote?.quote +
      '"\n\n- ' +
      activeQuote?.author +
      '\n\nShared with the Inspr App';
    try {
      await Share.share({
        message: message,
        // const result = await Share.share({
        //   message:
        //     'React Native | A framework for building native apps using React',
      });
      // if (result.action === Share.sharedAction) {
      //   if (result.activityType) {
      //     // shared with activity type of result.activityType
      //   } else {
      //     // shared
      //   }
      // } else if (result.action === Share.dismissedAction) {
      //   // dismissed
      // }
    } catch (e) {
      if (Share.dismissedAction) {
        console.log('Dissmissed!!!!');
      } else {
        Alert.alert(e);
      }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderNavigation />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View style={styles.categoryAndMoreOptionsContainer}>
          <StyledText style={{fontSize: fonts.size.xlg}}>
            {activeQuote?.category}
          </StyledText>
          <QuoteMenu activeQuote={quotes[activeQuoteIndex]} />
        </View>
        <FlatList
          ref={flatListRef}
          style={{flexGrow: 1}}
          data={quotes}
          renderItem={({item}) => (
            <View style={styles.quoteContainer}>
              <StyledText style={styles.quoteText}>"{item?.quote}"</StyledText>
              <StyledText style={styles.author}>- {item?.author}</StyledText>
            </View>
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={onViewableItemsChanged.current}
          initialScrollIndex={route.params.index}
          onScrollToIndexFailed={error => {
            if (!flatListRef.current) {
              return;
            }
            flatListRef.current.scrollToOffset({
              offset: error.averageItemLength * error.index,
              animated: false,
            });
            setTimeout(() => {
              if (quotes?.length !== 0 && flatListRef.current !== null) {
                flatListRef.current.scrollToIndex({
                  index: error.index,
                  animated: false,
                });
              }
            }, 100);
          }}
        />

        <View style={styles.footer}>
          <View style={styles.bookmarkAndShareContainer}>
            <MaterialCommunityIcons
              size={45}
              name={activeQuoteFavorite ? 'bookmark' : 'bookmark-outline'}
              color={colors.mintGreen}
              onPress={onFavoritePress}
              suppressHighlighting
            />
            <MaterialIcons
              size={45}
              name="ios-share"
              onPress={shareHandler}
              suppressHighlighting
            />
          </View>
          <View
            style={{
              flex: 1 / 2,
              alignItems: 'center',
            }}>
            <AnimatedDotsCarousel
              length={quotes?.length || 0}
              currentIndex={activeQuoteIndex}
              maxIndicators={1}
              interpolateOpacityAndColor={true}
              activeIndicatorConfig={{
                color: colors.black,
                margin: 3,
                opacity: 1,
                size: 10,
              }}
              inactiveIndicatorConfig={{
                color: colors.grey,
                margin: 3,
                opacity: 0.5,
                size: 10,
              }}
              decreasingDots={[
                {
                  config: {
                    color: colors.grey,
                    margin: 3,
                    opacity: 0.5,
                    size: 8,
                  },
                  quantity: 1,
                },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default QuoteScreen;
