import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import { Formik } from 'formik';
import * as yup from 'yup'
import useLogin from '../../Hooks/useLogin';
import { themes } from '../../styles/theme';

const LoginScreen = () => {
  const navigation = useNavigation();
  const { handleLogin } = useLogin();

  const handleServerLogin = (data: any, onSubmitProps: any) => {
    const res: any = handleLogin(data, onSubmitProps);
    if (res?.success)  {
      navigation.navigate('Home')
    }
  }


  return (
    <ScrollView>
      <StatusBar backgroundColor={themes.colors.color1} barStyle="light-content" />

      <View style={styles.mainViewStyle}>
        <Text style={styles.textStyle}>welcome!</Text>

        <Formik
        initialValues={{ 
          number: '',
          password: '' 
        }}
        onSubmit={(values, onSubmitProps) => handleServerLogin(values, onSubmitProps)}
        validationSchema={yup.object().shape({
          number: yup
            .number()
            .required(),
          password: yup
            .string()
            .min(4)
            .max(12, 'Password should not excced 12 chars.')
            .required(),
        })}
       >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.textInputViewStyle}>
            <TextInput
              placeholder="Number"
              keyboardType='numeric'
              value={values.number}
              onChangeText={handleChange('number')}
              onBlur={() => setFieldTouched('number')}
              style={styles.textInputStyle}
            />
            {touched.number && errors.number &&
              <Text style={styles.ErrorText}>{errors.number} *</Text>
            }

            <TextInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
              style={styles.textInputStyle}
            />
            {touched.password && errors.password &&
              <Text style={styles.ErrorText}>{errors.password} *</Text>
            }

            <TouchableOpacity onPress={() => {handleSubmit()}} style={styles.buttonStyle} disabled={!isValid}>
              <Text
                style={{
                  fontSize: scale(15),
                  color: themes.default.colors.white,
                  fontWeight: 'bold',
                }}>
                Login
              </Text>
            </TouchableOpacity>

            <View style={styles.VIewStyle1}>
              <Text style={styles.text}>New to the app ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text
                  style={[styles.text, {color: themes.colors.color1, marginLeft: scale(5), fontWeight: 'bold'}]}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
       </Formik>

      </View>
    </ScrollView>
  );
};

export default LoginScreen;
