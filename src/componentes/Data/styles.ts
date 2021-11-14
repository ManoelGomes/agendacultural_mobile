import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop:10,
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
      },
      header:{
        backgroundColor:'#101010',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:10,
        paddingLeft:10,
        borderBottomWidth:2,
        borderBottomColor:'#FFF'
      },
      box:{
        height:300,
        width:350,
        backgroundColor:'#DDD',
        margin:7,
        borderRadius:7
      },
      imagem: { 
        flex:1,
         height: 340,
          width: '100%',
          // margin:16, 
          resizeMode: 'contain'
        },
        cardText:{
          backgroundColor:'#141518',
          flexDirection:'row',
          fontSize:18,
          padding:10,
          fontFamily:'CutiveMono_400Regular',
          color:'white'
        },
        cardLocal:{
            flexDirection:'row',
            fontSize:18,
            padding:10,
            backgroundColor:'#141518',
            fontFamily:'CutiveMono_400Regular',
            color:'white'
          },
          cardLocal2:{
            flexDirection:'row',
            fontSize:18,
            padding:10,
            backgroundColor:'#141518',
            fontFamily:'CutiveMono_400Regular',
            borderBottomLeftRadius:18,
            borderBottomRightRadius:18,
            color:'white'
          },
        card:{
          backgroundColor:'#fff',
          marginBottom:10,
          // marginLeft:'2%',
          width:'100%',
          shadowColor:'#000',
          shadowOpacity:1,
          shadowOffset:{
            width:3,
            height:3
          }
        },
        cardImage:{
          width:'100%',
          height:200,
          resizeMode:'cover',
          borderTopLeftRadius:18,
          borderTopRightRadius:18,
        }
    // container:{
    //     backgroundColor:'#FFF',
    //     borderWidth:1,
    //     borderColor:'#e6e6f0',
    //     borderRadius:8,
    //     marginBottom:16,
    //     overflow:'hidden'
    // },
    // profile:{
    //     flexDirection:'row',
    //     alignItems:'center',
    //     padding:24,
    // },
    // avatar:{
    //     width:220,
    //     height:204,
    //     // borderRadius:32,
    //     backgroundColor:'#eee',
    //     resizeMode:'cover'
    // },
    // profileInfo:{
    //     marginLeft:16, 
    // },
    // nome:{
    //     fontFamily:'Archivo_700Bold',
    //     color:'#32264d',
    //     fontSize:20,
    // },
    // descricao:{
    //     fontFamily:'AmaticSC_400Regular',
    //     color:'#6a6180',
    //     fontSize:12,
    //     marginTop:4,
    // },
    // desc:{
    //     marginHorizontal:24,
    //     fontFamily:'CutiveMono_400Regular',
    //     fontSize:14,
    //     lineHeight: 24,
    //     color:'#6a6180',
    // },
    // footer:{
    //     backgroundColor:'#fafafc',
    //     padding:24,
    //     alignItems:'center',
    // },
    // price:{
    //     fontFamily:'Archivo_400Regular',
    //     color:'#6a6180',
    //     fontSize:14,
    // },
    // priceValue:{
    //     fontFamily:'Archivo_700Bold',
    //     color:'#6336a2',
    //     fontSize:16
    // },
    // buttonsContainer:{
    //     flexDirection:'row',
    //     marginTop:16,
    // },
    // favoritesButton:{
    //     backgroundColor:'#0276f2',
    //     flex:1,
    //     height:56,
    //     borderRadius:39,
    //     justifyContent:'center',
    //     alignItems:'center',
    //     marginRight:8,
    // },
    // buttonText:{
    //     color:'#FFF',
    //     fontFamily:'Archivo_700Bold',
    //     fontSize:18,
        
    // },

    // curvas
    // ccontainer: {
    //     flex: 1,
    //     backgroundColor: '#845EC2'
    //   },
    //   headerContainer: {
    //     marginTop: 50,
    //     marginHorizontal: 10
    //   },
    //   headerText: {
    //     fontSize: 30,
    //     fontWeight: 'bold',
    //     color: '#333',
    //     textAlign: 'center',
    //     marginTop: 35
    //   },
    //   svgCurve: {
    //     position: 'absolute',
    //     width: Dimensions.get('window').width
    //   },

})

export default styles;