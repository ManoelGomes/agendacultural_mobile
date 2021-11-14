import React,{useState} from "react";
import { View, Platform, Button} from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";

function DataEvento(){
    const [date, setDate] = useState(new Date());
const [mode, setMode] = useState('date');
const [show, setShow] = useState(false);
const [text, setText] = useState('');
const onChange = (event:any, selectedDate:any) => {
  const currentDate = selectedDate || date;
  setShow(Platform.OS === 'ios');
  setDate(currentDate);

let tempDate = new Date(currentDate);
let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
setText(fDate + '\n')
console.log(fDate)
};

const showMode = (currentMode:any) => {
  setShow(true);
  setMode(currentMode);
};

const showDatepicker = () => {
  showMode('date');
};

    return(
        <View>
        <View>
          <Button onPress={showDatepicker} title="Selecione uma data" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
);
}
export default DataEvento;


