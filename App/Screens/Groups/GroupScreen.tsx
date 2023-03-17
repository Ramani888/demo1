import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { styles } from "./style";
import AppAddButton from "../../Components/AppAddButton/AppAddButton";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "react-native-size-matters";

const GroupScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#282d30" }}>
      <StatusBar backgroundColor={"#282d30"} />
      <View
        style={{
          flex: 1,
          marginHorizontal: scale(20),
          position: "absolute",
          bottom: 10,
          right: 10,
        }}
      >
        <Pressable
          style={{
            marginRight: scale(-10),
          }}
          // onPress={() => navigation.navigate("CreateGroup")}
        >
          <AppAddButton
            Title={"Create Group"}
            IconGroupName={"Ionicons"}
            IconName={"add-circle"}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default GroupScreen;
