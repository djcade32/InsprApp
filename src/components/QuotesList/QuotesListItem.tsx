// This is used within the quoteslist component to display a single quote.

import {View, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/colors';
import StyledText from '../StyledText/StyledText';
import {IQuote} from '../../interfaces/quotesListInterface';
import {useNavigation} from '@react-navigation/native';
import {QuotesScreenItemProp} from '../../navigation/types/HomeStackNavigatorParamList';
import {
  UpdateQuoteInput,
  UpdateQuoteMutation,
  UpdateQuoteMutationVariables,
} from '../../API';
import {useMutation} from '@apollo/client';
import {updateQuote} from './queries';

const QuotesListItem = ({item, color = '', index}: IQuote) => {
  const navigation = useNavigation<QuotesScreenItemProp>();
  const [isFavorite, setIsFavorite] = useState(item?.favorite);
  // True if color prop is being used and false if it is not
  const overrideColor = !!color;

  const [runUpdateQuote, {loading: updateLoading}] = useMutation<
    UpdateQuoteMutation,
    UpdateQuoteMutationVariables
  >(updateQuote);

  function navigateToQuoteScreen() {
    navigation.navigate('QuoteScreen', {index});
  }
  async function onFavoritePress() {
    if (!item || updateLoading) {
      return;
    }
    const input: UpdateQuoteInput = {
      id: item?.id,
      favorite: !item.favorite,
      _version: item._version,
    };

    try {
      await runUpdateQuote({variables: {input}});
      setIsFavorite(prev => !prev);
    } catch (error) {
      Alert.alert('Oops', 'There was an error favoriting this quote.');
      console.log(error);
    }
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
        {item?.quote}
      </StyledText>
      <StyledText style={styles.quoteAuthor}>- {item?.author}</StyledText>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.categoryBadgeContainer}>
          <StyledText style={styles.categoryBadgeText}>
            {item?.category}
          </StyledText>
        </View>
        <MaterialCommunityIcons
          onPress={onFavoritePress}
          suppressHighlighting
          size={35}
          name={isFavorite ? 'bookmark' : 'bookmark-outline'}
          style={{color: colors.mintGreen}}
        />
      </View>
    </Pressable>
  );
};

export default QuotesListItem;
