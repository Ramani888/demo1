import {View, Text} from 'react-native';
import React from 'react';
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
