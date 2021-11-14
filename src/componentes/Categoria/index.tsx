import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './styles';


function CategoriaItem(props:any){
    
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <Image
                source={props.img}
                style={styles.shoesImg}
                > 
                </Image>
            <Text style={styles.shoesText}>{(props.children)}</Text>
            <Text style={styles.shoesText2}> {props.cost} </Text>
        </TouchableOpacity>
    )
}

export default CategoriaItem;