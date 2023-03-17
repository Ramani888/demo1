import React from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

// let serverUrl = 'https://api.zeusint.com/api/v1'
let serverUrl = 'http://192.168.29.47:3000/api/d1'

const errorCodes = [500, 400, 401, 409]

let expired = false;
const serverRequest = async (
  url: string,
  command: string,
  data: any,
  token?: boolean | null,
  ) => {
  const headers: any = {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
  };
  // if (token) {
  //   const token = await AsyncStorage.getItem('@token');
  //   headers.authorization = `Token ${token}`;
  // }
  const params: any = {
    method: command,
    mode: 'cors',
    cache: 'no-cache',
    headers: headers,
  };
  if (data) {
    params.body = JSON.stringify(data);
  }
  try {
    const response = await fetch(serverUrl + url, params);
    const res = await response.json();
    if (response.status === 500) {
      throw res;
    }
    if (response.status === 401) {
      throw res;
    } else {
      expired = false;
    }
    return res;
  } catch (e) {
    throw e;
  }
};

// get all users data
export const serverGetUsers = async () => {
  const res = await serverRequest(`/users`, 'GET', null, true);
  return res;
}

// login api
export const serverLogin = async (data: any) => {
  const res = await serverRequest(`/users/login`, 'POST', data, true);
  return res;
}

// signup
export const serverSignup = async (data: any) => {
  const res = await serverRequest(`/users/create`, 'POST', data, true);
  return res;
}

// get all friends
export const serverGetFriends = async () => {
  const res = await serverRequest(`/friends`, 'GET', null, true);
  return res;
}

// get all group data
export const serverGetGroups = async () => {
  const res = await serverRequest('/groups', 'GET', null, true);
  return res;
}
