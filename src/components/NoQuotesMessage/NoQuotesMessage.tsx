import {View, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import StyledText from '../StyledText/StyledText';
import fonts from '../../theme/fonts';

interface NoQuotesMessageProps {
  title?: string;
  message?: string;
}

const NoQuotesMessage = ({
  title = 'No Quotes',
  message = 'You have no quotes created',
}: NoQuotesMessageProps) => {
  return (
    <View style={styles.container}>
      <StyledText style={styles.title}>{title}</StyledText>
      <StyledText style={styles.message}>{message}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  image: {
    width: '70%',
    height: 200,
  },
  title: {
    fontSize: fonts.size.lg,
    margin: 20,
  },
  message: {
    fontSize: fonts.size.md,
    color: colors.grey,
    marginBottom: 10,
    width: '70%',
    textAlign: 'center',
  },
});

export default NoQuotesMessage;
