import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from './style';

export default function Detalhes (props:any) {

 function filterDesc(desc:any){
    if(desc.length < 27){
        return desc;
    }
    return `${desc.substring(0, 23)}...`;
 }
 return (
   <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image
        source={props.img}
        style={styles.shoesImg}
      > 
      </Image>
      <Text style={styles.shoesText}>
          {filterDesc(props.children)}
      </Text>
      <Text style={styles.shoesText2}> {props.cost} </Text>
      
   </TouchableOpacity>
  );
}