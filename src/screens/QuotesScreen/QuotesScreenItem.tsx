import {View, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StyledText from '../../components/StyledText/StyledText';
import colors from '../../theme/colors';
import styles from './styles';
import {IQuote} from '../../interfaces/quotesList';

const QuotesScreenItem = ({item, color = ''}: IQuote) => {
  // True if color prop is being used and false if it is not
  const isFavoriteScreen = !!color;
  return (
    <Pressable
      style={[
        styles.quoteContainer,
        isFavoriteScreen
          ? {backgroundColor: color, height: 165}
          : {backgroundColor: colors.darkGreen},
      ]}>
      <StyledText numberOfLines={3} style={styles.quoteText}>
        {item.text}
      </StyledText>
      <View
        style={[
          styles.quoteFooter,
          isFavoriteScreen && {alignItems: 'flex-end', marginBottom: 10},
        ]}>
        <View style={!isFavoriteScreen && {alignSelf: 'center'}}>
          <StyledText style={styles.quoteAuthor}>- {item.author}</StyledText>
          {isFavoriteScreen && (
            <View style={styles.categoryBadgeContainer}>
              <StyledText style={styles.categoryBadgeText}>
                {item.category}
              </StyledText>
            </View>
          )}
        </View>
        <MaterialCommunityIcons
          size={35}
          name={'bookmark'}
          style={{color: colors.mintGreen}}
        />
      </View>
    </Pressable>
  );
};

export default QuotesScreenItem;
