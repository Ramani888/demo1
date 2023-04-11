import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import { themes } from '../../styles/theme';

export const styles = StyleSheet.create({
  mainView: {
    flex: scale(1),
    backgroundColor: themes.default.colors.white,
    justifyContent: 'center',
    paddingTop: verticalScale(100),
  },
  childView: {
    marginHorizontal: scale(15),
  },
  textStyle: {
    fontSize: scale(20),
    color: themes.colors.color1,
    marginTop: 15,
    fontWeight: 'bold',
  },
  textInput: {
    borderRadius: scale(themes.borderRadius.md),
    padding: scale(9),
    marginTop: verticalScale(10),
    color: themes.colors.color1,
    backgroundColor: themes.default.colors.gray,
  },
  buttonStyle: {
    backgroundColor: themes.colors.color1,
    marginTop: scale(15),
    padding: scale(10),
    borderRadius: scale(themes.borderRadius.md),
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
    color: themes.colors.color6,
    fontSize: scale(15),
  },
  ErrorText: {
    color: 'red',
    fontSize: 14,
    marginLeft: scale(5),
    fontStyle: 'italic',
  }
});
