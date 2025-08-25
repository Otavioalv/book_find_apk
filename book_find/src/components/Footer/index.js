import { Text, TouchableOpacity, View, Alert } from "react-native"
import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons"

import { styles } from "./styles"


export const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                title="HOME"
                onPress={() => Alert.alert("Botão vai para home")}
            > 
                <Entypo 
                    name="home" 
                    style={styles.buttonIcons}
                />
                <Text
                    style={styles.buttonText}
                >
                    Home
                </Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.button}
                title="SAVED"
                onPress={() => Alert.alert("Botão vai para salvos")}
            >
                <FontAwesome 
                    style={styles.buttonIcons}
                    name="bookmark" 
                />
                <Text
                    style={styles.buttonText}
                >
                    Saved
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                title="PROFILE"
                onPress={() => Alert.alert("Botão vai para profile")}
            >
                <FontAwesome5 
                    name="user-alt" 
                    style={styles.buttonIcons}
                />
                <Text
                    style={styles.buttonText}
                >
                    Profile
                </Text>
            </TouchableOpacity>
        </View>
    )
}