import {Alert, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import ContactListScreen from '../ContactList/ContactListScreen';
import AppAddButton from '../../Components/AppAddButton/AppAddButton';
import { serverDeleteFriend, serverGetFriends } from '../../services/serverApi';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { scale } from 'react-native-size-matters';
import { SwipeListView } from 'react-native-swipe-list-view';
import { themes } from '../../styles/theme';

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

  const handleDeleteFriend = (name: string, id: number) => {
    Alert.alert('Alert', `You want to delete ${name}?.`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => handleDeleteConform(id)},
    ]);
  }

  const handleDeleteConform = async (id: number) => {
    try {
      await serverDeleteFriend(id);
      getFriendData()
    } catch (err) {
      console.log(err)
    }
  }

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.ContactContainer}>
        <View style={styles.ContactListContainer}>
          <View style={styles.CallIcon}>
            <Entypo
              name={'user'}
              size={scale(25)}
              color={themes.colors.color1}
            />
          </View>
          <View>
            <Text style={styles.ContactName}>{item?.name}</Text>
            <Text style={styles.NumberText}>+91{item?.number}</Text>
          </View>
          <TouchableOpacity style={styles.RightArrowContainer} onPress={() => navigation.navigate('FriendDetailScreen', {data: item})}>
            <AntDesign
              name={'rightcircle'}
              size={scale(20)}
              color={themes.colors.color1}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderHiddenItem = ({ item }: any) => {
    return (
      <>
        <View style={styles.rowBack}>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => handleDeleteFriend(item?.name, item?.id)}
            >
            {/* <Text style={styles.backTextWhite}>Delete</Text> */}
            <AntDesign
              name={'delete'}
              size={scale(20)}
              color={themes.default.colors.white}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <View style={styles.mainView}>
      <SwipeListView
        keyExtractor={(item: object, index: number) => {
          return String(index);
        }}
        rightOpenValue={-72}
        previewOpenValue={-40}
        disableRightSwipe
        previewOpenDelay={3000}
        renderHiddenItem={renderHiddenItem}
        data={friendData}
        closeOnRowPress={true}
        renderItem={renderItem}
      />
      <TouchableOpacity style={styles.AddButton} onPress={() => navigation.navigate('ContactList')}>
        <AppAddButton Title={'Invite Friend'} IconGroupName={'Ionicons'} IconName={'add-circle'}/>
      </TouchableOpacity>
    </View>
  );
};

export default FriendListScreen;
