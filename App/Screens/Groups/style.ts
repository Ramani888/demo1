import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
