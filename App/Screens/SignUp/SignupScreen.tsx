import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Style';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup'
import { serverSignup } from '../../services/serverApi';

const SignupScreen = () => {
  const navigation = useNavigation();

  const handleServerSubmit = async (values: any, onSubmitProps: any) => {
    console.log('values', values)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
    try {
      const res = await serverSignup(values);
    } catch(err) {
      console.log(err)
    }
  }
  return (
    <View style={styles.mainView}>
      <Formik
        initialValues={{ 
          first_name: '',
          last_name: '',
          mobile: '',
          email: '',
          password: ''
        }}
        onSubmit={(values, onSubmitProps) => handleServerSubmit(values, onSubmitProps)}
        validationSchema={yup.object().shape({
          first_name: yup
            .string()
            .required(),
          last_name: yup
            .string()
            .required(),
          mobile: yup
            .number()
            .required(),
          email: yup
            .string()
            .email()
            .required(),
          password: yup
            .string()
            .min(4)
            .max(12, 'Password should not excced 12 chars.')
            .required(),
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (      
          <View style={styles.childView}>
            <Text style={styles.textStyle}>Sign Up</Text>
            {touched.first_name && errors.first_name &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.first_name}</Text>
            }
            <TextInput
              placeholder="First Name"
              style={styles.textInput}
              placeholderTextColor={'#000000'}
              value={values.first_name}
              onChangeText={handleChange('first_name')}
              onBlur={() => setFieldTouched('first_name')}
            />

            {touched.last_name && errors.last_name &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.last_name}</Text>
            }
            <TextInput
              placeholder="Last Name"
              style={styles.textInput}
              placeholderTextColor={'#000000'}
              value={values.last_name}
              onChangeText={handleChange('last_name')}
              onBlur={() => setFieldTouched('last_name')}
            />

            {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
            }
            <TextInput
              placeholder="Email Id"
              style={styles.textInput}
              placeholderTextColor={'#000000'}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />

            {touched.mobile && errors.mobile &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.mobile}</Text>
            }
            <TextInput
              placeholder="Mobile No."
              style={styles.textInput}
              placeholderTextColor={'#000000'}
              keyboardType="numeric"
              value={values.mobile}
              onChangeText={handleChange('mobile')}
              onBlur={() => setFieldTouched('mobile')}
            />

            {touched.password && errors.password &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
            }
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              placeholderTextColor={'#000000'}
              value={values.password}
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            />

            <TouchableOpacity style={styles.buttonStyle} onPress={() => handleSubmit()}>
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
        )}
      </Formik>
    </View>
  );
};

export default SignupScreen;
