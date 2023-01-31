import {Alert} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  Menu,
  renderers,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StyledText from '../StyledText/StyledText';
import colors from '../../theme/colors';

const QuoteMenu = () => {
  return (
    <Menu
      renderer={renderers.Popover}
      style={{
        marginLeft: 'auto',
      }}>
      <MenuTrigger>
        <MaterialIcons suppressHighlighting name="more-horiz" size={45} />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => Alert.alert('Editing')}>
          <StyledText style={styles.optionText}>Edit</StyledText>
        </MenuOption>
        <MenuOption onSelect={() => Alert.alert('Deleting')}>
          <StyledText style={[styles.optionText, {color: colors.red}]}>
            Delete
          </StyledText>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

export default QuoteMenu;
