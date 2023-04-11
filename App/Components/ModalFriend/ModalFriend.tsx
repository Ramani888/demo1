import React from 'react'
import { Text, View } from 'react-native'
import { scale } from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ModalFriend: React.FC<any> = ({ item, isSelected }) => {
    return (
        <View style={styles.ContactContainer}>
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
                {/* <Text>+91{contact?.phoneNumbers[0]?.number.match(/\d/g)}</Text> */}
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
        </View>
    )
}

export default ModalFriend