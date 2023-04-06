import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
})