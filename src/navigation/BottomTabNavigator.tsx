import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/colors';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CreateQuoteScreen from '../screens/CreateQuoteScreen/CreateQuoteScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.darkGreen,
        tabBarInactiveTintColor: colors.black,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Octicons name="home" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CreateQuote"
        component={CreateQuoteScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <AntDesign name="pluscircleo" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <FontAwesome name="user-o" size={35} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
