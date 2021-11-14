import React, { Component } from "react";
import { View,ScrollView,SafeAreaView,Animated,Image} from "react-native";
import DataItem from "../../componentes/Data";
import styles from "./styles";



class TelaData extends Component{

    render(){

     return ( 
         
     <View style={styles.container}>
         <ScrollView
            style={styles.dataLista}
            contentContainerStyle={{
                paddingHorizontal:16,
                paddingBottom:16
            }}
         >
             <DataItem />
         </ScrollView>
     </View>
    
     );
    }
 }
 export default TelaData;
