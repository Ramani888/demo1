import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { serverLogin } from '../services/serverApi';

const useLogin = () => {
  const [isLogin, setIsLogin] = useState<any>(false);

    const handleLogin = async (data: any, onSubmitProps: any) => {
      onSubmitProps.setSubmitting(false)
      onSubmitProps.resetForm()
      const res = await serverLogin(data);
      if (res?.success) {
        AsyncStorage.setItem('user', JSON.stringify(res?.user));
        setIsLogin(true)
      } else {
        AsyncStorage.clear();
        setIsLogin(false)
      }
      console.log('res', res)
      return res
    }

    const handleLogout = () => {
      AsyncStorage.clear();
      setIsLogin(false)
    }
  return {
    handleLogin, 
    handleLogout,
    isLogin
  }
}

export default useLogin