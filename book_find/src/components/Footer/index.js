import { Text, TouchableOpacity, View, Alert } from "react-native"
import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons"

import { styles } from "./styles"
import { useState } from "react"


export const Footer = () => {
    const [bttSelected, setBttSelected] = useState("home");

    const handleSetBttSelected = (btt) => {
        setBttSelected(btt);
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                title="HOME"
                onPress={() => handleSetBttSelected("home")}
            > 
                <Entypo 
                    name="home" 
                    style={[
                        bttSelected === "home" 
                            ? styles.buttonIconSelected
                            : styles.buttonIcon
                    ]}
                />
                <Text
                    style={[
                        bttSelected === "home" 
                            ? styles.buttonTextSelected 
                            : styles.buttonText
                        ]}
                >
                    Home
                </Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.button}
                title="SAVED"
                onPress={() => handleSetBttSelected("saved")}
            >
                <FontAwesome 
                    style={[
                        bttSelected === "saved" 
                            ? styles.buttonIconSelected
                            : styles.buttonIcon
                    ]}
                    name="bookmark" 
                />
                <Text
                    style={[
                        bttSelected === "saved" 
                            ? styles.buttonTextSelected 
                            : styles.buttonText
                        ]}
                >
                    Saved
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                title="PROFILE"
                onPress={() => handleSetBttSelected("profile")}
            >
                <FontAwesome5 
                    name="user-alt" 
                    style={[
                        bttSelected === "profile" 
                            ? styles.buttonIconSelected
                            : styles.buttonIcon
                    ]}
                />
                <Text
                    style={[
                        bttSelected === "profile" 
                            ? styles.buttonTextSelected 
                            : styles.buttonText
                        ]}
                >
                    Profile
                </Text>
            </TouchableOpacity>
        </View>
    )
}