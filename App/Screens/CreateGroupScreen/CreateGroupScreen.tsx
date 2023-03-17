import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "./style";
import AppAddButton from "../../Components/AppAddButton/AppAddButton";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "react-native-size-matters";
import { TextInput } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const CreateGroupScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#282d30" }}>
      <StatusBar backgroundColor={"#282d30"} />
      <View
        style={{
          flex: 1,
          marginHorizontal: scale(20),
        }}
      >
        <View style={{ flexDirection: "row", marginTop: verticalScale(20) }}>
          <Entypo
            name="camera"
            size={scale(25)}
            color="#FFFFFF"
            style={{ marginTop: verticalScale(10) }}
          />
          <TextInput
            placeholder="Group Name"
            placeholderTextColor={"#FFFFFF"}
            style={{
              width: scale(266),
              borderBottomWidth: scale(1),
              borderBottomColor: "#33987f",
              marginLeft: scale(15),
              fontSize: scale(15),
            }}
          />
        </View>

        <View style={{ marginTop: verticalScale(40) }}>
          <Text style={{ fontSize: scale(17), color: "#FFFFFF" }}>Type</Text>
          <View style={{ marginTop: verticalScale(15), flexDirection: "row" }}>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: scale(1),
                  borderColor: "#FFFFFF",
                  width: scale(100),
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: scale(10),
                  marginRight: scale(15),
                }}
              >
                <SimpleLineIcons
                  name="plane"
                  size={scale(20)}
                  color="#FFFFFF"
                />
                <Text
                  style={{
                    padding: scale(7),
                    fontSize: scale(17),
                    color: "#FFFFFF",
                    marginLeft: scale(10),
                  }}
                >
                  Trip
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: scale(1),
                  borderColor: "#FFFFFF",
                  width: scale(120),
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: scale(10),
                  marginRight: scale(15),
                }}
              >
                <SimpleLineIcons
                  name="plane"
                  size={scale(20)}
                  color="#FFFFFF"
                />
                <Text
                  style={{
                    padding: scale(7),
                    fontSize: scale(17),
                    color: "#FFFFFF",
                    marginLeft: scale(10),
                  }}
                >
                  Home
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: scale(1),
                  borderColor: "#FFFFFF",
                  width: scale(130),
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: scale(10),
                  marginRight: scale(15),
                }}
              >
                <SimpleLineIcons
                  name="plane"
                  size={scale(20)}
                  color="#FFFFFF"
                />
                <Text
                  style={{
                    padding: scale(7),
                    fontSize: scale(17),
                    color: "#FFFFFF",
                    marginLeft: scale(10),
                  }}
                >
                  Couple
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: scale(1),
                  borderColor: "#FFFFFF",
                  width: scale(100),
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: scale(10),
                }}
              >
                <SimpleLineIcons
                  name="plane"
                  size={scale(20)}
                  color="#FFFFFF"
                />
                <Text
                  style={{
                    padding: scale(7),
                    fontSize: scale(17),
                    color: "#FFFFFF",
                    marginLeft: scale(10),
                  }}
                >
                  Trip
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: verticalScale(25) }}>
          <Text style={{ fontSize: scale(17), color: "#FFFFFF" }}>Group</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo
              name="add-user"
              size={scale(25)}
              color="#FFFFFF"
              // style={{ marginLeft: scale(10) }}
            />
            <Text
              style={{
                fontSize: scale(15),
                color: "#FFFFFF",
                marginLeft: scale(20),
                marginTop: verticalScale(15),
                lineHeight: scale(20),
              }}
            >
              You will be able to add group members after you save this new
              group
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateGroupScreen;
