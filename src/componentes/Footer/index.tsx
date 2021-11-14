import React from "react";
import {View, Text, Image} from 'react-native';

export default function Footer(){
    return(
        <View style={{backgroundColor:'#202124', flex:1,  marginBottom:-20, paddingBottom:100,alignItems:'center', justifyContent:'center',borderTopColor:"#1da3e0",
        borderWidth:3}}>
            <Image source={require('../../assets/images/LogoMatheus2.png')} style={{flex:1, width:100, height:100, marginTop:40}}
        resizeMode="contain"/>
            <Text style={{fontFamily:'Archivo_400Regular', marginHorizontal:'4%', color:'white', fontSize:20}}>
                Agenda Cultural de Vilena
            </Text>
        </View>
    );
}