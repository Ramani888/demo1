import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: scale(15),
    color: "#000000",
  },
  SelectedListContainer: {
    height: verticalScale(60),
    backgroundColor: "#4B4B4B",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  AddButton: {
    position: "absolute",
    bottom: verticalScale(7),
    right: scale(10),
  },

  contactCon: {
    // flex: 1,
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d9d9d9",
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
  },
  contactDat: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 5,
  },
  txt: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
  },
  phoneNumber: {
    color: "#000000",
  },
  CircleCrossIcon: {
    position: "absolute",
    right: 0,
    zIndex: 1,
  },
});
