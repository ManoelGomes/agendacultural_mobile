import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center', 
        alignContent:'center',
    },
    shoesImg:{
        width: 100,
        height: 100,
        borderRadius:50, 
        marginTop:12, 
        borderWidth:3,      
    },
    shoesText:{
        fontSize: 11,
        color:'white',
        width: '90%',
        textAlign:'center',
        fontFamily:'Archivo_700Bold',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },
    shoesText2:{
      fontSize: 15,
      color:'black',
      width: '90%',
      borderBottomLeftRadius:18,
      borderBottomRightRadius:18,
    }
})

export default styles;