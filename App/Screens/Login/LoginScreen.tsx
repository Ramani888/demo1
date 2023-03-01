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
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [userNumber, setUserNumber] = useState();
  const [password, setPassword] = useState();

  return (
    <ScrollView>
      <StatusBar backgroundColor={'#87CEEB'} barStyle="light-content" />

      <View style={styles.mainViewStyle}>
        <Text style={styles.textStyle}>Login to your Account</Text>

        <View style={styles.textInputViewStyle}>
          <TextInput
            placeholder="userName"
            placeholderTextColor={'white'}
            value={userNumber}
            onChangeText={setUserNumber}
            style={styles.textInputStyle}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor={'white'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={[
              styles.textInputStyle,
              {
                marginTop: scale(28),
              },
            ]}
          />

          <TouchableOpacity onPress={() => {}} style={styles.buttonStyle}>
            <Text
              style={{
                fontSize: scale(15),
                color: 'white',
                fontWeight: 'bold',
              }}>
              Login
            </Text>
          </TouchableOpacity>

          <View style={styles.VIewStyle1}>
            <Text style={styles.text}>New to the app ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={[styles.text, {color: '#F2A1B2', marginLeft: scale(5)}]}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
