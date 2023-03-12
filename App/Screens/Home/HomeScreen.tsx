import {View, Text, StyleSheet, FlatList, Platform, PermissionsAndroid} from 'react-native';
import React, { useEffect, useState } from 'react';
import {scale} from 'react-native-size-matters';
import {styles} from './style';

const HomeScreen = () => {
  return (
    <View style={styles.mainView}>
      <Text style={{fontSize: scale(15), color: '#000000'}}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
