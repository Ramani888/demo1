import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { IsLoggedIn } from "../../utils/helpers/user";
import useLogin from "../../Hooks/useLogin";

const AppNav = () => {
  const { isLogin } = useLogin();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {!isLogin ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </View>
  );
};

export default AppNav;
