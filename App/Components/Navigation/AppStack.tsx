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
import { themes } from '../../styles/theme';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <AppDrawer {...props} />}
        screenOptions={{
          drawerActiveTintColor: themes.default.colors.white,
          drawerInactiveTintColor: themes.colors.color1,
          drawerStyle: {width: scale(270)},
          drawerLabelStyle: {
            fontSize: scale(13),
          },
          headerShown: false,
        }}>
        <Drawer.Screen
          name="Home"
          component={TabNavigation}
          options={{
            headerShown: true,
            header: (props) => <AppHeader {...props}/>,
          }}
        />
        {/* <Drawer.Screen
          name="Group"
          component={GroupScreen}
          options={{
            headerShown: true,
            header: (props) => <AppHeader {...props}/>,
          }}
        /> */}
        <Drawer.Screen
          name="Account"
          component={AccountScreen}
          options={{
            headerShown: true,
            header: (props) => <AppHeader {...props}/>,
          }}
        />
        <Drawer.Screen
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
        />
      </Drawer.Navigator>
    </>
  );
};

export default AppStack;
