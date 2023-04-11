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
    },
    BodyContainer: {
        height: 'auto',
        width: 'auto'
    },
    AddGroupContainer: {
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    AddGroupIcon: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#c4c4c4',
        marginRight: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    AddGroupTitle: {
        fontSize: 18,
        color: '#FFFFFF',
        marginLeft: 10
    }
})