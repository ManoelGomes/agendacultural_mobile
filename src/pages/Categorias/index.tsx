import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import styles from './style';
import Detalhes from '../../componentes/Detalhes';
import { useNavigation } from "@react-navigation/native";

export default function Descricao(props:any) {
    const  navigation = useNavigation();
    function telaDescricao(){
        navigation.navigate('Descricao')
      }

 return (
   <View style={styles.container} >
     <ScrollView>
        <View>
              <Detalhes img={require('../../assets/images/triangula3.png')} cost="Local: Escola Marechal Rondon" onPress={telaDescricao}>
                Feira de Ciências
              </Detalhes>
              <Detalhes img={require('../../assets/images/triangula4.png')} cost="Local: Praça Padre Angelo Spadari" onPress={telaDescricao}>
                Hora Musical
              </Detalhes>
          </View>
         </ScrollView>
   </View>
  );
}