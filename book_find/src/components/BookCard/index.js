import { Text, View } from "react-native"
import { FontAwesome5, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
// import Ionicons from '@expo/vector-icons/Ionicons';
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
                <Text
                    style={styles.titleFont}
                >
                    {item.title}
                </Text> 

                <View style={styles.directionRow}>
                    <FontAwesome5 
                        style={[
                            styles.textSecondary,
                            styles.secondaryFont
                        ]}
                        name="user-edit"
                    />
                    <Text
                        style={[
                            styles.textSecondary,
                            styles.secondaryFont
                        ]}
                    >
                        {item.authors.join(", ")}
                    </Text>           
                </View>
                
                <View style={styles.footerInfo}>
                    <View style={styles.directionRow}>

                        <Ionicons 
                            style={[
                                styles.textSecondary,
                                styles.secondaryFont
                            ]}
                            name="document-text" 
                        />
                        <Text
                            style={[
                                styles.textSecondary,
                                styles.secondaryFont
                            ]}
                        >
                            {item.pageCount ? item.pageCount : "N/A"} pages
                        </Text>
                    </View>

                    <View style={styles.directionRow}>
                        <FontAwesome 
                            name="bookmark-o" 
                            style={[
                                styles.textSecondary,
                                styles.secondaryFont
                            ]}
                        />

                        <MaterialIcons 
                            name="arrow-forward-ios" 
                            style={[
                                styles.textSecondary,
                                styles.secondaryFont
                            ]}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}