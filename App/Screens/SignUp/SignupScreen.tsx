import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Style';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      <View style={styles.childView}>
        <Text style={styles.textStyle}>Sign Up</Text>
        <TextInput
          placeholder="First Name"
          style={styles.textInput}
          placeholderTextColor={'#000000'}
        />

        <TextInput
          placeholder="Last Name"
          style={styles.textInput}
          placeholderTextColor={'#000000'}
        />

        <TextInput
          placeholder="Email Id"
          style={styles.textInput}
          placeholderTextColor={'#000000'}
        />

        <TextInput
          placeholder="Mobile No."
          style={styles.textInput}
          placeholderTextColor={'#000000'}
          keyboardType="numeric"
        />

        <TextInput
          placeholder="Password"
          style={styles.textInput}
          placeholderTextColor={'#000000'}
        />

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>SIgn Up</Text>
        </TouchableOpacity>

        <View style={styles.ViewStyle1}>
          <Text style={styles.text}>Already Registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={[styles.text, {color: '#F2A1B2', marginLeft: scale(5)}]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
