import React from 'react'
import { Text, View } from 'react-native'
import { scale } from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './style';

const AppAddExpanseButton = () => {
  return (
    <View style={styles.AppButtonContainer}>
        <Entypo
            name={'text-document'}
            size={scale(25)}
            color={'#ffffff'}
        />
        <Text style={styles.AppButtonTitle}>Add Expanse</Text>
    </View>
  )
}

export default AppAddExpanseButton