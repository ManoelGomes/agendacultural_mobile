import React, {Component, useState}from "react";
import { View, Image, Text, ScrollView, Animated, StyleSheet,SafeAreaView,Button,Platform, FlatList,Modal, Pressable,TouchableOpacity} from "react-native";
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import botaoVoltar from '../../assets/images/voltar.png'
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
// import {} from 'react-native-safe-area-context'
import {Agenda} from '../../assets/images/AgendaCultural.png';
import DataItem from "../Data";
import Landing from '../../pages/Landing'
import {MaterialIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import DataEvento from "../DatePicker/datepicker";


export default function PageHeader(){
    const [modalVisible, setModalVisible] = useState(false);
    const {navigate} = useNavigation();
    const [data, setData] = useState();
    const onChange = (data:any) =>{
      setData(data);
    }
// datepicker    
   
// const [date, setDate] = useState(new Date());
// const [mode, setMode] = useState('date');
// const [show, setShow] = useState(false);
// const [text, setText] = useState('');
// const onChange = (event:any, selectedDate:any) => {
//   const currentDate = selectedDate || date;
//   setShow(Platform.OS === 'ios');
//   setDate(currentDate);

// let tempDate = new Date(currentDate);
// let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
// setText(fDate + '\n')
// console.log(fDate)
// };

// const showMode = (currentMode:any) => {
//   setShow(true);
//   setMode(currentMode);
// };

// const showDatepicker = () => {
//   showMode('date');
// };

// const showTimepicker = () => {
//   showMode('time');
// };

    return(
        <>
        <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
          <View style={styles.centeredView}>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
         
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DataEvento/>
              {/* <DatePicker
                  format="DD/MM/YYYY"
                  date={data}
                  onDateChange={onChange}
              />           */}
              {/* <View>
                <View>
                  <Button onPress={() => showMode('date')} title="Selecione uma data" />
                </View>
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={mode}
                      is24Hour={true}
                      onChange={onChange}
                    />
                  )}
              </View> */}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Pesquisar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
      >
        <Ionicons
            name="calendar"
            size={30}
            color="green"
        />
      </Pressable>
      </View> 
      </TouchableOpacity>
      </>
    )
}


  
  