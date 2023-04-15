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
import {useMutation} from '@apollo/client';
import {
  DeleteQuoteMutation,
  DeleteQuoteMutationVariables,
  Quote,
} from '../../API';
import {deleteQuote} from './queries';
import {useNavigation} from '@react-navigation/native';
import {EditQuoteScreenItemProp} from '../../navigation/types/HomeStackNavigatorParamList';

const QuoteMenu = ({activeQuote}: {activeQuote: Quote | null}) => {
  const navigation = useNavigation<EditQuoteScreenItemProp>();
  const [runDeleteQuote] = useMutation<
    DeleteQuoteMutation,
    DeleteQuoteMutationVariables
  >(deleteQuote, {
    variables: {
      input: {id: activeQuote?.id || '', _version: activeQuote?._version},
    },
  });

  function confirmDeleteQuote() {
    Alert.alert('Are you sure?', 'Deleting a quote is permanent.', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Yes, delete', style: 'destructive', onPress: startDeleteQuote},
    ]);
  }
  async function startDeleteQuote() {
    try {
      await runDeleteQuote();
    } catch (error) {
      Alert.alert('Oops', 'Erorr deleting quote');
      console.log('Erorr deleting quote: ', error);
    }
  }

  function navigateToEditQuoteScreen() {
    navigation.navigate('EditQuoteScreen', {quote: activeQuote});
  }

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
        <MenuOption onSelect={navigateToEditQuoteScreen}>
          <StyledText style={styles.optionText}>Edit</StyledText>
        </MenuOption>
        <MenuOption onSelect={confirmDeleteQuote}>
          <StyledText style={[styles.optionText, {color: colors.red}]}>
            Delete
          </StyledText>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

export default QuoteMenu;
