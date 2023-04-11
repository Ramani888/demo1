import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    AppButtonContainer: {
        // flex: 1,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 'auto',
        borderRadius: 40,
        backgroundColor: "#40826D",
        shadowColor: "#000",
        paddingLeft: 20,
        paddingRight: 20,
        border: 'none',
    },
    AppButtonTitle: {
        color: '#ffffff',
        marginLeft: 5,
        fontSize: 16
    }
})