import React from 'react'
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
  } from 'react-native';
  import {DrawerContentScrollView} from '@react-navigation/drawer';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import {useNavigation} from '@react-navigation/native';
  import {scale, verticalScale} from 'react-native-size-matters';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
import useLogin from '../../Hooks/useLogin';
import { themes } from '../../styles/theme';

const AppDrawer: React.FC<any> = (props) => {
    const navigation = useNavigation();
    const { handleLogout } = useLogin()

    const handleServerLogout = () => {
      handleLogout()
      navigation.navigate('Login')
    }
    return (
        <View style={{flex: 1, backgroundColor: themes.colors.color1}}>
          <Text
            style={{
              fontSize: scale(16),
              paddingLeft: scale(10),
              paddingTop: verticalScale(10),
              marginTop: verticalScale(10),
              color: themes.default.colors.white,
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}>
            Welcom
          </Text>
          <DrawerContentScrollView
            {...props} 
            contentContainerStyle={{backgroundColor: ''}}>
            <View style={{flex: 1, marginTop: 15}}>
              <View
                style={{
                  borderBottomWidth: scale(0.3),
                  borderBottomColor: '#ccc',
                  marginHorizontal: scale(6),
                  padding: scale(5)
                }}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Home')}
                  style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <FontAwesome name="home" size={scale(22)} color={themes.default.colors.white} />
                    <Text
                      style={{
                        fontSize: scale(15),
                        margin: scale(5),
                        color: themes.default.colors.white,
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
                    color={themes.default.colors.white}
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
                  borderBottomColor: '#ccc',
                  marginHorizontal: scale(6),
                  padding: scale(5)
                }}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Account')}
                  style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <FontAwesome name="home" size={scale(22)} color={themes.default.colors.white} />
                    <Text
                      style={{
                        fontSize: scale(15),
                        margin: scale(5),
                        color: themes.default.colors.white,
                        paddingVertical: verticalScale(2),
                        fontWeight: '500',
                        marginLeft: scale(10),
                      }}>
                      Account
                    </Text>
                  </View>
                  <AntDesign
                    name="right"
                    size={scale(15)}
                    color={themes.default.colors.white}
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
            <TouchableOpacity style={{paddingVertical: verticalScale(5)}} onPress={() => handleServerLogout()}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="exit-outline" size={22} color={themes.default.colors.white} />
                <Text
                  style={{
                    fontSize: scale(13),
                    marginLeft: scale(5),
                    color: themes.default.colors.white,
                    fontWeight: '700',
                  }}>
                  log Out
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    );
}

export default AppDrawer