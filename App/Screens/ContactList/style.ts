import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'gray',
  },
  text: {
    fontSize: scale(15),
    color: '#000000',
  },
  SelectedListContainer: {
    height: 70,
    backgroundColor: '#4B4B4B',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  AddButton: {
    position: 'absolute',
    bottom:10,
    right:10,
  },
  HeaderContainer: {
    height: 70,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },
  BackIcon: {
    marginLeft: 10
  },


  contactCon: {
    // flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d9d9d9',
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDat: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
  },
  phoneNumber: {
    color: '#888',
  },
  CircleCrossIcon: {
    position: 'absolute',
    right:0,
    zIndex: 1
  }
});