import React, { useEffect, useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { styles } from './style'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { serverCreateGroup, serverUpdateGroup } from '../../services/serverApi';

const CreateGroupScreen: React.FC<any> = (props) => {
  const editData = props?.route?.params?.data;
  console.log('editData', editData)
  const navigation = useNavigation();
  const groupType = [
    {
      name: 'Trip',
      icon: ''
    },
    {
      name: 'Home',
      icon: ''
    },
    {
      name: 'Couple',
      icon: ''
    }
  ]
  const [selectedType, setSelectedType] = useState<any>(editData ? editData.groupType : '');
  const [groupName, setGroupName] = useState<string>(editData ? editData.name : '');
  const handleSubmit = async () => {
    try {
      if (groupName && selectedType) {
        if (editData) {
          await serverUpdateGroup(editData?.id, {name: groupName, groupType: selectedType});
          navigation.goBack();
        } else {
          await serverCreateGroup({name: groupName, groupType: selectedType});
          navigation.goBack();
        }
      } else {
        Alert.alert('Alert', 'Plese type group name and select group type.', [
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

  useEffect(() => {
    setGroupName(editData ? editData?.name : '')
    setSelectedType(editData ? editData?.groupType : '')
  }, [props])
  return (
    <View style={styles.mainView}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity style={styles.CrossIcon} onPress={() => {navigation.goBack()}}>
          <EvilIcons
            name={'close'}
            size={scale(25)}
            color={'#ffffff'}
          />
        </TouchableOpacity>
        <Text style={styles.HeaderTitle}>Create a group</Text>
        <TouchableOpacity style={styles.SaveButton} onPress={() => {handleSubmit()}}>
          <Text style={styles.SaveButtonTitle}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.BodyContainer}>
        <View style={styles.CreateGroupContainer}>
          <View style={styles.GroupIcon}>
            <MaterialCommunityIcons
              name={'camera-plus'}
              size={scale(25)}
              color={'#ffffff'}
            />
          </View>
          <TextInput
            placeholder="Group Name"
            style={styles.textInput}
            placeholderTextColor={'#000000'}
            value={groupName}
            onChangeText={setGroupName}
          />
        </View>
        <Text style={styles.GroupContainerTitle}>Type</Text>
        <View style={styles.GroupTypeContainer}>
          {groupType?.map((item: any, index: number) => {
            return (
              <TouchableOpacity style={selectedType === item?.name ? styles.SelectedTypeContainer : styles.TypeContainer} onPress={() => setSelectedType(item?.name)} key={index}>
                <Text style={styles.TypeTitle}>{item?.name}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
        <Text style={styles.MemberNotificationTitle}>Group members</Text>
        <View style={styles.MemberNotificationContainer}>
          <Ionicons
            name={'person-add-outline'}
            size={scale(20)}
            color={'#ffffff'}
          />
          <Text style={styles.NotificationTitle}>You will be able to add group members after you save this group.</Text>
        </View>
      </View>
    </View>
  )
}

export default CreateGroupScreen