import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from '../../Screens/Home/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {scale, verticalScale} from 'react-native-size-matters';
import FriendListScreen from '../../Screens/Friend/FriendListScreen';
import AnalysisScreen from '../../Screens/analysis/AnalysisScreen';
import AccountScreen from '../../Screens/account/AccountScreen';
import AppContactList from '../AppContactList/AppContactList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactListScreen from '../../Screens/ContactList/ContactListScreen';
import GroupScreen from '../../Screens/Groups/GroupScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  const getScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="FriendListScreen" component={FriendListScreen} />
        <Stack.Screen name='ContactList' component={ContactListScreen} />
      </Stack.Navigator>
    )
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#05C0C0',
        tabBarLabelStyle: {
          fontSize: scale(12),
          marginBottom: verticalScale(5),
        },
        // labelStyle: {
        //   fontSize: scale(20),
        // },
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: scale(60),
          width: scale(350),
          paddingVertical: verticalScale(5),
          borderTopLeftRadius: scale(10),
          borderTopRightRadius: scale(10),
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        options={{
          tabBarIconStyle: {height: scale(30), width: scale(30)},
          tabBarIcon: ({color, focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={scale(25)}
              color={color}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIconStyle: {height: scale(30), width: scale(30)},
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name="google-analytics"
              size={scale(25)}
              color={color}
            />
          ),
        }}
        name="Analysis"
        component={AnalysisScreen}
      />
      <Tab.Screen
        options={{
          tabBarIconStyle: {height: scale(30), width: scale(30)},
          tabBarIcon: ({color, focused}) => (
            <FontAwesome name="user" size={scale(25)} color={color} />
          ),
        }}
        name="FreindList"
        component={FriendListScreen}
      />
      <Tab.Screen
        options={{
          tabBarIconStyle: {height: scale(30), width: scale(30)},
          tabBarIcon: ({color, focused}) => (
            <MaterialIcons
              name={'group'}
              size={scale(25)}
              color={color}
            />
          ),
        }}
        name="Group"
        component={GroupScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
