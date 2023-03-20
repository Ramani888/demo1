import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import HomeScreen from "../../Screens/Home/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { scale, verticalScale } from "react-native-size-matters";
import FriendListScreen from "../../Screens/Friend/FriendListScreen";
import AnalysisScreen from "../../Screens/analysis/AnalysisScreen";
import AccountScreen from "../../Screens/account/AccountScreen";
import AppContactList from "../AppContactList/AppContactList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactListScreen from "../../Screens/ContactList/ContactListScreen";
import GroupScreen from "../../Screens/Groups/GroupScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AppHeader from "../AppHeader/AppHeader";
import Octicons from "react-native-vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  const navigation = useNavigation();
  const getScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="FriendListScreen" component={FriendListScreen} />
        <Stack.Screen name="ContactList" component={ContactListScreen} />
      </Stack.Navigator>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#05C0C0",
        tabBarLabelStyle: {
          fontSize: scale(12),
          marginBottom: verticalScale(5),
        },
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: scale(60),
          width: scale(350),
          paddingVertical: verticalScale(5),
          borderTopLeftRadius: scale(10),
          borderTopRightRadius: scale(10),
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        options={{
          headerShown: true,
          header: (props) => <AppHeader {...props} />,
          tabBarIconStyle: { height: scale(30), width: scale(30) },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
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
          headerShown: true,
          header: (props) => <AppHeader {...props} />,
          tabBarIconStyle: { height: scale(30), width: scale(30) },
          tabBarIcon: ({ color, focused }) => (
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
          headerShown: true,
          header: () => (
            <View style={{ backgroundColor: "#FFFFFF" }}>
              <View
                style={{
                  flexDirection: "row",
                  width: scale(350),
                  height: verticalScale(70),
                  alignItems: "center",
                  backgroundColor: "white",
                  borderBottomLeftRadius: verticalScale(15),
                  borderBottomRightRadius: verticalScale(15),
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: scale(2),
                  },
                  shadowOpacity: scale(0.25),
                  shadowRadius: scale(4),
                  elevation: scale(6),
                }}
              >
                <View style={{ marginLeft: 20, marginTop: 15 }}>
                  <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Octicons
                      name="three-bars"
                      size={scale(22)}
                      color="black"
                      style={{ marginBottom: verticalScale(6) }}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Image
                    source={require("../../Assets/Img/Header/split.png")}
                    style={{
                      height: scale(40),
                      width: scale(90),
                      marginLeft: scale(30),
                    }}
                  />
                </View>
                <View style={{ position: "absolute", right: scale(25) }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ContactList")}
                  >
                    <Ionicons
                      name="person-add-sharp"
                      size={scale(25)}
                      color="#05C0C0"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ),
          tabBarIconStyle: { height: scale(30), width: scale(30) },
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="user" size={scale(25)} color={color} />
          ),
        }}
        name="FreindList"
        component={FriendListScreen}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          header: () => (
            <View style={{ backgroundColor: "#FFFFFF" }}>
              <View
                style={{
                  flexDirection: "row",
                  width: scale(350),
                  height: verticalScale(70),
                  alignItems: "center",
                  backgroundColor: "white",
                  borderBottomLeftRadius: verticalScale(15),
                  borderBottomRightRadius: verticalScale(15),
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: scale(2),
                  },
                  shadowOpacity: scale(0.25),
                  shadowRadius: scale(4),
                  elevation: scale(6),
                }}
              >
                <View style={{ marginLeft: 20, marginTop: 15 }}>
                  <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Octicons
                      name="three-bars"
                      size={scale(22)}
                      color="black"
                      style={{ marginBottom: verticalScale(6) }}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Image
                    source={require("../../Assets/Img/Header/split.png")}
                    style={{
                      height: scale(40),
                      width: scale(90),
                      marginLeft: scale(30),
                    }}
                  />
                </View>
                <View style={{ position: "absolute", right: scale(25) }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("CreateGroupScreen")}
                  >
                    <MaterialIcons
                      name="group-add"
                      size={scale(30)}
                      color="#05C0C0"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ),
          tabBarIconStyle: { height: scale(30), width: scale(30) },
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={"group"} size={scale(25)} color={color} />
          ),
        }}
        name="Group"
        component={GroupScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
