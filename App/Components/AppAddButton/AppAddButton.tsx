import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';

const AppAddButton: React.FC<any> = ({ Title, IconGroupName, IconName }) => {
  return (
    <View style={styles.AppButtonContainer}>
      <Ionicons
        name={IconName}
        size={scale(25)}
        color={'#ffffff'}
      />
      <Text style={styles.AppButtonTitle}>{Title}</Text>
    </View>
  )
}

export default AppAddButton