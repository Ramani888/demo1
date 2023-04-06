import React, { useEffect, useState } from 'react'
import { PermissionsAndroid, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import Contacts from 'react-native-contacts';
import { scale } from 'react-native-size-matters';
import AppContactList from '../../Components/AppContactList/AppContactList';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import { SearchBar } from 'react-native-screens';
import { serverGetFriends } from '../../services/serverApi';


const ContactListScreen: React.FC<any> = (props) => {
  const routeType = props?.route?.params?.data?.routeType;
  const groupId = props?.route?.params?.data?.groupId;
  const navigation = useNavigation();
  const [contacts, setContacts] = useState<any>([]);
  const [filterContacts, setFilterContacts] = useState<any>([])
  const [selctedContact, setSelectedContact] = useState<any>([])
  const [selectedFriend, setSelectedFriend] = useState<any>([])
  const [finalSelectedData, setFinalSelectedData] = useState<any>([])
  const [filterFriendData, setFilterFriendData] = useState<any>([])
  const [search, setSearch] = useState<any>('');
  const [friendData, setFriendData] = useState<any>([]);

  const getFriendData = async () => {
    const res = await serverGetFriends();
    setFriendData(res)
    setFilterFriendData(res)
  }

  useEffect(() => {
    getFriendData();
  }, [])
  
  useEffect(() => {
    setSelectedContact([])
    setSelectedFriend([])
    setFinalSelectedData([])
    setSearch('')
  }, [props])

  useEffect(() => {
    Contacts.getAll().then((res: any) => {
      setContacts(res);
    });
  }, []);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS).then(() => {
        accessContacts();
      }
      );
    } else {
      accessContacts();
    }
  }, []);
  
  const accessContacts = () => {
    Contacts.getAll().then((res: any) => {
      setContacts(res);
    });
  };

  const handleContactSelect = (data: any) => {
    const isAvailable = selctedContact?.find(({ displayName }: any) => displayName === data.displayName);
    if (isAvailable) {
      const filterSelectedContact = selctedContact?.filter(({ displayName }: any) => displayName !== data.displayName)
      setSelectedContact(filterSelectedContact)
    } else {
      setSelectedContact([...selctedContact, data])
    }
  }

  const handleFriendSelect = (data: any) => {
    const isAvailable = selectedFriend?.find(({ name }: any) => name === data?.name);
    if (isAvailable) {
      const filterSelectedFriend = selectedFriend?.filter(({ name }: any) => name !== data?.name)
      setSelectedFriend(filterSelectedFriend)
    } else {
      setSelectedFriend([...selectedFriend, data])
    }
  }

  const searchFilterFunction = (text: any) => {
    if (search) {
      const newData = contacts.filter((item: any) => {
        const itemData = item.displayName.toUpperCase()
        const textData = text.toUpperCase();
        return itemData.indexOf(textData.trim()) > -1;
      });
      const res = friendData.filter((item: any) => {
        const itemData = item.name.toUpperCase()
        const textData = text.toUpperCase();
        return itemData.indexOf(textData.trim()) > -1;
      });
      setFilterFriendData(res)
      setFilterContacts(newData)

    } else {
      Contacts.getAll().then((res: any) => {
        setFilterContacts(res);
      });
      setFilterFriendData(friendData)
    }
  };
  useEffect(() => {
    searchFilterFunction(search);
  }, [search]);

  useEffect(() => {
    const data1 = selectedFriend?.map((item: any) => {
      return {
        name: item?.name,
        number: item?.number
      }
    })
    const data2 = selctedContact?.map((item: any) => {
      return {
        name: item?.displayName,
        number: item?.phoneNumbers[0]?.number.match(/\d/g).join("")
      }
    })
    const ids = new Set(data1?.map((d: any) => d?.name));
    const merged = [...data1, ...data2.filter((d: any) => !ids.has(d?.name))];
    setFinalSelectedData(merged)
  }, [selectedFriend, selctedContact])

  console.log('finalSelectedData', finalSelectedData)

  return (
    <View style={styles.mainView}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity style={styles.BackIcon} onPress={() => navigation.goBack()}>
          <Ionicons
            name={'arrow-back'}
            size={scale(25)}
            color={'#ffffff'}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search Contact..."
          style={styles.SerachInput}
          onChangeText={setSearch}
          value={search}
          placeholderTextColor={'#ffffff'}
          
        />
      </View>

      {/* <Text style={styles.text}>ContactListScreen</Text> */}
      {(selctedContact.length > 0 || selectedFriend.length > 0) && (
        <View style={styles.SelectedListContainer}>
          {selctedContact?.map((item: any, index: number) => {
            return (
              <View style={styles.contactCon} key={index}>
                <TouchableOpacity style={styles.CircleCrossIcon} onPress={() => handleContactSelect(item)}>
                  <Entypo
                    name={'circle-with-cross'}
                    size={scale(20)}
                    // color={'blue'}
                  />
                </TouchableOpacity>
                <View style={styles.imgCon}>
                  <View style={styles.placeholder}>
                    <Text style={styles.txt}>{item?.givenName[0] + item?.familyName[0]}</Text>
                  </View>
                </View>
                {/* <View style={styles.contactDat}>
                  <Text style={styles.name}>
                    {item?.givenName} {item?.middleName && item?.middleName + ' '}
                    {item?.familyName}
                  </Text>
                  <Text style={styles.phoneNumber}>
                    {item?.phoneNumbers[0]?.number}
                  </Text>
                </View> */}
              </View>
            )
          })}
          {routeType === 'GroupDetail' && (
            selectedFriend?.map((item: any, index: number) => {
              return (
                <View style={styles.contactCon} key={index}>
                  <TouchableOpacity style={styles.CircleCrossIcon} onPress={() => handleFriendSelect(item)}>
                    <Entypo
                      name={'circle-with-cross'}
                      size={scale(20)}
                      // color={'blue'}
                    />
                  </TouchableOpacity>
                  <View style={styles.imgCon}>
                    <View style={styles.placeholder}>
                      <Text style={styles.txt}>{item?.name[0]}</Text>
                    </View>
                  </View>
                  {/* <View style={styles.contactDat}>
                    <Text style={styles.name}>
                      {item?.givenName} {item?.middleName && item?.middleName + ' '}
                      {item?.familyName}
                    </Text>
                    <Text style={styles.phoneNumber}>
                      {item?.phoneNumbers[0]?.number}
                    </Text>
                  </View> */}
                </View>
              )
            })
          )}
        </View>
      )}

      {(routeType === 'GroupDetail') && (
        <View style={styles.FriendListContainer}>
          <Text style={styles.FriendListTitle}>Friends on Split</Text>
          {filterFriendData?.map((item: any, index: number) => {
            const isSelected = selectedFriend?.find(({ name }: any) => name === item?.name)
            return (
              <TouchableOpacity style={styles.ContactContainer} onPress={() => handleFriendSelect(item)} key={index}>
                <View style={styles.ContactListContainer}>
                  <View style={styles.CallIcon}>
                    <Ionicons
                      name={'md-call-outline'}
                      size={scale(25)}
                      // color={color}
                    />
                  </View>
                  <View>
                    <Text style={styles.ContactName}>{item?.name}</Text>
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
              </TouchableOpacity>
            )
          })}
          {filterFriendData.length <= 0 && (
            <Text style={styles.NoDataText}>No Data Found</Text>
          )}
        </View>
      )}

      <Text style={styles.ContsctListTitle}>All contscts</Text>
      {filterContacts?.map((item: any, index: number) => {
        const isSelected = selctedContact?.find(({ displayName }: any) => displayName === item.displayName)
        return (
          <TouchableOpacity onPress={() => handleContactSelect(item)} key={index}>
            <AppContactList contact={item} key={index} isSelected={isSelected ? true : false} />
          </TouchableOpacity>
        )
      })}
      {filterContacts.length <= 0 && (
        <Text style={styles.NoDataText}>No Data Found</Text>
      )}

      {((selctedContact.length > 0 || selectedFriend.length > 0) && routeType === 'GroupDetail') && (
        <TouchableOpacity style={styles.RightArrowIcon} onPress={() => navigation.navigate('GroupFinalScreen', {data: finalSelectedData, groupId: groupId})}>
          <Feather
            name={'arrow-right'}
            size={scale(25)}
            color={'#ffffff'}
          />
        </TouchableOpacity>
      )}

      {(selctedContact.length > 0 && routeType !== 'GroupDetail' && selectedFriend.length === 0) && (
        <TouchableOpacity style={styles.RightArrowIcon} onPress={() => navigation.navigate('FriendFinalScreen', {data: selctedContact})}>
          <Feather
            name={'arrow-right'}
            size={scale(25)}
            color={'#ffffff'}
          />
        </TouchableOpacity>
      )}
      {/* <TouchableOpacity style={styles.AddButton} onPress={() => navigation.navigate('AppContactList')}>
        <AppAddButton Title={'Invite Friend'} IconGroupName={'Ionicons'} IconName={'add-circle'}/>
      </TouchableOpacity> */}
    </View>
  );
}

export default ContactListScreen