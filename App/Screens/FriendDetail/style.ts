import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'gray'
    },
    FriendDetailContainer: {
        backgroundColor: '#400000',
        height: 100
    },
    HeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
    },
    BackIcon: {
        marginLeft: 10
    },
    SettingIcon: {
        marginRight: 10
    },
    FriendIcon: {
        position: 'absolute',
        bottom: -30,
        left: 60,
        backgroundColor: '#c4c4c4',
        height: 70,
        width: 70,
        borderRadius: 7,
        zIndex: 1
    },
    FriendInfoContainer: {
        height: 120,
        backgroundColor: 'whitesmoke',
        paddingTop: 30,
        display: 'flex'
    },
    FriendTitle: {
        marginLeft: 60,
        fontSize: 18,
        fontWeight: '600'
    }
})