import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import StyledText from '../StyledText/StyledText';
import Octicons from 'react-native-vector-icons/Octicons';
import {IHeaderNavigation} from '../../interfaces/headerNavigationInterfaces';

const HeaderNavigation = ({
  leftButton,
  title,
  rightButton,
  showBackButton = true,
}: IHeaderNavigation) => {
  return (
    <View style={styles.container}>
      {showBackButton && (
        <View style={styles.leftButton}>
          {leftButton ? leftButton : <Octicons name="arrow-left" size={35} />}
        </View>
      )}

      <StyledText style={styles.title}>{title}</StyledText>
      <View style={styles.rightButton}>{rightButton}</View>
    </View>
  );
};

export default HeaderNavigation;
