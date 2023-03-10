import {View, Text} from 'react-native';
import React from 'react';
import LoginScreen from '../../Screens/Login/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from '../../Screens/SignUp/SignupScreen';
import AppContactList from '../AppContactList/AppContactList';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name='AppContactList' component={AppContactList} />
    </Stack.Navigator>
  );
};

export default AuthStack;
