import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        paddingTop:60,
        backgroundColor:'#07042e',
    },
    topBar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    title:{
        fontFamily:'AmaticSC_700Bold',
        color: '#ff4c00',
        fontSize:40,
        maxWidth:290,
        marginLeft:20,
        marginTop:10,
        marginBottom:10,
        textAlign:"left",
        textShadowColor: '#ff4c00',
         textShadowOffset: {width: 1, height: 1},
         textShadowRadius: 1
    },
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
        marginTop:5,
        borderRadius:2
      },
      textStyle: {
        color: "white",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      datecomponente:{
        width:350
      }
})

export default styles;