import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contactCon: {
      flex: 1,
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
    },
    name: {
      fontSize: 16,
    },
    phoneNumber: {
      color: '#888',
    },
  
    ContactContainer: {
      // flex: 1
    },
    ContactListContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'flex-start',
      alignItems: 'center',
      backgroundColor: '#c4c4c4',
      margin: 5,
      padding: 5,
      borderRadius: 7
    },
    CallIcon: {
      width: 35,
      // backgroundColor: 'red'
    },
    CheckIcon: {
      position: 'absolute',
      right:10,
      
    },
    ContactName: {
      fontWeight: 'bold'
    }
});