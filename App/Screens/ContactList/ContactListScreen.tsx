import React, { useEffect, useState } from "react";
import {
  PermissionsAndroid,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import Contacts from "react-native-contacts";
import { scale } from "react-native-size-matters";
import AppContactList from "../../Components/AppContactList/AppContactList";
import Entypo from "react-native-vector-icons/Entypo";

const ContactListScreen = () => {
  const [contacts, setContacts] = useState<any>([]);
  const [selctedContact, setSelectedContact] = useState<any>([]);
  useEffect(() => {
    Contacts.getAll().then((res: any) => {
      setContacts(res);
    });
  }, []);

  useEffect(() => {
    if (Platform.OS === "android") {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
      ).then(() => {
        accessContacts();
      });
    } else {
      accessContacts();
    }
  }, []);

  const accessContacts = () => {
    Contacts.getAll().then((res: any) => {
      setContacts(res);
    });
  };

  const handleSelect = (data: any) => {
    const isAvailable = selctedContact?.find(
      ({ displayName }: any) => displayName === data.displayName
    );
    if (isAvailable) {
      const filterSelectedContact = selctedContact?.filter(
        ({ displayName }: any) => displayName !== data.displayName
      );
      setSelectedContact(filterSelectedContact);
    } else {
      setSelectedContact([...selctedContact, data]);
    }
  };

  // console.log('selected contact', selctedContact)
  return (
    <View style={styles.mainView}>
      {/* <Text style={styles.text}>ContactListScreen</Text> */}
      <View style={styles.SelectedListContainer}>
        {selctedContact?.map((item: any, index: number) => {
          return (
            <View style={styles.contactCon} key={index}>
              <TouchableOpacity
                style={styles.CircleCrossIcon}
                onPress={() => handleSelect(item)}
              >
                <Entypo
                  name={"circle-with-cross"}
                  size={scale(20)}
                  // color={'blue'}
                />
              </TouchableOpacity>
              <View style={styles.imgCon}>
                <View style={styles.placeholder}>
                  <Text style={styles.txt}>
                    {item?.givenName[0] + item?.familyName[0]}
                  </Text>
                </View>
              </View>
              {/* <View style={styles.contactDat}>
                    <Text style={styles.name}>
                      {item?.givenName} {item?.middleName && item?.middleName + ' '}
                      {item?.familyName}
                    </Text>
                    <Text style={styles.phoneNumber}>
                      {item?.phoneNumbers[0]?.number}
                    </Text>
                  </View> */}
            </View>
          );
        })}
      </View>
      {contacts?.map((item: any, index: number) => {
        const isSelected = selctedContact?.find(
          ({ displayName }: any) => displayName === item.displayName
        );
        return (
          <TouchableOpacity onPress={() => handleSelect(item)} key={index}>
            <AppContactList
              contact={item}
              key={index}
              isSelected={isSelected ? true : false}
            />
          </TouchableOpacity>
        );
      })}
      {/* <TouchableOpacity style={styles.AddButton} onPress={() => navigation.navigate('AppContactList')}>
            <AppAddButton Title={'Invite Friend'} IconGroupName={'Ionicons'} IconName={'add-circle'}/>
          </TouchableOpacity> */}
    </View>
  );
};

export default ContactListScreen;
