import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    AppButtonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 'auto',
        borderRadius: 10,
        backgroundColor: "#6D6D6D",
        shadowColor: "#000",
        paddingLeft: 20,
        paddingRight: 20,
    },
    AppButtonTitle: {
        color: '#ffffff',
        marginLeft: 5
    }
})