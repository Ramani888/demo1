import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { serverGetGroups } from '../../services/serverApi';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style';
import { scale } from 'react-native-size-matters';

const ModalGroup: React.FC<any> = ({ item, isSelected }) => {
  return (
    <View style={styles.ContactContainer}>
        <View style={styles.ContactListContainer}>
            <View style={styles.CallIcon}>
            <MaterialIcons
                name={'group'}
                size={scale(25)}
                // color={color}
            />
            </View>
            <View>
            <Text style={styles.ContactName}>{item?.name}</Text>
            {/* <Text>+91{contact?.phoneNumbers[0]?.number.match(/\d/g)}</Text> */}
            </View>
            {isSelected && (
              <View style={styles.CheckIcon}>
                <AntDesign
                  name={'checkcircle'}
                  size={scale(25)}
                  color={'#ffffff'}
                />
              </View>
            )}
        </View>
    </View>
  )
}

export default ModalGroup