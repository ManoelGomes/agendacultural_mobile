import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const {Navigator, Screen} = createBottomTabNavigator();
import Landing from "../pages/Landing";
import TelaCategoria from "../pages/Categorias";
import Descricao from "../pages/Descricao";

const Stack = createStackNavigator();

class NavStack extends Component{
    
    render(){
    return(
        <NavigationContainer>
           <Stack.Navigator>
                <Stack.Screen
                    name="Inicio"
                    component={Landing}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Descricao"
                    component={Descricao}
                />
                <Stack.Screen
                    name="Categorias"
                    component={TelaCategoria}
                />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}
}

export default NavStack;