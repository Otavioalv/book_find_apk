import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ListBooks } from './src/components/ListBooks';
import { styles } from './App.styles';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="auto"/>

      <View
        style={styles.listBooks}
      >
        <ListBooks/>
      </View>
      
    </KeyboardAvoidingView>
  );
}
