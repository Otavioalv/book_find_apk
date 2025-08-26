import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Text, TextInput, View } from "react-native"
import { styles } from './styles';


export const Header = () => {

    return (
        <View style={styles.container}>
            <Text   
                style={styles.titleFont}
            >
                BookFindNative
            </Text>


            <View style={styles.inputContainer}>

                <Entypo 
                    name="magnifying-glass" 
                    style={styles.iconInput}
                />

                <TextInput
                    style={styles.inputText}
                    placeholder="Search Books"
                />

                <FontAwesome5
                    name="filter" 
                    style={styles.iconInput}
                />
            </View>
        </View>
    )
}