import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    section: {
        flexDirection: "row",
        marginVertical: 10,
        gap: 8,
    },
    infoList: {
        gap: 8,
        flex: 1
    },  
    directionRow: {
        flexDirection: "row",
        gap: 4,
    },
    titleFont: {
        fontSize: 22,
        fontWeight: "bold",
        flex: 1
    },
    secondaryFont: {
        fontSize: 17,
    }, 
    textSecondary: {
        color: "#4c4c4c",
    },
    bookImg: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#611fe0",
        width: 55,
        height: 70,
        borderRadius: 8
    },
    footerInfo: {
        width: "90%",
        flexDirection: "row",
        gap: 4,
        justifyContent: "space-between",
        alignItems: "center",          // centraliza ícones/texto na altura
        paddingVertical: 4,
    }
});