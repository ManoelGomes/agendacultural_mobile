import React from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import styles from './style';


export default function Descricao(props:any) {

 return (
   <View style={styles.container} >
     <ScrollView>
       <Image
       source={require('../../assets/images/triangula.png')}
       style={styles.image}
       resizeMode="cover"
       />
       <View>
         <View >
           <Text style={[styles.title, { fontSize: 30 } ]}>Feira de Ciências</Text>
         </View>
        </View>
         <View >
          <Text style={styles.textContent}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text style={styles.textList}>
            Categoria: Educação
          </Text>
          <Text style={styles.textList}>
            Data:
          </Text>
          <Text style={styles.textList}>
            Local:
          </Text>
          <Text style={styles.textList}>
            Localização:
          </Text>
          <Text style={styles.textList}>
            Telefone:
          </Text>
         </View>
         </ScrollView>
   </View>
  );
}