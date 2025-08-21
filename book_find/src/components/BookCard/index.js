import { Text, View } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";
// import { styles } from "./styles";


export const BookCard = ({item}) => {
    // console.log(item);

    return (
        <View style={styles.section}>
            <View
                style={styles.bookImg}   
            >
                <FontAwesome5
                    name="book"
                    size={20}
                    color="white"
                />
            </View>
            
            <View style={styles.infoList}>
                <Text>
                    {item.title}
                </Text> 

                <View style={styles.infoItem}>
                    <FontAwesome5 name="user-edit" size={24} color="black" />
                    <Text>{item.authors.join(", ")}</Text>           
                </View>
                
                <View style={styles.infoItem}>
                    <Ionicons name="document-text" size={24} color="black" />
                    <Text>
                        {item.pageCount ? item.pageCount : "N/A"} pages
                    </Text>
                </View>
            </View>
        </View>
    )
}