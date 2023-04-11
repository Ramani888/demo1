import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useGroupDetail from './useGroupDetail';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GroupDetailScreen: React.FC<any> = (props) => {
    const navigation = useNavigation();
    const propsData = props?.route?.params?.data;
    const { groupDetailData } = useGroupDetail(propsData?.id)
  return (
    <View style={styles.mainView}>
        <View style={styles.GroupDetailContainer}>
            <View style={styles.HeaderContainer}>
                <TouchableOpacity style={styles.BackIcon} onPress={() => navigation.goBack()}>
                    <Ionicons
                        name={'arrow-back'}
                        size={scale(25)}
                        color={'#ffffff'}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.SettingIcon}>
                    <Ionicons
                        name={'settings-outline'}
                        size={scale(25)}
                        color={'#ffffff'}
                    />
                </TouchableOpacity>
                <View style={styles.GroupIocn}></View>
            </View>
            <View style={styles.GroupInfoContainer}>
                <Text style={styles.GroupTitle}>{propsData?.name}</Text>
            </View>
            <View style={styles.BodyContainer}>
                {groupDetailData.length === 0 && (
                    <TouchableOpacity style={styles.AddGroupContainer} onPress={() => navigation.navigate('ContactList', {data: {routeType: 'GroupDetail', groupId: propsData?.id}})}>
                        <View style={styles.AddGroupIcon}>
                            <AntDesign
                                name={'addusergroup'}
                                size={scale(25)}
                                // color={color}
                            />
                        </View>
                        <Text style={styles.AddGroupTitle}>
                            Add Group Member
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    </View>
  )
}

export default GroupDetailScreen