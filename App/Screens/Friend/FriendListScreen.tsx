import {Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import ContactListScreen from '../ContactList/ContactListScreen';
import AppAddButton from '../../Components/AppAddButton/AppAddButton';
import { serverGetFriends } from '../../services/serverApi';
import Entypo from 'react-native-vector-icons/Entypo';
import { scale } from 'react-native-size-matters';

const FriendListScreen = () => {
  const navigation = useNavigation();
  const [friendData, setFriendData] = useState<any>([]);

  const getFriendData = async () => {
    const res = await serverGetFriends();
    setFriendData(res)
  }

  useEffect(() => {
    getFriendData();
  }, [])

  console.log('friend list', friendData)
  return (
    <View style={styles.mainView}>
      {/* <Text>FriendListScreen</Text> */}
      {/* <ContactListScreen /> */}
      {friendData?.map((item: any, index: number) => {
        return (
          <TouchableOpacity style={styles.ContactContainer} key={index} onPress={() => navigation.navigate('FriendDetailScreen', {data: item})}>
            <View style={styles.ContactListContainer}>
              <View style={styles.CallIcon}>
                <Entypo
                  name={'user'}
                  size={scale(25)}
                  // color={color}
                />
              </View>
              <View>
                <Text style={styles.ContactName}>{item?.name}</Text>
                {/* <Text>+91{item?.number}</Text> */}
              </View>
            </View>
          </TouchableOpacity>
        )
      })}
      <TouchableOpacity style={styles.AddButton} onPress={() => navigation.navigate('ContactList')}>
        <AppAddButton Title={'Invite Friend'} IconGroupName={'Ionicons'} IconName={'add-circle'}/>
      </TouchableOpacity>
    </View>
  );
};

export default FriendListScreen;
