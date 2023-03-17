import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'gray'
    },
    GroupDetailContainer: {
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
    GroupIocn: {
        position: 'absolute',
        bottom: -30,
        left: 60,
        backgroundColor: '#c4c4c4',
        height: 70,
        width: 70,
        borderRadius: 7,
        zIndex: 1
    },
    GroupInfoContainer: {
        height: 120,
        backgroundColor: 'whitesmoke',
        paddingTop: 30,
        display: 'flex'
    },
    GroupTitle: {
        marginLeft: 60,
        fontSize: 18,
        fontWeight: '600'
    }
})