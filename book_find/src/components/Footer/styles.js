import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 8,
    },
    button: {
        alignItems: "center",
        margin: 0,
        padding: 0
    },
    buttonIcon: {
        fontSize: 23,
        color: "#989daa"
    },
    buttonIconSelected: {
        color: "#611fe0",
        fontSize: 23,
    },
    buttonText: {
        fontSize: 15,
        color: "#989daa"
    },
    buttonTextSelected: {
        fontSize: 15,
        color: "#611fe0"
    }
});