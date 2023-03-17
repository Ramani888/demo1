import {View, Text, StyleSheet, FlatList, Platform, PermissionsAndroid, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import {scale} from 'react-native-size-matters';
import {styles} from './style';
import AppAddButton from '../../Components/AppAddButton/AppAddButton';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      <Text style={{fontSize: scale(15), color: '#000000'}}>HomeScreen</Text>
      <TouchableOpacity style={styles.AddButton} onPress={() => navigation.navigate('ContactList')}>
        <AppAddButton Title={'Add Expanse'} IconGroupName={'Entypo'} IconName={'text-document'}/>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
