import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomDrawer = props => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: scale(15),
          paddingLeft: scale(10),
          paddingTop: verticalScale(10),
          color: '#05C0C0',
          textTransform: 'uppercase',
        }}>
        Welcom
      </Text>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: ''}}>
        <View style={{flex: 1}}>
          <View
            style={{
              borderBottomWidth: scale(0.3),
              borderBottomColor: 'grey',
              marginHorizontal: scale(6),
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome name="home" size={scale(22)} color="#000000" />
                <Text
                  style={{
                    fontSize: scale(15),
                    margin: scale(5),
                    color: 'black',
                    paddingVertical: verticalScale(2),
                    fontWeight: '500',
                    marginLeft: scale(10),
                  }}>
                  Home
                </Text>
              </View>
              <AntDesign
                name="right"
                size={scale(15)}
                color="#05C0C0"
                style={{
                  marginTop: verticalScale(8),
                  paddingRight: scale(3),
                  paddingVertical: verticalScale(2),
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomWidth: scale(0.3),
              borderBottomColor: 'grey',
              marginHorizontal: scale(6),
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Group')}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome name="home" size={scale(22)} color="#000000" />
                <Text
                  style={{
                    fontSize: scale(15),
                    margin: scale(5),
                    color: 'black',
                    paddingVertical: verticalScale(2),
                    fontWeight: '500',
                    marginLeft: scale(10),
                  }}>
                  Group
                </Text>
              </View>
              <AntDesign
                name="right"
                size={scale(15)}
                color="#05C0C0"
                style={{
                  marginTop: verticalScale(8),
                  paddingRight: scale(3),
                  paddingVertical: verticalScale(2),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          padding: scale(10),
          borderTopWidth: scale(1),
          borderTopColor: '#ccc',
        }}>
        <TouchableOpacity style={{paddingVertical: verticalScale(5)}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} color="#000000" />
            <Text
              style={{
                fontSize: scale(13),
                marginLeft: scale(5),
                color: '#000000',
                fontWeight: '700',
              }}>
              log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
