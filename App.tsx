import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold  } from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'

import { AuthProvider } from './src/hooks/auth'

import { Routes } from './src/routes';
import { Background } from './src/components/Background'


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <Background>
    <StatusBar/>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    </Background>
  );
}


