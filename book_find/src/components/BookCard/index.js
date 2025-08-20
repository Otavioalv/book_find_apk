import { Text, View } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
// import { styles } from "./styles";


export const BookCard = ({book}) => {
    <View
    >
        <View 
            key={book.id}
        >
            <View>
                <FontAwesome5
                    name="book"
                    size={32}
                />
            </View>
            
            <View>
                <Text>
                    {book.title}
                </Text> 

                <View>
                    <FontAwesome5 name="user-edit" size={24} color="black" />
                    <Text>{book.authors.join(", ")}</Text>           
                </View>
                <View>
                    <Ionicons name="document-text" size={24} color="black" />
                    <Text>
                        {book.pageCount} pages
                    </Text>
                </View>
            </View>
        </View>
    </View>
}