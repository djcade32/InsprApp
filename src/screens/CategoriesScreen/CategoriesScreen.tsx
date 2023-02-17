import {
  View,
  FlatList,
  Pressable,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import StyledText from '../../components/StyledText/StyledText';
import spacing from '../../theme/spacing';
import {useNavigation} from '@react-navigation/native';
import CreateCategoryModal from '../../components/CreateCategoryModal/CreateCategoryModal';
import {CategoriesScreenProp} from '../../navigation/types/HomeStackNavigatorParamList';
import {useAuthContext} from '../../contexts/AuthContext';
import {getUser} from './queries';
import {useQuery} from '@apollo/client';
import {GetUserQuery, GetUserQueryVariables} from '../../API';
import colors from '../../theme/colors';
import ApiErrorMessage from '../../components/ApiErrorMessage';

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
  const navigation = useNavigation<CategoriesScreenProp>();
  const [modalVisible, setModalVisible] = useState(false);

  const {userId} = useAuthContext();
  const {data, error, loading} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  );

  const categories = data?.getUser?.categories;

  const createButton = (
    <StyledText
      style={styles.createButton}
      onPress={() => setModalVisible(true)}>
      Create
    </StyledText>
  );

  function navigateToQuotesScreen(item: string) {
    navigation.navigate('QuotesScreen', {
      title: item,
    });
  }

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={'large'} color={colors.grey} />
      </View>
    );
  }
  if (error) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ApiErrorMessage message={error?.message} />
      </View>
    );
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
        contentContainerStyle={{paddingHorizontal: spacing.xxsm}}
        data={categories}
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
