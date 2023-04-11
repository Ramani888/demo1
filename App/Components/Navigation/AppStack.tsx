<<<<<<< HEAD
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
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
import GroupDetailScreen from "../../Screens/GroupDetail/GroupDetailScreen";
import FriendFinalScreen from "../../Screens/FriendFinal/FriendFinalScreen";
import FriendDetailScreen from "../../Screens/FriendDetail/FriendDetailScreen";
import AdjustScreen from "../../Screens/Adjust/AdjustScreen";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
=======
import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../Screens/Home/HomeScreen';
import {scale} from 'react-native-size-matters';
import FriendListScreen from '../../Screens/Friend/FriendListScreen';
import TabNavigation from './TabNavigation';
import GroupScreen from '../../Screens/Groups/GroupScreen';
import AppDrawer from '../AppDrawer/AppDrawer';
import AppHeader from '../AppHeader/AppHeader';
import AppContactList from '../AppContactList/AppContactList';
import ContactListScreen from '../../Screens/ContactList/ContactListScreen';
import AccountScreen from '../../Screens/account/AccountScreen';
import CreateGroupScreen from '../../Screens/CreateGroupScreen/CreateGroupScreen';
import GroupDetailScreen from '../../Screens/GroupDetail/GroupDetailScreen';
import FriendFinalScreen from '../../Screens/FriendFinal/FriendFinalScreen';
import FriendDetailScreen from '../../Screens/FriendDetail/FriendDetailScreen';
import ExpanseScreen from '../../Screens/Expanse/ExpanseScreen';
import GroupFinalScreen from '../../Screens/GroupFinal/GroupFinalScreen';
>>>>>>> e4157668 (create delete friend and group api and group in add member is working and expanse screen idesign is ready)

const Drawer = createDrawerNavigator();

const AppStack = () => {
  const navigation = useNavigation();
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
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
        <Drawer.Screen name="Home" component={TabNavigation} />
        <Drawer.Screen
          name="Account"
          component={AccountScreen}
          options={{
            headerShown: true,
            header: (props) => <AppHeader {...props} />,
          }}
        />
        <Drawer.Screen name="ContactList" component={ContactListScreen} />
        <Drawer.Screen name="CreateGroupScreen" component={CreateGroupScreen} />
        <Drawer.Screen name="GroupDetailScreen" component={GroupDetailScreen} />
        <Drawer.Screen name="AppContactList" component={AppContactList} />
        <Drawer.Screen name="FriendFinalScreen" component={FriendFinalScreen} />
        <Drawer.Screen
<<<<<<< HEAD
          name="FriendDetailScreen"
          component={FriendDetailScreen}
        />
        <Drawer.Screen
          name="adjust"
          component={AdjustScreen}
          options={{
            headerShown: true,
            header: (props) => (
              <View style={styles.headerParentViewStyle}>
                <View style={styles.headerView}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign
                      name="arrowleft"
                      size={scale(20)}
                      color="#FFFFFF"
                      style={styles.headerArrow}
                    />
                  </TouchableOpacity>
                  <Text style={styles.headerText}>Adjust Split</Text>
                  <TouchableOpacity>
                    <AntDesign
                      name="check"
                      size={scale(20)}
                      color="#FFFFFF"
                      style={styles.checkArrow}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ),
          }}
=======
          name="ContactList"
          component={ContactListScreen}
          // options={{
          //   headerShown: true,
          //   header: (props) => <AppHeader {...props}/>
          // }}
        />
        <Drawer.Screen
          name="CreateGroupScreen"
          component={CreateGroupScreen}
        />
        <Drawer.Screen 
          name='GroupDetailScreen'
          component={GroupDetailScreen}
        />
        <Drawer.Screen 
          name='AppContactList'
          component={AppContactList}
        />
        <Drawer.Screen 
          name='FriendFinalScreen'
          component={FriendFinalScreen}
        />
        <Drawer.Screen 
          name='GroupFinalScreen'
          component={GroupFinalScreen}
        />
        <Drawer.Screen 
          name='FriendDetailScreen'
          component={FriendDetailScreen}
        />
        <Drawer.Screen 
          name='ExpanseScreen'
          component={ExpanseScreen}
>>>>>>> e4157668 (create delete friend and group api and group in add member is working and expanse screen idesign is ready)
        />
      </Drawer.Navigator>
    </>
  );
};

export default AppStack;

export const styles = StyleSheet.create({
  headerParentViewStyle: {
    backgroundColor: "#282d30",
    height: verticalScale(60),
    shadowColor: "#000",
  },
  headerView: {
    height: verticalScale(60),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerArrow: {
    marginLeft: scale(15),
  },
  headerText: {
    fontSize: scale(15),
    color: "#FFFFFF",
    width: scale(260),
    fontFamily: "Mulish-SemiBold",
  },
  checkArrow: {
    marginRight: scale(15),
  },
});
