import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { scale } from 'react-native-size-matters';

const AppAddButton: React.FC<any> = ({ Title, IconGroupName, IconName }) => {
  const getIcon = (groupName: any, name: any) => {
    switch (groupName) {
      case 'Entypo': 
      return <Entypo
        name={name}
        size={scale(25)}
        color={'#ffffff'}
      />
      break;
      case 'Ionicons':
      return <Ionicons
        name={name}
        size={scale(25)}
        color={'#ffffff'}
      />
      break;
    }
  }
  return (
    <View style={styles.AppButtonContainer}>
      {/* <Ionicons
        name={IconName}
        size={scale(25)}
        color={'#ffffff'}
      /> */}
      {getIcon(IconGroupName, IconName)}
      <Text style={styles.AppButtonTitle}>{Title}</Text>
    </View>
  )
}

export default AppAddButton