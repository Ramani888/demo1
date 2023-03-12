import React from 'react'
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { IsLoggedIn } from '../../utils/helpers/user';

const AppNav = () => {
    return (
        <View style={{flex: 1}}>
          <NavigationContainer>
            {!false ? (
              <AppStack />
              ) : (
              <AuthStack />
            )}
          </NavigationContainer>
        </View>
    );
}

export default AppNav