import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import {scale, verticalScale} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const AppHeader:React.FC<any> = (props) => {
    // const navigation = useNavigation();
    return (
        <View style={{backgroundColor: '#FFFFFF'}}>
          <View
            style={{
              flexDirection: 'row',
              width: scale(350),
              height: verticalScale(70),
              alignItems: 'center',
              backgroundColor: 'white',
              borderBottomLeftRadius: verticalScale(15),
              borderBottomRightRadius: verticalScale(15),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: scale(2),
              },
              shadowOpacity: scale(0.25),
              shadowRadius: scale(4),
              elevation: scale(6),
            }}>
            <View style={{marginLeft: 20, marginTop: 15}}>
              <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <Octicons
                  name="three-bars"
                  size={scale(22)}
                  color="black"
                  style={{marginBottom: verticalScale(6)}}
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
          </View>
        </View>
      );
}

export default AppHeader