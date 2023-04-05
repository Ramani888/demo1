import { StyleSheet, Dimensions } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  ScrollViewStyle: {
    shadowRadius: 1,
    marginLeft: scale(-15),
    borderBottomWidth: verticalScale(0.8),
    borderBottomColor: "#1e1e1e",
    backgroundColor: "#282d30",
  },
  pageHeaderStyle: {
    marginLeft: scale(10),
    marginTop: verticalScale(10),
  },
  pageHeaderTextStyle: {
    fontSize: scale(14),
    borderBottomWidth: verticalScale(1),
    borderBottomColor: "darkgrey",
    paddingBottom: verticalScale(9),
    paddingHorizontal: scale(10),
    fontFamily: "Mulish-SemiBold",
  },
  DynamicPageView: {
    // flex: 1,
    height: verticalScale(580),
    backgroundColor: "#282d30",
  },
  childView1: {
    // flex: 1,
    // height: verticalScale(400),
    alignItems: "center",
  },
  ImageMainView: {
    flexDirection: "row",
    marginTop: verticalScale(40),
  },
  image: {
    width: scale(75),
    height: scale(75),
    marginHorizontal: scale(10),
  },
  pageText1: {
    color: "#FFFFFF",
    fontSize: scale(17),
    marginTop: verticalScale(40),
    fontFamily: "Mulish-SemiBold",
  },
  pageText2: {
    color: "#a7aeb4",
    fontSize: scale(16),
    marginTop: verticalScale(10),
    width: scale(300),
    textAlign: "center",
    lineHeight: scale(25),
    fontFamily: "Mulish-Regular",
  },
  renderItemChildView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  renderItemView1Image: {
    margin: scale(8),
    marginLeft: scale(10),
  },
  renderItemView2: {
    justifyContent: "center",
    marginLeft: scale(10),
    width: scale(205),
  },
  renderItemView3: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: scale(20),
  },
  renderItemTextInputStyle: {
    borderBottomWidth: verticalScale(1),
    borderBottomColor: "#FFFFFF",
    paddingBottom: verticalScale(-10),
  },
  renderItemView2Text1: {
    fontSize: scale(15),
    color: "#FFFFFF",
    fontFamily: "Mulish-Regular",
  },
  renderItemView2Text2: {
    fontSize: scale(10),
    marginTop: verticalScale(5),
    color: "#FFFFFF",
    fontFamily: "Mulish-Regular",
  },
  renderItemView3Text: {
    marginTop: verticalScale(10),
    marginRight: scale(5),
    fontSize: scale(12),
  },
  flatlistContainerView: {
    marginTop: verticalScale(15),
  },
  flatlist1Style: {
    height: verticalScale(290),
  },
});
