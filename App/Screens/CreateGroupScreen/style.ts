import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    mainView: {
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#c4c4c4'
    },
    textStyle: {
      fontSize: scale(15),
      color: '#000000',
    },
    HeaderContainer: {
      display:'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: 50,
      backgroundColor: 'gray'
    },
    HeaderTitle: {
      color: '#ffffff',
      fontSize: 18
    },
    CrossIcon: {
      marginLeft: 10
    },
    SaveButton: {
      marginRight: 10,
      fontSize: 18
    },
    SaveButtonTitle: {
      color: '#ffffff'
    },
    BodyContainer: {
      width: '94%',
      // marginTop: 20,
      margin: '3%'
    },
    CreateGroupContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'blue'
    },
    GroupIcon: {
      width: '18%',
      height: 60,
      backgroundColor: 'red',
      borderRadius: 7,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      marginLeft: '2%',
      width: '80%',
      borderWidth: scale(1),
      borderRadius: scale(5),
      padding: scale(9),
      borderColor: 'white',
      marginBottom: verticalScale(20),
      color: '#000000',
      backgroundColor: 'rgba(255,255,255,0.3)',
      marginTop: 20
    },
    GroupContainerTitle: {
      color: '#ffffff',
      fontSize: 18
    },
    GroupTypeContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10
    },
    TypeContainer: {
      width: 120,
      height: 50,
      borderRadius: 40,
      backgroundColor: 'gray',
      marginLeft: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    SelectedTypeContainer: {
      width: 120,
      height: 50,
      borderRadius: 40,
      backgroundColor: 'green',
      marginLeft: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    TypeTitle: {
      color: '#ffffff',
      fontSize: 16
    },
    MemberNotificationTitle: {
      color: '#ffffff',
      fontSize: 18,
      marginTop: 10
    },
    MemberNotificationContainer: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    NotificationTitle: {
      color: '#ffffff',
      fontSize: 16,
      marginLeft: 10
    }
});