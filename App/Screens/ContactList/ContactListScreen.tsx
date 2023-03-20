import React, { useEffect, useState } from 'react'
import { PermissionsAndroid, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import Contacts from 'react-native-contacts';
import { scale } from 'react-native-size-matters';
import AppContactList from '../../Components/AppContactList/AppContactList';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { SearchBar } from 'react-native-screens';


const ContactListScreen = () => {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState<any>([]);
  const [filterContacts, setFilterContacts] = useState<any>([])
  const [selctedContact, setSelectedContact] = useState<any>([])
  const [search, setSearch] = useState<any>('');
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

  const handleSelect = (data: any) => {
    const isAvailable = selctedContact?.find(({ displayName }: any) => displayName === data.displayName);
    if (isAvailable) {
      const filterSelectedContact = selctedContact?.filter(({ displayName }: any) => displayName !== data.displayName)
      setSelectedContact(filterSelectedContact)
    } else {
      setSelectedContact([...selctedContact, data])
    }
  }

  const searchFilterFunction = (text: any) => {
    if (search) {
      console.log('text', text)
      console.log('serach', search)
      const newData = contacts.filter((item: any) => {
        const itemData = item.displayName.toUpperCase()
        const textData = text.toUpperCase();
        return itemData.indexOf(textData.trim()) > -1;
      });
      console.log(newData, 'res')
      setFilterContacts(newData)
    } else {
      Contacts.getAll().then((res: any) => {
        setFilterContacts(res);
      });
    }
  };
  useEffect(() => {
    searchFilterFunction(search);
  }, [search]);

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
      <View style={styles.SelectedListContainer}>
        {selctedContact?.map((item: any, index: number) => {
          return (
            <View style={styles.contactCon} key={index}>
              <TouchableOpacity style={styles.CircleCrossIcon} onPress={() => handleSelect(item)}>
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
      </View>
      {filterContacts?.map((item: any, index: number) => {
        const isSelected = selctedContact?.find(({ displayName }: any) => displayName === item.displayName)
        return (
          <TouchableOpacity onPress={() => handleSelect(item)} key={index}>
            <AppContactList contact={item} key={index} isSelected={isSelected ? true : false} />
          </TouchableOpacity>
        )
      })}
      {selctedContact.length > 0 && (
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