import AsyncStorage from "@react-native-async-storage/async-storage";

export const IsLoggedIn = async () => {
    const value = await AsyncStorage.getItem('user');
    console.log('value', value);
    if (value !== null) {
        return false;
    } else {
        return true;
    }
}