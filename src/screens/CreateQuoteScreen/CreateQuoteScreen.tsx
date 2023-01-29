import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import StyledText from '../../components/StyledText/StyledText';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import DropDownPicker from 'react-native-dropdown-picker';
import StyledTextInput from '../../components/TextInput/StyledTextInput';
import StyledButton from '../../components/StyledButton/StyledButton';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';

const CreateQuoteScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Art', value: 'art'},
    {label: 'Beauty', value: 'beauty'},
    {label: 'Business', value: 'business'},
    {label: 'Design', value: 'design'},
    {label: 'Failure', value: 'failure'},
    {label: 'Finance', value: 'finance'},
    {label: 'Health', value: 'health'},
    {label: 'Motivation', value: 'motivation'},
  ]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setOpen(!open);
      }}>
      <View style={styles.screen}>
        <HeaderNavigation title="Create quote" showBackButton={false} />
        <View style={styles.inputForm}>
          <View style={{zIndex: 1}}>
            <StyledText style={{fontSize: fonts.size.md, marginBottom: 10}}>
              Category
            </StyledText>
            <DropDownPicker
              textStyle={{
                fontSize: fonts.size.md,
                color: !open && !value ? colors.grey : colors.black,
              }}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              props={{
                activeOpacity: 1,
              }}
            />
          </View>
          <StyledTextInput
            labelText="Author (optional)"
            placeholder="Who said the quote?"
          />
          <StyledTextInput
            multiline
            labelText="Quote"
            placeholder="What was said?"
          />

          <StyledButton text="Create" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreateQuoteScreen;
