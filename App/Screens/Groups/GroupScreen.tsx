import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import AppAddButton from '../../Components/AppAddButton/AppAddButton';
import {useNavigation} from '@react-navigation/native';

const GroupScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>GroupScreen</Text>
      <TouchableOpacity style={styles.AddButton} onPress={() => navigation.navigate('CreateGroupScreen')}>
        <AppAddButton Title={'Create Group'} IconGroupName={'Ionicons'} IconName={'add-circle'}/>
      </TouchableOpacity>
    </View>
  );
};

export default GroupScreen;
