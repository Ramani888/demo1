import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNav from './app/Components/Navigation/AppNav';
import SignupScreen from './app/Screens/SignUp/SignupScreen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <View style = {{flex:1}}>
      <SignupScreen/>
    </View>
  )
}

export default App
