import React from 'react';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo';
import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { StatusBar } from 'react-native';
import { DetalhesCarro } from './src/screens/DetalhesCarro';


export default function App() {
  let [fontsLoaded] = useFonts([Inter_400Regular, Inter_500Medium, Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold])

  if (!fontsLoaded) {
    <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <DetalhesCarro />
    </ThemeProvider>
  );
}

