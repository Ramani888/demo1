import {StyleSheet, Dimensions} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainViewStyle: {
    backgroundColor: '#282828',
    height: height,
    flex: scale(1),
    backgroundColor: '#2C3539',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
  },
  textInputViewStyle: {
    padding: scale(20),
    marginTop: verticalScale(30),
  },
  textInputStyle: {
    borderWidth: scale(1),
    borderRadius: scale(5),
    padding: scale(9),
    borderColor: 'white',
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  buttonStyle: {
    backgroundColor: '#87CEEB',
    marginTop: scale(40),
    padding: scale(10),
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  VIewStyle1: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: scale(20),
    marginBottom: scale(10),
  },
  text: {
    color: '#FFFFFF',
    fontSize: scale(15),
  },
});
