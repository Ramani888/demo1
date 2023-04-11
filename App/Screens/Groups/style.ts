import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import {scale, verticalScale} from 'react-native-size-matters';
import { themes } from '../../styles/theme';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
  GroupContainer: {
    // backgroundColor: 'white',
    // height: '50%',
    // width: '100%'
  },
  GroupListContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    backgroundColor: themes.default.colors.gray,
    margin: 5,
    padding: 5,
    borderRadius: 7,
    position: 'relative',
  },
  GroupIcon: {
    height: 60,
    width: 60,
    backgroundColor: themes.default.colors.white,
    borderRadius: 7
  },
  GroupDetailContainer: {
    marginLeft: 10
  },
  GroupTitle: {
    fontSize: 18,
    fontWeight: '600',
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
    right: 15,
    top: 20,
    cursor: 'pointer'
  }
});
