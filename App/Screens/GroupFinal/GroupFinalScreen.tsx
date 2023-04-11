import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'native-base';
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { styles } from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
import { serverCreateGroupDetails } from '../../services/serverApi';

const GroupFinalScreen: React.FC<any> = (props) => {
  const selectedData = props?.route?.params?.data;
  const groupId = props?.route?.params?.groupId;
  console.log('propsData', selectedData)
  console.log('groupId', groupId)
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      await serverCreateGroupDetails(groupId, selectedData)
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <View style={styles.mainView}>
      <View style={styles.HeaderConatier}>
        <TouchableOpacity style={styles.BackArrowIcon} onPress={() => navigation.navigate('ContactList', {data: {routeType: 'GroupDetail'}})}>
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
                  <Text style={styles.txt}>{item?.name[0]}</Text>
                </View>
              </View>
              <View style={styles.contactDat}>
                <Text style={styles.name}>
                  {/* {item?.givenName} {item?.middleName && item?.middleName + ' '}
                  {item?.familyName} */}
                  {item?.name}
                </Text>
                <Text style={styles.phoneNumber}>
                +91{item?.number}
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

export default GroupFinalScreen