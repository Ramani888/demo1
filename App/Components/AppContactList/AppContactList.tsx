import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { scale } from 'react-native-size-matters';

const AppContactList = ({contact, isSelected}: any) => {
  return (
    // <View style={styles.contactCon}>
    //   <View style={styles.imgCon}>
    //     <View style={styles.placeholder}>
    //       <Text style={styles.txt}>{contact?.givenName[0]}</Text>
    //     </View>
    //   </View>
    //   <View style={styles.contactDat}>
    //     <Text style={styles.name}>
    //       {contact?.givenName} {contact?.middleName && contact?.middleName + ' '}
    //       {contact?.familyName}
    //     </Text>
    //     <Text style={styles.phoneNumber}>
    //       {contact?.phoneNumbers[0]?.number}
    //     </Text>
    //   </View>
    // </View>
    <View style={styles.ContactContainer}>
      <View style={styles.ContactListContainer}>
        <View style={styles.CallIcon}>
          <Ionicons
            name={'md-call-outline'}
            size={scale(25)}
            // color={color}
          />
        </View>
        <View>
          <Text style={styles.ContactName}>{contact?.displayName}</Text>
          <Text>+91{contact?.phoneNumbers[0]?.number.match(/\d/g)}</Text>
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

export default AppContactList