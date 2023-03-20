import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const FriendDetailScreen: React.FC<any> = (props) => {
    const navigation = useNavigation();
    const propsData = props.route.params.data;
  return (
    <View style={styles.mainView}>
        <View style={styles.FriendDetailContainer}>
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
                <View style={styles.FriendIcon}></View>
            </View>
            <View style={styles.FriendInfoContainer}>
                <Text style={styles.FriendTitle}>{propsData?.name}</Text>
            </View>
        </View>
    </View>
  )
}

export default FriendDetailScreen