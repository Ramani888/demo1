import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  mainView: {
    flex: scale(1),
    backgroundColor: '#2C3539',
    justifyContent: 'center',
    paddingTop: verticalScale(100),
  },
  childView: {
    marginHorizontal: scale(15),
  },
  textStyle: {
    fontSize: scale(20),
    color: 'white',
    marginBottom: verticalScale(30),
    marginTop: 15,
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: scale(1),
    borderRadius: scale(5),
    padding: scale(9),
    borderColor: 'white',
    marginBottom: verticalScale(20),
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  buttonStyle: {
    backgroundColor: '#87CEEB',
    marginTop: scale(15),
    padding: scale(10),
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontSize: scale(15),
    color: '#FFFFFF',
    fontWeight: '500',
  },

  ViewStyle1: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: verticalScale(25),
    marginBottom: verticalScale(70),
  },
  text: {
    color: '#FFFFFF',
    fontSize: scale(15),
  },
});
