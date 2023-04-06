import { border } from "native-base/lib/typescript/theme/styled-system";
import { Dimensions, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#c4c4c4'
    },
    HeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 70,
        backgroundColor: 'gray'
    },
    BackIcon: {
        marginLeft: 10
    },
    HeaderTitle: {
        color: '#ffffff',
        fontSize: 18
    },
    RightCheckIcon: {
        marginRight: 10
    },
    BodyContainer: {
        width: '100%',
        height: '100%',
        marginTop: 20,
        padding: 30,
        display: 'flex',
        alignItems: 'center',
    },
    FormContainer: {
        padding: 10,
    },
    DescriptionContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    ValueContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    DescriptionIcon: {
        width: '18%',
        height: 53,
        backgroundColor: 'gray',
        borderRadius: 7,
        marginRight: '2%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ValueIcon: {
        width: '18%',
        height: 53,
        backgroundColor: 'gray',
        borderRadius: 7,
        marginRight: '2%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        width: '80%',
        borderWidth: scale(1),
        borderRadius: scale(5),
        padding: scale(9),
        borderColor: 'white',
        marginBottom: verticalScale(20),
        color: '#000000',
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    SelfSplitButton: {
        borderRadius: 7,
        backgroundColor: 'gray',
        height: 35,
        width: 55,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    EquallySplitButton: {
        borderRadius: 7,
        backgroundColor: 'gray',
        height: 35,
        width: 75,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SplitContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    SplitTitle: {
        color: '#ffffff',
        fontSize: 18
    },
    SelectSplitContainer: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    SelectGroupButton: {
        backgroundColor: 'gray',
        width: 125,
        height: 30,
        borderRadius: 7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SelectFriendButton: {
        backgroundColor: 'gray',
        width: 125,
        height: 30,
        borderRadius: 7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SelectContact: {
        backgroundColor: 'gray',
        width: 125,
        height: 30,
        borderRadius: 7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SelectButtonTitle: {
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SelectedContainer: {
        width: '100%',
        minHeight: 60,
        backgroundColor: 'gray',
        padding: 5,
        height: 'auto'
    },
    SelectedContainerTitle: {
        color: '#ffffff',
        fontSize: 16
    },
    SelectedContainerPlaceholder: {
        color: '#B3FFFFFF',
        fontSize: 16,
    },

    ModalContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 500,
        backgroundColor: 'gray',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20
    },
    CloseIcon: {
        alignSelf: 'flex-end'
    },

    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 7
    },
    searchIcon: {
        padding: 10,
    },
    closeIcon: {
        padding: 10
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        borderRadius: 7
    },

    SelectedListCotainer: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    SelectedItemContainer: {
        width: 115,
        height: 30,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        margin: 5
    },
    ItemLogo: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: '#c4c4c4'
    },
    ItemTitle: {
        marginLeft: 5
    }

})