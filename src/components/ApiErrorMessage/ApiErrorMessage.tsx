import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import image from './error3.jpg';
import colors from '../../theme/colors';
import StyledText from '../StyledText/StyledText';
import fonts from '../../theme/fonts';
import StyledButton from '../StyledButton/StyledButton';

interface ApiErrorMessageProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

const ApiErrorMessage = ({
  title = 'Error',
  message = 'Unknown Error',
  onRetry = () => {},
}: ApiErrorMessageProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <StyledText style={styles.title}>{title}</StyledText>
      <StyledText style={styles.message}>{message}</StyledText>
      <StyledButton text="Retry" onPress={onRetry} size={'medium'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
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
  },
});

export default ApiErrorMessage;
