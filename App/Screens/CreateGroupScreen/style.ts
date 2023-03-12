import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

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
      color: '#ffffff'
    },
    CrossIcon: {
      marginLeft: 10
    },
    SaveButton: {
      marginRight: 10
    },
    SaveButtonTitle: {
      color: '#ffffff'
    }
});