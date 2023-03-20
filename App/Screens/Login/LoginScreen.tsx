import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { Formik } from "formik";
import * as yup from "yup";
import { serverLogin } from "../../services/serverApi";
import { IsLoggedIn } from "../../utils/helpers/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useLogin from "../../Hooks/useLogin";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [userNumber, setUserNumber] = useState();
  const [password, setPassword] = useState();
  const { handleLogin } = useLogin();

  // const handleSubmit = () => {
  //   console.log('user number', userNumber);
  //   console.log('password', password);
  // }

  // const handleServerSubmit = async (data: any, onSubmitProps: any) => {
  //   onSubmitProps.setSubmitting(false)
  //   onSubmitProps.resetForm()
  //   const res = await serverLogin(data);
  //   if (res?.success) {
  //     AsyncStorage.setItem('user', JSON.stringify(res?.user));
  //     navigation.navigate('Home')
  //   }
  //   console.log('res', res)
  // }

  const handleServerLogin = (data: any, onSubmitProps: any) => {
    const res: any = handleLogin(data, onSubmitProps);
    if (res?.success) {
      navigation.navigate("Home");
    }
  };

  return (
    <ScrollView>
      <StatusBar backgroundColor={"#87CEEB"} barStyle="light-content" />

      <View style={styles.mainViewStyle}>
        <Text style={styles.textStyle}>Login to your Account</Text>

        <Formik
          initialValues={{
            number: "",
            password: "",
          }}
          onSubmit={(values, onSubmitProps) =>
            handleServerLogin(values, onSubmitProps)
          }
          validationSchema={yup.object().shape({
            number: yup.number().required(),
            password: yup
              .string()
              .min(4)
              .max(12, "Password should not excced 12 chars.")
              .required(),
          })}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <View style={styles.textInputViewStyle}>
              <TextInput
                placeholder="Number"
                keyboardType="numeric"
                placeholderTextColor={"white"}
                value={values.number}
                onChangeText={handleChange("number")}
                onBlur={() => setFieldTouched("number")}
                style={styles.textInputStyle}
              />
              {touched.number && errors.number && (
                <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                  {errors.number}
                </Text>
              )}

              <TextInput
                placeholder="Password"
                placeholderTextColor={"white"}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                secureTextEntry={true}
                style={[
                  styles.textInputStyle,
                  {
                    marginTop: scale(28),
                  },
                ]}
              />
              {touched.password && errors.password && (
                <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                  {errors.password}
                </Text>
              )}

              <TouchableOpacity
                onPress={() => {
                  handleSubmit();
                }}
                style={styles.buttonStyle}
                disabled={!isValid}
              >
                <Text
                  style={{
                    fontSize: scale(15),
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>

              <View style={styles.VIewStyle1}>
                <Text style={styles.text}>New to the app ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                  <Text
                    style={[
                      styles.text,
                      { color: "#F2A1B2", marginLeft: scale(5) },
                    ]}
                  >
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
