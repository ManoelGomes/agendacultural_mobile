import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {AmaticSC_400Regular, AmaticSC_700Bold}  from '@expo-google-fonts/amatic-sc';
import {CutiveMono_400Regular} from '@expo-google-fonts/cutive-mono';
import {Archivo_400Regular, Archivo_700Bold, useFonts} from '@expo-google-fonts/archivo';
import NavStack from './src/routes/NavStack';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    AmaticSC_400Regular,
    AmaticSC_700Bold,
    CutiveMono_400Regular,
    Archivo_400Regular,
    Archivo_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading/>;
  } else {
  return (
    <>
      <NavStack/>
      <StatusBar style="light" backgroundColor="#000" translucent={true}  />  
    </>  
  );
  }
}


