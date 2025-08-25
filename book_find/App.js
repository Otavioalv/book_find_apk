import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ListBooks } from './src/components/ListBooks';
import { styles } from './App.styles';
import { Footer } from './src/components/Footer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  // const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <SafeAreaView
          style={styles.container}
          edges={['top', 'bottom']}
        >
        {/* <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        > */}

          {/* 
            INPUT DE TEXTO VAI FICAR AQUI
           */}
          
          <ListBooks/>
          
          <Footer/>
        {/* </KeyboardAvoidingView> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
