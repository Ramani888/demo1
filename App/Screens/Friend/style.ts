import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'gray'
  },
  text: {
    fontSize: scale(15),
    color: '#000000',
  },
  AddButton: {
    position: 'absolute',
    bottom:10,
    right:10,
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
