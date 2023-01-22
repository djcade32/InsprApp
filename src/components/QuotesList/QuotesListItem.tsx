import {View, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/colors';
import StyledText from '../StyledText/StyledText';

interface IQuote {
  item: {
    key: string;
    author: string;
    text: string;
    category: string;
  };
}

const QuotesListItem = ({item}: IQuote) => {
  return (
    <Pressable style={styles.quoteContainer}>
      <StyledText numberOfLines={3} style={styles.quoteText}>
        {item.text}
      </StyledText>
      <StyledText style={styles.quoteAuthor}>- {item.author}</StyledText>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.categoryBadgeContainer}>
          <StyledText style={styles.categoryBadgeText}>
            {item.category}
          </StyledText>
        </View>
        <MaterialCommunityIcons
          size={35}
          name="bookmark-outline"
          style={{color: colors.mintGreen}}
        />
      </View>
    </Pressable>
  );
};

export default QuotesListItem;
