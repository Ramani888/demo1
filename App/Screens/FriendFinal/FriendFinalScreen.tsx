import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { serverCreateFriend } from '../../services/serverApi';

const FriendFinalScreen: React.FC<any> = (props) => {
  const selectedData = props?.route?.params?.data;
  console.log('propsData', selectedData)
  const navigation = useNavigation();

  const handleSubmit = () => {
    try {
      const finalData = selectedData?.map((item: any) => {
        return {
          name: item?.displayName,
          number: item?.phoneNumbers[0]?.number.replace(/\D/g,'')
        }
      })

      finalData?.map((item: any) => {
        const res = serverCreateFriend(item);
      })

      navigation.goBack();

    } catch (err) {
      console.log(err);
    }
  }
  return (
    <View style={styles.mainView}>
      <View style={styles.HeaderConatier}>
        <TouchableOpacity style={styles.BackArrowIcon} onPress={() => navigation.navigate('ContactList')}>
          <Ionicons
            name={'arrow-back'}
            size={scale(25)}
            color={'#ffffff'}
          />
        </TouchableOpacity>
        <Text style={styles.HeaderTitle}>Verify Contacts</Text>
      </View>
      <View style={styles.BodyContainer}>
        {selectedData?.map((item: any, index: number) => {
          return (
            <View style={styles.contactCon} key={index}>
              <View style={styles.imgCon}>
                <View style={styles.placeholder}>
                  <Text style={styles.txt}>{item?.givenName[0] + item?.familyName[0]}</Text>
                </View>
              </View>
              <View style={styles.contactDat}>
                <Text style={styles.name}>
                  {item?.givenName} {item?.middleName && item?.middleName + ' '}
                  {item?.familyName}
                </Text>
                <Text style={styles.phoneNumber}>
                +91{item?.phoneNumbers[0]?.number.match(/\d/g)}
                </Text>
              </View>
            </View>
          )
        })}

      </View>
      <TouchableOpacity style={styles.FinalButton} onPress={() => handleSubmit()}>
        <Text style={styles.FinalButtonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FriendFinalScreen