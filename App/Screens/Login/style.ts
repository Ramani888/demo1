import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-reanimated';
import {scale, verticalScale} from 'react-native-size-matters';
import { themes } from '../../styles/theme'

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainViewStyle: {
    backgroundColor: '#ffffff',
    height: height,
    flex: scale(1),
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: themes.colors.color1,
    textAlign: 'left',
    marginTop: 15,
    fontWeight: 'bold',
    paddingLeft: scale(20),
  },
  textInputViewStyle: {
    paddingLeft: scale(20),
    paddingRight: scale(20),
    paddingTop: scale(5),
  },
  textInputStyle: {
    borderRadius: scale(themes.borderRadius.md),
    padding: scale(9),
    color: themes.colors.color1,
    backgroundColor: themes.default.colors.gray,
    border: 'none',
    placeholderTextColor: themes.colors.color1,
    marginTop: scale(10)
  },
  buttonStyle: {
    backgroundColor: themes.colors.color1,
    marginTop: scale(20),
    padding: scale(10),
    borderRadius: scale(themes.borderRadius.md),
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
