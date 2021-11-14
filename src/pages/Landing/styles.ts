import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const styles = StyleSheet.create({
    header:{
      backgroundColor:'#0276f2',
      flexDirection:'row',
      alignItems:'center',
      borderBottomWidth:1,
      borderBottomColor:'#FFF',
    },
    box:{
      height:300,
      backgroundColor:'#DDD',
      margin:7,
      borderRadius:7
    },
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
    },
    titulo:{
      fontFamily:'CutiveMono_400Regular',
      color:'#1da3e0',
      textAlign:'left',
      // textShadowColor: '#ff4c00',
       textShadowOffset: {width: 1, height: 1},
       textShadowRadius: 1,
      fontSize: 25,
      marginHorizontal: '6%'  
    },
    titulo2:{
      fontFamily:'CutiveMono_400Regular',
      color:'#1da3e0',
      fontSize:25,
      marginTop:30,
      marginBottom:15,
      textAlign:'left',
      // textShadowColor: '#ff4c00',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 1,
      marginHorizontal: '6%',
    },
    textContainer:{
      flexDirection: 'row',
      marginHorizontal: '5%',
      marginTop:30,
      marginBottom:30,
    },
    text:{
      fontSize: 20,
      marginHorizontal: '1%',
      fontFamily:'CutiveMono_400Regular',
    },
    //modal
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  
  });
 export default styles;