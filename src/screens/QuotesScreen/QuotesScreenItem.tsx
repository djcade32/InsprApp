import {View, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StyledText from '../../components/StyledText/StyledText';
import colors from '../../theme/colors';
import styles from './styles';
import {IQuote} from '../../interfaces/quotesListInterface';
import {useNavigation} from '@react-navigation/native';
import {QuotesScreenItemProp} from '../../navigation/types/HomeStackNavigatorParamList';

const QuotesScreenItem = ({item, color = '', screen = '', index}: IQuote) => {
  const navigation = useNavigation<QuotesScreenItemProp>();
  // True if color prop is being used and false if it is not
  const isFavoriteScreen = !!color;
  const isYourQuotesScreen = screen === 'Your quotes';

  function navigateToQuoteScreen() {
    navigation.navigate('QuoteScreen', {index});
  }
  return (
    <Pressable
      style={[
        styles.quoteContainer,
        isFavoriteScreen
          ? {backgroundColor: color}
          : {backgroundColor: colors.darkGreen},
        isFavoriteScreen || isYourQuotesScreen ? {height: 165} : {},
      ]}
      onPress={navigateToQuoteScreen}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <StyledText numberOfLines={3} style={styles.quoteText}>
          "{item?.quote}"
        </StyledText>
      </View>
      <View
        style={[
          styles.quoteFooter,
          isFavoriteScreen || isYourQuotesScreen
            ? {alignItems: 'flex-end', marginBottom: 10}
            : {},
        ]}>
        <View style={!isFavoriteScreen && {alignSelf: 'center'}}>
          <StyledText style={styles.quoteAuthor}>- {item?.author}</StyledText>
          {isFavoriteScreen || isYourQuotesScreen ? (
            <View style={styles.categoryBadgeContainer}>
              <StyledText style={styles.categoryBadgeText}>
                {item?.category}
              </StyledText>
            </View>
          ) : (
            <></>
          )}
        </View>
        <MaterialCommunityIcons
          size={35}
          name={item?.favorite ? 'bookmark' : 'bookmark-outline'}
          style={{color: colors.mintGreen}}
        />
      </View>
    </Pressable>
  );
};

export default QuotesScreenItem;
