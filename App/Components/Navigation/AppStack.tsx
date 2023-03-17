import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../Screens/Home/HomeScreen";
import FriendListScreen from "../../Screens/Friend/FriendListScreen";
import TabNavigation from "./TabNavigation";
import GroupScreen from "../../Screens/Groups/GroupScreen";
import AppDrawer from "../AppDrawer/AppDrawer";
import AppHeader from "../AppHeader/AppHeader";
import AppContactList from "../AppContactList/AppContactList";
import ContactListScreen from "../../Screens/ContactList/ContactListScreen";
import AccountScreen from "../../Screens/account/AccountScreen";
import CreateGroupScreen from "../../Screens/CreateGroupScreen/CreateGroupScreen";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  const navigation = useNavigation();
  return (
    <>
      <Drawer.Navigator
        initialRouteName="home"
        drawerContent={(props) => <AppDrawer {...props} />}
        screenOptions={{
          drawerActiveTintColor: "#F2A1B2",
          drawerInactiveTintColor: "#333",
          drawerStyle: { width: scale(270) },
          drawerLabelStyle: {
            fontSize: scale(13),
          },
          headerShown: false,
        }}
      >
        <Drawer.Screen name="home" component={TabNavigation} />

        <Drawer.Screen
          name="Account"
          component={AccountScreen}
          options={{
            headerShown: true,
            header: (props) => <AppHeader {...props} />,
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default AppStack;
