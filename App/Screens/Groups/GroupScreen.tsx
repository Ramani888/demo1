import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, { useEffect, useState } from 'react';
import {styles} from './style';
import AppAddButton from '../../Components/AppAddButton/AppAddButton';
import {useNavigation} from '@react-navigation/native';
import { serverDeleteGroup, serverGetGroups } from '../../services/serverApi';
import { SwipeListView } from 'react-native-swipe-list-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { scale } from 'react-native-size-matters';
import { themes } from '../../styles/theme';

const GroupScreen = () => {
  const navigation = useNavigation();
  const [groupsData, setGroupsData] = useState<any>([])

  const getGroupData = async () => {
    const res = await serverGetGroups();
    setGroupsData(res)
  }

  useEffect(() => {
    getGroupData()
  }, [])

  const handleEditGroup = async (item: any) => {
    navigation.navigate('CreateGroupScreen', {data: item})
  }

  const handleDeleteGroup = (name: string, id: number) => {
    Alert.alert('Alert', `You want to delete ${name} group?.`, [
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
      await serverDeleteGroup(id);
      getGroupData()
    } catch (err) {
      console.log(err)
    }
  }

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.GroupContainer}>
        <View style={styles.GroupListContainer}>
          <View style={styles.GroupIcon}></View>
          <View style={styles.GroupDetailContainer}>
            <Text style={styles.GroupTitle}>{item.name}</Text>
          </View>
          <TouchableOpacity style={styles.RightArrowContainer} onPress={() => navigation.navigate('GroupDetailScreen', {data: item})}>
            <AntDesign
              name={'rightcircle'}
              size={scale(22)}
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
            onPress={() => handleDeleteGroup(item?.name, item?.id)}
            >
            {/* <Text style={styles.backTextWhite}>Delete</Text> */}
            <AntDesign
              name={'delete'}
              size={scale(20)}
              color={themes.default.colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={() => handleEditGroup(item)}
            >
            {/* <Text style={styles.backTextWhite}>edit</Text> */}
            <FontAwesome
              name={'edit'}
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
      {/* <Text style={styles.text}>GroupScreen</Text> */}
      <SwipeListView
        keyExtractor={(item: object, index: number) => {
          return String(index);
        }}
        rightOpenValue={-145}
        previewOpenValue={-40}
        disableRightSwipe
        previewOpenDelay={3000}
        renderHiddenItem={renderHiddenItem}
        data={groupsData}
        closeOnRowPress={true}
        renderItem={renderItem}
      />
      <TouchableOpacity style={styles.AddButton} onPress={() => navigation.navigate('CreateGroupScreen')}>
        <AppAddButton Title={'Create Group'} IconGroupName={'Ionicons'} IconName={'add-circle'}/>
      </TouchableOpacity>
    </View>
  );
};

export default GroupScreen;
