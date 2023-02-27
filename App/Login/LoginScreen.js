/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-dupe-keys */
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

const LoginScreen = () => {
  const [userNumber, setUserNumber] = useState();
  const [password, setPassword] = useState();

  return (
    <ScrollView>
      <StatusBar backgroundColor={'#87CEEB'} barStyle="light-content" />

      <View
        style={{
          backgroundColor: '#282828',
          height: height,
          flex: 1,
          backgroundColor: '#2C3539',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            textAlign: 'center',
            marginTop: 15,
            fontWeight: 'bold',
          }}>
          Login to your Account
        </Text>

        <View style={{padding: scale(20), marginTop: verticalScale(30)}}>
          <TextInput
            placeholder="userName"
            placeholderTextColor={'white'}
            value={userNumber}
            onChangeText={setUserNumber}
            style={{
              borderWidth: scale(1),
              borderRadius: scale(5),
              padding: scale(9),
              borderColor: 'white',
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor={'white'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={{
              borderWidth: scale(1),
              borderRadius: scale(5),
              padding: scale(9),
              borderColor: 'white',
              marginTop: scale(28),
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}
          />

          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: '#87CEEB',
              marginTop: scale(50),
              padding: scale(12),
              borderRadius: scale(5),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: scale(15),
                color: 'white',
                fontWeight: 'bold',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
