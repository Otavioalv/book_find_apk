import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#611fe0",
        padding: 23,
        gap: 23
    }, 
    inputContainer: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 6, 
        height: 45,
    },
    inputText: {
        flex:1,
        height: "100%",
        margin: 0
    },
    iconInput: {
        fontSize: 17,
        padding: 10,
        color: "#989daa"
    },
    titleFont: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff"

    },
});