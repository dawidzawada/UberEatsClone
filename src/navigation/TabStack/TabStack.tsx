import * as React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HouseIcon from '@icons/HouseIcon';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {TTabStackRoutesParamList} from '@navigation/model/Navigation.model';
import {Colors, getTextStyles} from '@globals/GlobalStyles';
import SearchIcon from '@icons/SearchIcon';
import CartIcon from '@icons/CartIcon';
import UserIcon from '@icons/UserIcon';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import SearchScreen from '@screens/SearchScreen/SearchScreen';
import CartScreen from '@screens/CartScreen/CartScreen';
import AccountScreen from '@screens/AccountScreen/AccountScreen';

const Tab = createBottomTabNavigator<TTabStackRoutesParamList>();

type TTabBarOptions = {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
};

const getTabBarOptions: (
  props: TTabBarOptions,
) => BottomTabNavigationOptions = ({route}) => ({
  tabBarIcon: ({color}) => {
    switch (route.name) {
      case 'Home':
        return <HouseIcon size={24} color={color} />;
      case 'Search':
        return <SearchIcon size={24} color={color} />;
      case 'Cart':
        return <CartIcon size={24} color={color} />;
      case 'Account':
        return <UserIcon size={24} color={color} />;
      default:
        return <HouseIcon size={24} color={color} />;
    }
  },
  tabBarStyle: {paddingTop: 12},
  tabBarItemStyle: {justifyContent: 'center', alignItems: 'center'},
  tabBarIconStyle: {padding: 4},
  tabBarActiveTintColor: Colors.carbon,
  tabBarInactiveTintColor: Colors.darkgrey,
  tabBarLabelStyle: getTextStyles({fontSize: 12, paddingLeft: 3}),
});

export const TabStack = () => {
  return (
    <Tab.Navigator screenOptions={getTabBarOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
