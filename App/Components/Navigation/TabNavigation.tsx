import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import HomeScreen from "../../Screens/Home/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { scale, verticalScale } from "react-native-size-matters";
import FriendListScreen from "../../Screens/Friend/FriendListScreen";
import AnalysisScreen from "../../Screens/analysis/AnalysisScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactListScreen from "../../Screens/ContactList/ContactListScreen";
import GroupScreen from "../../Screens/Groups/GroupScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AppHeader from "../AppHeader/AppHeader";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import CreateGroupScreen from "../../Screens/CreateGroupScreen/CreateGroupScreen";

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

  const GroupStack = () => {
    const navigation = useNavigation();
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Group" component={GroupScreen} />
        <Stack.Screen
          options={{
            header: () => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: verticalScale(60),
                  backgroundColor: "#282d30",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: verticalScale(2),
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: scale(4),
                  elevation: scale(2),
                }}
              >
                <TouchableOpacity onPress={() => {}}>
                  <AntDesign
                    name="close"
                    size={scale(22)}
                    color="#FFFFFF"
                    style={{ marginLeft: scale(10) }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: scale(20),
                    marginRight: scale(80),
                    color: "#FFFFFF",
                  }}
                >
                  Create a group
                </Text>

                <TouchableOpacity style={{ marginRight: scale(15) }}>
                  <Text style={{ color: "#FFFFFF", fontSize: scale(15) }}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            ),
          }}
          name="CreateGroup"
          component={CreateGroupScreen}
        />
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
          tabBarIconStyle: { height: scale(30), width: scale(30) },
          headerShown: true,
          header: (props) => <AppHeader {...props} />,
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
          header: (props) => <AppHeader {...props} />,
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
          header: (props) => <AppHeader {...props} />,
          // header: () => (
          //   <View
          //     style={{
          //       flexDirection: "row",
          //       justifyContent: "space-between",
          //       alignItems: "center",
          //       height: verticalScale(60),
          //       backgroundColor: "#282d30",
          //       shadowColor: "#000",
          //       shadowOffset: {
          //         width: 0,
          //         height: verticalScale(2),
          //       },
          //       shadowOpacity: 0.25,
          //       shadowRadius: scale(4),
          //       elevation: scale(2),
          //     }}
          //   >
          //     <TouchableOpacity onPress={() => {}}>
          //       <AntDesign
          //         name="close"
          //         size={scale(22)}
          //         color="#FFFFFF"
          //         style={{ marginLeft: scale(10) }}
          //       />
          //     </TouchableOpacity>

          //     <Text
          //       style={{
          //         fontSize: scale(20),
          //         marginRight: scale(80),
          //         color: "#FFFFFF",
          //       }}
          //     >
          //       Create a group
          //     </Text>

          //     <TouchableOpacity style={{ marginRight: scale(15) }}>
          //       <Text style={{ color: "#FFFFFF", fontSize: scale(15) }}>
          //         Save
          //       </Text>
          //     </TouchableOpacity>
          //   </View>
          // ),
          tabBarIconStyle: { height: scale(30), width: scale(30) },
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={"group"} size={scale(25)} color={color} />
          ),
        }}
        name="Group"
        component={GroupStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
