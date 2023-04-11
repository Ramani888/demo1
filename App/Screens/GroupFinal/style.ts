import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#c4c4c4'
    },
    HeaderConatier: {
        height: 70,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'gray'
    },
    BackArrowIcon: {
        marginLeft: 10
    },
    HeaderTitle: {
        marginLeft: 10,
        color: '#ffffff',
        fontSize: 18
    },
    BodyContainer: {

    },
    FinalButton: {
        position: 'absolute',
        bottom: 50,
        width: '90%',
        backgroundColor: 'red',
        color: '#ffffff',
        alignItems: 'center',
        padding: 10,
        borderRadius: 7,
        marginLeft: '5%'
    },
    FinalButtonText: {
        color: '#ffffff',
        fontSize: 18,
        letterSpacing: 3
    },

    contactCon: {
        // flex: 1,
        flexDirection: 'row',
        padding: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d9d9d9',
    },
    imgCon: {},
        placeholder: {
        width: 55,
        height: 55,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: '#d9d9d9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contactDat: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 5,
    },
    txt: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 16,
    },
    phoneNumber: {
        color: '#888',
    },
    CircleCrossIcon: {
        position: 'absolute',
        right:0,
        zIndex: 1
    },
})