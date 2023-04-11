<<<<<<< HEAD
import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import AppNav from "./App/Components/Navigation/AppNav";
=======
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNav from './app/Components/Navigation/AppNav';
import { NativeBaseProvider } from 'native-base';
>>>>>>> e4157668 (create delete friend and group api and group in add member is working and expanse screen idesign is ready)

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
<<<<<<< HEAD
    <View style={{ flex: 1 }}>
      <AppNav />
    </View>
  );
};
=======
    <NativeBaseProvider>
      <View style = {{flex:1}}>
        <AppNav/>
      </View>
    </NativeBaseProvider>
  )
}
>>>>>>> e4157668 (create delete friend and group api and group in add member is working and expanse screen idesign is ready)

export default App;
