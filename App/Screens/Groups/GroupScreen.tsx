import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import AppAddButton from "../../Components/AppAddButton/AppAddButton";
import { useNavigation } from "@react-navigation/native";
import { serverGetGroups } from "../../services/serverApi";

const GroupScreen = () => {
  const navigation = useNavigation();
  const [groupsData, setGroupsData] = useState<any>([]);

  const getGroupData = async () => {
    const res = await serverGetGroups();
    setGroupsData(res);
  };

  useEffect(() => {
    getGroupData();
  }, []);

  return (
    <View style={styles.mainView}>
      <View style={styles.GroupContainer}>
        {groupsData?.map((data: any, index: number) => {
          return (
            <TouchableOpacity
              style={styles.GroupListContainer}
              key={index}
              onPress={() =>
                navigation.navigate("GroupDetailScreen", { data: data })
              }
            >
              <View style={styles.GroupIcon}></View>
              <View style={styles.GroupDetailContainer}>
                <Text style={styles.GroupTitle}>{data.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* <TouchableOpacity
        style={styles.AddButton}
        onPress={() => navigation.navigate("CreateGroupScreen")}
      >
        <AppAddButton
          Title={"Create Group"}
          IconGroupName={"Ionicons"}
          IconName={"add-circle"}
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default GroupScreen;
