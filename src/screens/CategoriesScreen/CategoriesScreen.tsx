import {
  View,
  FlatList,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import StyledText from '../../components/StyledText/StyledText';
import spacing from '../../theme/spacing';
import {useNavigation} from '@react-navigation/native';
import CreateCategoryModal from '../../components/CreateCategoryModal/CreateCategoryModal';

const CATEGORIES_LIST = [
  'Art',
  'Beauty',
  'Business',
  'Design',
  'Failure',
  'Finance',
  'Health',
  'Motivation',
];

const CategoriesScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const createButton = (
    <StyledText
      style={styles.createButton}
      onPress={() => setModalVisible(!modalVisible)}>
      Create
    </StyledText>
  );

  function navigateToQuotesScreen(item: string) {
    navigation.navigate('QuotesScreen', {
      title: item,
    });
  }
  return (
    <View style={{backgroundColor: 'white'}}>
      <HeaderNavigation
        title={'Categories'}
        rightButton={createButton}
        showBackButton
      />
      <CreateCategoryModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <FlatList
        style={{height: '100%', paddingTop: spacing.sm}}
        columnWrapperStyle={{
          justifyContent: 'space-around',
          marginBottom: spacing.sm,
        }}
        contentContainerStyle={{alignItems: 'center'}}
        data={CATEGORIES_LIST}
        renderItem={({item}) => (
          <Pressable
            style={styles.categoryContainer}
            onPress={() => navigateToQuotesScreen(item)}>
            <StyledText style={styles.categoryText}>{item}</StyledText>
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
