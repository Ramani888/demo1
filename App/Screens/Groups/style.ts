import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
  GroupContainer: {
    // backgroundColor: 'white',
    // height: '50%',
    // width: '100%'
  },
  GroupListContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'flex-start',
    // alignItems: 'center',
    backgroundColor: '#c4c4c4',
    margin: 5,
    padding: 5,
    borderRadius: 7
  },
  GroupIcon: {
    height: 100,
    width: 60,
    backgroundColor: 'gray',
    borderRadius: 7
  },
  GroupDetailContainer: {
    marginLeft: 10
  },
  GroupTitle: {
    fontSize: 18,
    fontWeight: '600'
  }
});
