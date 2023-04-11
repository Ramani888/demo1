import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import {scale, verticalScale} from 'react-native-size-matters';
import { themes } from '../../styles/theme';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: themes.default.colors.white
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
    backgroundColor: themes.default.colors.gray,
    margin: 5,
    padding: 5,
    borderRadius: 7,
    position: 'relative',
    // height: 50,
    // paddingLeft: 10
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
    fontWeight: 'bold',
    color: themes.colors.color1
  },
  NumberText: {
    color: themes.colors.color1
  },

  row: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#EEE',
    justifyContent: 'center',
    height: 50,
    paddingLeft: 10,
    // margin: 5
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    margin: 5
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: themes.colors.color3,
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#ff0000',
    right: 0,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7
  },
  backTextWhite: {
    color: '#FFF',
  },
  RightArrowContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    position: 'absolute',
    right: 5,
    top: 10,
    cursor: 'pointer'
  }
});
