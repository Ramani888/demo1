import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { styles } from './style'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const CreateGroupScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity style={styles.CrossIcon} onPress={() => {navigation.goBack()}}>
          <EvilIcons
            name={'close'}
            size={scale(25)}
            color={'#ffffff'}
          />
        </TouchableOpacity>
        <Text style={styles.HeaderTitle}>Create a group</Text>
        <TouchableOpacity style={styles.SaveButton}>
          <Text style={styles.SaveButtonTitle}>Save</Text>
        </TouchableOpacity>
      </View>
        <Text style={{fontSize: scale(15), color: '#000000'}}>CreateGroupScreen</Text>
    </View>
  )
}

export default CreateGroupScreen