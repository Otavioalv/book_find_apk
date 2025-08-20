import { FlatList, Text, View } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";
import { BookCard } from "../BookCard";


export const ListBooks = () => {
    const listBks = [
        {
            "id": 1,
            "title": "Unlocking Android",
            "isbn": "1933988673",
            "pageCount": 416,
            "authors": [
                "W. Frank Ableson",
                "Charlie Collins",
                "Robi Sen"
            ]
        },
        {
            "id": 2,
            "title": "Android in Action, Second Edition",
            "isbn": "1935182722",
            "pageCount": 592,
            "authors": [
                "W. Frank Ableson",
                "Robi Sen"
            ]
        },
        {
            "id": 3,
            "title": "Specification by Example",
            "isbn": "1617290084",
            "pageCount": 0,
            "authors": [
                "Gojko Adzic"   
            ]
        }
    ];

    return (
        <View>
            
        </View>
    )
}