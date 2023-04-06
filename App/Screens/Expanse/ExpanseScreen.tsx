import React, { useEffect, useState } from 'react'
import { Alert, Animated, Dimensions, Image, KeyboardAvoidingView, Modal, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalGroup from '../../Components/ModalGroup/ModalGroup';
import { serverGetFriends, serverGetGroups } from '../../services/serverApi';
import ModalFriend from '../../Components/ModalFriend/ModalFriend';
import AppContactList from '../../Components/AppContactList/AppContactList';
import Contacts from 'react-native-contacts';
import Icon from 'react-native-vector-icons/Ionicons';

const ExpanseScreen = () => {
  const navigation = useNavigation();
  const [descriptionName, setDescriptionName] = useState<any>('');
  const [value, setValue] = useState<any>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [buttonType, setButtonType] = useState<string>('');
  const [groupsData, setGroupsData] = useState<any>([])
  const [friendData, setFriendData] = useState<any>([]);
  const [contacts, setContacts] = useState<any>([]);
  const [selectedData, setSelectedData] = useState<any>([]);
  const [search, setSearch] = useState<string>('');
  const [filterGroupData, setFilterGroupData] = useState<any>([]);
  const [filterFriendData, setFilterFriendData] = useState<any>([]);
  const [filterContactData, setFilterContactData] = useState<any>([]);

  const getFriendData = async () => {
    const res = await serverGetFriends();
    setFriendData(res)
    setFilterFriendData(res)
  }

  const getGroupData = async () => {
    const res = await serverGetGroups();
    setGroupsData(res)
    setFilterGroupData(res)
  }
  
  useEffect(() => {
    getGroupData();
    getFriendData();
    Contacts.getAll().then((res: any) => {
      setContacts(res);
      setFilterContactData(res);
    });
  }, [])

  const handleSubmit = () => {
    try {
      if (descriptionName && value && selectedData?.length > 0) {
        console.log('is working')
      } else {
        Alert.alert('Alert', 'Plese type description and enter value.', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleOpen = (type: string) => {
    setIsVisible(true);
    setButtonType(type)
  }

  const handleClose = () => {
    setIsVisible(false)
    setButtonType('')
    setSearch('')
  }

  const handleSelect = (data: any) => {
    const isAvailable = selectedData?.find(({ name }: any) => name === data.name);
    if (isAvailable) {
      if(buttonType === 'contect') {
        const filterSelectedData = selectedData?.filter((item: any) => item?.displayName !== data.displayName)
        setSelectedData(filterSelectedData)
      } else {
        const filterSelectedData = selectedData?.filter(({ name }: any) => name !== data.name)
        setSelectedData(filterSelectedData)
      }
    } else {
      setSelectedData([...selectedData, data])
    }
  }

  const searchFilterFunction = (text: any) => {
    if (search) {
      if (buttonType === 'group') {
        const filterGroup = groupsData.filter((item: any) => {
          const itemData = item.name.toUpperCase()
          const textData = text.toUpperCase();
          return itemData.indexOf(textData.trim()) > -1;
        });
        setFilterGroupData(filterGroup)
      } else if (buttonType === 'contact') {
        const filterContact = contacts.filter((item: any) => {
          const itemData = item.displayName.toUpperCase()
          const textData = text.toUpperCase();
          return itemData.indexOf(textData.trim()) > -1;
        });
        setFilterContactData(filterContact)
      } else {
        const filterFriend = friendData.filter((item: any) => {
          const itemData = item.name.toUpperCase()
          const textData = text.toUpperCase();
          return itemData.indexOf(textData.trim()) > -1;
        });
        setFilterFriendData(filterFriend)
      }
    } else {
      setFilterGroupData(groupsData)
      setFilterContactData(contacts)
      setFilterFriendData(friendData)
    }
  };

  useEffect(() => {
    searchFilterFunction(search);
  }, [search]);

  const handleRemoveSearch = () => {
    setSearch('')
  }

  console.log('selected data', selectedData)

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
        <Text style={styles.HeaderTitle}>Add Expanse</Text>
        <TouchableOpacity style={styles.RightCheckIcon} onPress={() => handleSubmit()}>
          <AntDesign
            name={'check'}
            size={scale(25)}
            color={'#ffffff'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.SelectSplitContainer}>
        <TouchableOpacity style={styles.SelectGroupButton} onPress={() => handleOpen('group')}><Text style={styles.SelectButtonTitle}>Group</Text></TouchableOpacity>
        <TouchableOpacity style={styles.SelectFriendButton} onPress={() => handleOpen('friend')}><Text style={styles.SelectButtonTitle}>Friend</Text></TouchableOpacity>
        <TouchableOpacity style={styles.SelectContact} onPress={() => handleOpen('contact')}><Text style={styles.SelectButtonTitle}>Contact</Text></TouchableOpacity>
      </View>
      <View style={styles.SelectedContainer}>
        <Text style={styles.SelectedContainerTitle}>Selected friend and group : </Text>
        <View style={styles.SelectedListCotainer}>
          {selectedData?.map((item: any, index: number) => {
            return (
              <View style={styles.SelectedItemContainer} key={index}>
                <View style={styles.ItemLogo}></View>
                <Text style={styles.ItemTitle}>{item?.name ? item?.name : item?.givenName}</Text>
              </View>
            )
          })}
        </View>
        {/* <Text style={styles.SelectedContainerPlaceholder}>select Group, select friend and phone</Text> */}
      </View>
      <View style={styles.BodyContainer}>
        <View style={styles.FormContainer}>
          <View style={styles.DescriptionContainer}>
            <View style={styles.DescriptionIcon}>
              <Octicons
                name={'note'}
                size={scale(25)}
                color={'#ffffff'}
              />
            </View>
            <TextInput
              placeholder="Enter a description"
              style={styles.textInput}
              placeholderTextColor={'#000000'}
              value={descriptionName}
              onChangeText={setDescriptionName}
            />
          </View>
          <View style={styles.ValueContainer}>
            <View style={styles.ValueIcon}>
              <MaterialCommunityIcons
                name={'currency-inr'}
                size={scale(25)}
                color={'#ffffff'}
              />
            </View>
            <TextInput
              placeholder="0.00"
              keyboardType='numeric'
              style={styles.textInput}
              placeholderTextColor={'#000000'}
              value={value}
              onChangeText={setValue}
            />
          </View>
        </View>
        {/* <Text style={styles.StatusTitle}>Paid by <Text style={styles.SelfStatusButton}>you</Text> and split <Text style={styles.OtherStatusButton}>equally</Text></Text> */}
        <View style={styles.SplitContainer}>
          <Text style={styles.SplitTitle}>Paid by </Text>
          <TouchableOpacity style={styles.SelfSplitButton}><Text style={styles.SplitTitle}>you</Text></TouchableOpacity>
          <Text style={styles.SplitTitle}> and split </Text>
          <TouchableOpacity style={styles.EquallySplitButton}><Text style={styles.SplitTitle}>equally</Text></TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        visible={isVisible}
        transparent
        onRequestClose={() => handleClose()}>
        <Animated.View style={[styles.ModalContainer]}>
          {/* <TouchableOpacity style={styles.CloseIcon}>
            <MaterialIcons 
              name='close'
              size={scale(25)}
              color='#ffffff'
              onPress={() => handleClose()}
            />
          </TouchableOpacity> */}
          {buttonType === 'group' && (
            <ScrollView>
              <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
                <TextInput
                  style={styles.input}
                  placeholder="Search here..."
                  onChangeText={setSearch}
                  underlineColorAndroid="transparent"
                  value={search}
                />
                {search && (
                  <Icon style={styles.closeIcon} name="close-circle" size={25} color="gray" onPress={() => handleRemoveSearch()}/>
                )}
              </View>
              {filterGroupData?.map((item: any, index: number) => {
                const isSelected = selectedData?.find(({ name }: any) => name === item.name)
                return (
                  <TouchableOpacity onPress={() => handleSelect(item)} key={index}>
                    <ModalGroup item={item} key={index} isSelected={isSelected ? true : false}/>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          )}
          {buttonType === 'friend' && (
            <ScrollView>
              <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
                <TextInput
                  style={styles.input}
                  placeholder="Search here..."
                  onChangeText={setSearch}
                  underlineColorAndroid="transparent"
                  value={search}
                />
                {search && (
                  <Icon style={styles.closeIcon} name="close-circle" size={25} color="gray" onPress={() => handleRemoveSearch()}/>
                )}
              </View>
              {filterFriendData?.map((item: any, index: number) => {
                  const isSelected = selectedData?.find(({ name }: any) => name === item.name)
                return (
                  <TouchableOpacity key={index} onPress={() => handleSelect(item)}>
                    <ModalFriend item={item} isSelected={isSelected ? true : false}/>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          )}
          {buttonType === 'contact' && (
            <ScrollView>
              <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
                <TextInput
                  style={styles.input}
                  placeholder="Search here..."
                  onChangeText={setSearch}
                  underlineColorAndroid="transparent"
                  value={search}
                />
                {search && (
                  <Icon style={styles.closeIcon} name="close-circle" size={25} color="gray" onPress={() => handleRemoveSearch()}/>
                )}
              </View>
              {filterContactData?.map((item: any, index: number) => {
                const isSelected = selectedData?.find(({ displayName }: any) => displayName === item.displayName)
                return (
                  <TouchableOpacity key={index} onPress={() => handleSelect(item)}>
                    <AppContactList contact={item} key={index} isSelected={isSelected ? true : false} />
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          )}
        </Animated.View>
      </Modal>
    </View>
  )
}

export default ExpanseScreen