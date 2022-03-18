import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';




export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  async function loadFonts() {
    await Font.loadAsync({
      "Inter_400Regular": { uri: require("./assets/fonts/Inter-Regular.ttf"), display: Font.FontDisplay.FALLBACK,},
      "Inter_500Medium": { uri: require("./assets/fonts/Inter-Medium.ttf"), display: Font.FontDisplay.FALLBACK,},
      "Archivo_400Regular": { uri: require("./assets/fonts/Archivo-Regular.ttf"), display: Font.FontDisplay.FALLBACK,},
      "Archivo_500Medium": { uri: require("./assets/fonts/Archivo-Medium.ttf"), display: Font.FontDisplay.FALLBACK,},
      "Archivo_600SemiBold": { uri: require("./assets/fonts/Archivo-SemiBold.ttf"), display: Font.FontDisplay.FALLBACK,}
    })
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, [])
  
    if (!fontsLoaded) {
      <AppLoading />
    }
  
    return (
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent" 
        />
        <Routes />
      </ThemeProvider>
    );
  


}

