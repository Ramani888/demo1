import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screens/Home/HomeScreen';
import CustomeHeader from '../Components/CustomHeader';
import {scale} from 'react-native-size-matters';
import CustomDrawer from '../Components/CustomeDrawer';
import FriendListScreen from '../Screens/Friend/FriendListScreen';
import TabNavigation from './TabNavigation';
import GroupScreen from '../Screens/Groups/GroupScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: '#F2A1B2',
        drawerInactiveTintColor: '#333',
        drawerStyle: {width: scale(270)},
        drawerLabelStyle: {
          fontSize: scale(13),
        },
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigation}
        options={{
          headerShown: true,
          header: () => <CustomeHeader />,
        }}
      />
      <Drawer.Screen
        name="Group"
        component={GroupScreen}
        options={{
          headerShown: true,
          header: () => <CustomeHeader />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
