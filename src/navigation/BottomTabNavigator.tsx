import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/colors';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import CreateQuoteScreen from '../screens/CreateQuoteScreen/CreateQuoteScreen';
import HomeStackNavigator from './HomeStackNavigator';
import {BottomTabNavigatorParamList} from './types/BottomTabNavigatorParamList';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.darkGreen,
        tabBarInactiveTintColor: colors.black,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Octicons name="home" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CreateQuote"
        component={CreateQuoteScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="plus-square" size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="user-o" size={35} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
