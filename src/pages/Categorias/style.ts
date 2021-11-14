import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
      flex:1,
      width: '100%',
      backgroundColor: '#FFF'
    },
    image:{
      width: '100%',
    },
    title:{
      color:'#01a9c6',
      marginTop:10,
      paddingHorizontal: '4%',
    },
    dotContainer:{
      flexDirection: 'row',
      marginVertical: '7%'
    },
    textContent:{
      fontFamily:'CutiveMono_400Regular',
      fontSize: 20,
      margin:15,
    },
    textTitle: {
      color:'#01a9c6',
      fontSize: 22,
      marginVertical: '2%'
    },
    textList:{
      fontFamily:'CutiveMono_400Regular',
      fontSize: 20,
      margin:15,
    },
    line:{
      borderWidth: 1,
      borderBottomColor: '#DDD',
      marginVertical: '2%',
    }
  });
  export default styles;