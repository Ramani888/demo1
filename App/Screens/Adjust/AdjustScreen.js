import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import AntDesign from "react-native-vector-icons/AntDesign";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";

const AdjustScreen = () => {
  const navigation = useNavigation();
  const [page, setPage] = useState("1");

  const data = [
    {
      name: "Ramani Divyesh",
      amount: "0.00",
      image:
        "https://p.kindpng.com/picc/s/668-6689202_avatar-profile-hd-png-download.png",
    },
    {
      name: "Dip Thumar",
      amount: "0.00",
      image:
        "https://p.kindpng.com/picc/s/668-6689202_avatar-profile-hd-png-download.png",
    },
    {
      name: "Jasmin Rank",
      amount: "0.00",
      image:
        "https://p.kindpng.com/picc/s/668-6689202_avatar-profile-hd-png-download.png",
    },
    {
      name: "Nirav Gondaliya ",
      amount: "0.00",
      image:
        "https://p.kindpng.com/picc/s/668-6689202_avatar-profile-hd-png-download.png",
    },
    {
      name: "Rutvik Mungra ",
      amount: "0.00",
      image:
        "https://p.kindpng.com/picc/s/668-6689202_avatar-profile-hd-png-download.png",
    },
    {
      name: "Denish Thumar",
      amount: "0.00",
      image:
        "https://p.kindpng.com/picc/s/668-6689202_avatar-profile-hd-png-download.png",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={styles.renderItemChildView}>
          <View>
            <Avatar.Image
              source={{
                uri: item.image,
              }}
              size={scale(50)}
              style={styles.renderItemView1Image}
            />
          </View>
          <View style={styles.renderItemView2}>
            <Text style={styles.renderItemView2Text1}>{item.name}</Text>
            <Text style={styles.renderItemView2Text2}>₹ {item.amount}</Text>
          </View>
          {page == "3" ? (
            <View style={styles.renderItemView3}>
              <TextInput
                placeholder="0.00"
                style={styles.renderItemTextInputStyle}
              />
              <Text
                style={[styles.renderItemView3Text, { marginLeft: scale(5) }]}
              >
                %
              </Text>
            </View>
          ) : (
            <View style={styles.renderItemView3}>
              <Text style={styles.renderItemView3Text}>+</Text>
              <TextInput
                placeholder="0.000"
                style={styles.renderItemTextInputStyle}
              />
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={"#282d30"} />

      <View
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: scale(0.8),
          shadowRadius: scale(1),
          elevation: scale(9),
        }}
      >
        <ScrollView
          horizontal
          style={[styles.ScrollViewStyle]}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.pageHeaderStyle}
            onPress={() => setPage("1")}
          >
            <Text
              style={[
                styles.pageHeaderTextStyle,
                {
                  borderBottomColor: page == "1" ? "#FFFFFF" : "#282d30",
                  marginLeft: scale(15),
                  color: page == "1" ? "#FFFFFF" : "#bbc2cc",
                },
              ]}
            >
              Equally
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.pageHeaderStyle}
            onPress={() => setPage("2")}
          >
            <Text
              style={[
                styles.pageHeaderTextStyle,
                {
                  borderBottomColor: page == "2" ? "#FFFFFF" : "#282d30",
                  color: page == "2" ? "#FFFFFF" : "#bbc2cc",
                },
              ]}
            >
              Unequally
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.pageHeaderStyle}
            onPress={() => setPage("3")}
          >
            <Text
              style={[
                styles.pageHeaderTextStyle,
                {
                  borderBottomColor: page == "3" ? "#FFFFFF" : "#282d30",
                  color: page == "3" ? "#FFFFFF" : "#bbc2cc",
                },
              ]}
            >
              By percentages
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.pageHeaderStyle}
            onPress={() => setPage("4")}
          >
            <Text
              style={[
                styles.pageHeaderTextStyle,
                {
                  borderBottomColor: page == "5" ? "#FFFFFF" : "#282d30",
                  marginRight: scale(10),
                  color: page == "4" ? "#FFFFFF" : "#bbc2cc",
                },
              ]}
            >
              By adjustment
            </Text>
          </TouchableOpacity>
        </ScrollView>

        {page == "1" ? (
          <View style={styles.DynamicPageView}>
            <View style={styles.childView1}>
              <View style={styles.ImageMainView}>
                <Image
                  source={require("../../Assets/Img/Adjustmentpage/split1.png")}
                  style={styles.image}
                />
                <Image
                  source={require("../../Assets/Img/Adjustmentpage/split2.png")}
                  style={styles.image}
                />
                <Image
                  source={require("../../Assets/Img/Adjustmentpage/split3.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.childView1}>
                <Text style={styles.pageText1}>Split equally</Text>
                <Text style={styles.pageText2}>
                  Select which people owe an equal share.
                </Text>
              </View>
            </View>
            <View style={styles.flatlistContainerView}>
              <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={(item) => renderItem(item)}
                style={styles.flatlist1Style}
              />
            </View>
          </View>
        ) : page == 2 ? (
          <View style={styles.DynamicPageView}>
            <View style={styles.childView1}>
              <View style={styles.ImageMainView}>
                <Image
                  source={require("../../Assets/Img/Adjustmentpage/split1.png")}
                  style={styles.image}
                />
                <Image
                  source={require("../../Assets/Img/Adjustmentpage/split2.png")}
                  style={styles.image}
                />
                <Image
                  source={require("../../Assets/Img/Adjustmentpage/split3.png")}
                  style={styles.image}
                />
              </View>
              <Text style={styles.pageText1}>Split by exact amounts</Text>
              <Text style={styles.pageText2}>
                Specify exactly how much each person owes.
              </Text>
            </View>
            <View style={styles.flatlistContainerView}>
              <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={(item) => renderItem(item)}
                style={styles.flatlist1Style}
              />
            </View>
          </View>
        ) : page == "3" ? (
          <View style={styles.DynamicPageView}>
            <View style={styles.childView1}>
              <View style={styles.ImageMainView}>
                <Image
                  source={require("../../Assets/Img/Adjustmentpage/split1.png")}
                  style={styles.image}
                />
                <Image
                  source={require("../../Assets/Img/Adjustmentpage/split2.png")}
                  style={styles.image}
                />
                <Image
                  source={require("../../Assets/Img/Adjustmentpage/split3.png")}
                  style={styles.image}
                />
              </View>
              <Text style={styles.pageText1}>Split by percentages</Text>
              <Text style={styles.pageText2}>
                Enter the percentage split that's fair for your situation.
              </Text>
            </View>
            <View style={styles.flatlistContainerView}>
              <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={(item) => renderItem(item)}
                style={styles.flatlist1Style}
              />
            </View>
          </View>
        ) : page == "4" ? (
          <View style={styles.DynamicPageView}>
            <View style={styles.childView1}>
              <View style={styles.ImageMainView}>
                <Image
                  source={require("../../Assets/Img/Adjustmentpage/split1.png")}
                  style={styles.image}
                />
                <Image
                  source={require("../../Assets/Img/Adjustmentpage/split2.png")}
                  style={styles.image}
                />
                <Image
                  source={require("../../Assets/Img/Adjustmentpage/split3.png")}
                  style={styles.image}
                />
              </View>
              <Text style={styles.pageText1}>Split by adjustment</Text>
              <Text style={styles.pageText2}>
                Enter adjustments to reflect who owes extra; Splitwise will
                distribute the remainder equally.
              </Text>
            </View>
            <View style={styles.flatlistContainerView}>
              <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={(item) => renderItem(item)}
                style={styles.flatlist1Style}
              />
            </View>
          </View>
        ) : (
          ""
        )}
      </View>
    </View>
  );
};

export default AdjustScreen;
