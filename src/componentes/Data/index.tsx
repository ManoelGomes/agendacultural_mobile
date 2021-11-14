import React from 'react';
import {View,ScrollView} from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import styles from './styles';
import Detalhes from '../Detalhes';
import { useNavigation } from "@react-navigation/native";


function DataItem(){
    const navigation = useNavigation();
    function telaDescricao(){
        navigation.navigate('Descricao');
    }
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10}}>
                <Detalhes img={require('../../assets/images/triangula3.png')}  onPress={telaDescricao}>
                Poema e Politica na Comunidade
                </Detalhes>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Detalhes img={require('../../assets/images/triangula3.png')}  onPress={telaDescricao}>
                Poema e Politica na Comunidade 
                </Detalhes>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Detalhes img={require('../../assets/images/triangula3.png')}  onPress={telaDescricao}>
                Poema e Politica na Comunidade 
                </Detalhes>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Detalhes img={require('../../assets/images/triangula3.png')}  onPress={telaDescricao}>
                Poema e Politica na Comunidade  
                </Detalhes>
            </View>
        </ScrollView> 
    )
}

export default DataItem;

