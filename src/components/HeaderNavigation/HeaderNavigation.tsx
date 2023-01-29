import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import StyledText from '../StyledText/StyledText';
import Octicons from 'react-native-vector-icons/Octicons';
import {IHeaderNavigation} from '../../interfaces/headerNavigationInterfaces';
import fonts from '../../theme/fonts';

const HeaderNavigation = ({
  leftButton,
  title,
  rightButton,
  showBackButton = true,
  boldTitle = false,
  titleSize,
}: IHeaderNavigation) => {
  return (
    <View style={styles.container}>
      {showBackButton && (
        <View style={styles.leftButton}>
          {leftButton ? leftButton : <Octicons name="arrow-left" size={35} />}
        </View>
      )}

      <StyledText
        style={[
          styles.title,
          boldTitle && {fontWeight: fonts.weight.bold},
          !!titleSize && {fontSize: titleSize},
        ]}>
        {title}
      </StyledText>
      <View style={styles.rightButton}>{rightButton}</View>
    </View>
  );
};

export default HeaderNavigation;
