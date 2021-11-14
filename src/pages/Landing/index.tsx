import React, {Component, useState}from "react";
import { View, Image, Text, ScrollView, Animated, StyleSheet,SafeAreaView, TouchableOpacity, Modal, Pressable, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import DataItem from "../../componentes/Data";
import CategoriaItem from "../../componentes/Categoria";
import Detalhes from "../../componentes/Detalhes";
import PageHeader from "../../componentes/Pageheader";
import Footer from "../../componentes/Footer";

  export default function Landing() {

  
    const [modalVisible, setModalVisible] = useState(false);
    const  navigation = useNavigation();
    const [scrollY, setScrollY] = useState(new Animated.Value(0));

    function telaDescricao(){
      navigation.navigate('Descricao')
    }
    function telaCategorias(){
      navigation.navigate('Categorias')
    }

    return (
        <>
        <SafeAreaView style={{ flex:0, backgroundColor:'#0276', opacity: 0.8}}/>           
        <View style={styles.container} >
        <Animated.View               
        style={[styles.header,
          {
            height:scrollY.interpolate({
              inputRange:[10,160,185],
              outputRange:[140,20,0],
              extrapolate:'clamp'
            }),
            opacity:scrollY.interpolate({
              inputRange:[1,75,170],
              outputRange:[1,1,0],
              extrapolate:'clamp'
            })
        }]}>
          <Animated.Image source={require('../../assets/images/BannerFrontal.png')}
        style={{width:'100%'}}
        resizeMode="contain"/>
        </Animated.View>

        <ScrollView
        contentContainerStyle={{
            paddingBottom:16,
        }}
        decelerationRate='normal'
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{
          nativeEvent:{
            contentOffset:{y: scrollY}
          },
        }],
        { useNativeDriver:false})}
        >
          <View style={styles.textContainer}>
              <Text style={[styles.text, { color: '#A92ED9'} ]}>Pesquise</Text>
              <Text style={[styles.text, { color: '#A92ED9'} ]}>por</Text>
              <Text style={[styles.text, { color: '#A92ED9'} ]}>Data</Text>
            <PageHeader/>
          </View>        
          <View>
              <Text style={styles.titulo}>Eventos para Hoje</Text>
              <Detalhes img={require('../../assets/images/triangula.png')} cost="Local: Escola Marechal Rondon" onPress={telaDescricao}>
                  Feira de Ciências
              </Detalhes>
              <Detalhes img={require('../../assets/images/triangula2.png')} cost="Local: Praça Padre Angelo Spadari" onPress={telaDescricao}>
                  Hora Musical
              </Detalhes>
          </View>
          <View>
              <Detalhes img={require('../../assets/images/triangula3.png')} cost="Local: Escola Marechal Rondon" onPress={telaDescricao}>
                Feira de Ciências
              </Detalhes>
              <Detalhes img={require('../../assets/images/triangula4.png')} cost="Local: Praça Padre Angelo Spadari" onPress={telaDescricao}>
                Hora Musical
              </Detalhes>
          </View>
          <Text style={styles.titulo2}>Categorias</Text>
            <View style={{backgroundColor:'#1da3e0', borderBottomColor:'#1da3e0', borderBottomWidth:3, borderTopColor:'#1da3e0', borderTopWidth:3}}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <CategoriaItem img={require('../../assets/images/triangula2.png')} onPress={telaCategorias}>
                  Dança
                </CategoriaItem>
                <CategoriaItem img={require('../../assets/images/triangula2.png')}  onPress={telaCategorias}>
                  Poema 
                </CategoriaItem>
                <CategoriaItem img={require('../../assets/images/triangula2.png')}  onPress={telaCategorias}>
                  Teatro
                </CategoriaItem>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                <CategoriaItem img={require('../../assets/images/triangula.png')} onPress={telaCategorias}>
                  Culinária
                </CategoriaItem>
                <CategoriaItem img={require('../../assets/images/triangula4.png')} onPress={telaCategorias}>
                  Shows
                </CategoriaItem>
                <CategoriaItem img={require('../../assets/images/triangula2.png')}  onPress={telaCategorias}>
                  Artesanato
                </CategoriaItem>
              </View> 
            </View>  
            <View>
              <Text style={styles.titulo2}>Eventos Anteriores</Text>
              <View style={{flexDirection: 'row'}}>
                <DataItem/>
              </View>
            </View>
            <View style={{marginTop:30}}>
              <Footer/>
            </View>
            
          </ScrollView>
          
        </View>
      </>
    );
  }

  
  