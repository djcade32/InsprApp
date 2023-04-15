import {Pressable, View} from 'react-native';
import React from 'react';
import styles from './styles';
import StyledText from '../StyledText/StyledText';
import Octicons from 'react-native-vector-icons/Octicons';
import {IHeaderNavigation} from '../../interfaces/headerNavigationInterfaces';
import fonts from '../../theme/fonts';
import {useNavigation} from '@react-navigation/native';

const HeaderNavigation = ({
  leftButton,
  title,
  rightButton,
  showBackButton = true,
  boldTitle = false,
  titleSize,
}: IHeaderNavigation) => {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      {showBackButton && (
        <Pressable style={styles.leftButton}>
          {leftButton ? (
            leftButton
          ) : (
            <Octicons
              name="arrow-left"
              size={35}
              suppressHighlighting
              onPress={navigateBack}
            />
          )}
        </Pressable>
      )}

      <StyledText
        style={[
          styles.title,
          boldTitle && {fontWeight: fonts.weight.medium},
          !!titleSize && {fontSize: titleSize},
        ]}>
        {title}
      </StyledText>
      <View style={styles.rightButton}>{rightButton}</View>
    </View>
  );
};

export default HeaderNavigation;
