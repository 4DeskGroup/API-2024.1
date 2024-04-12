import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Return from './src/telas/progresso/return/Return/index';
import Title from './src/telas/progresso/title/index';
import Main from './src/telas/progresso/main/index';


export default function App(){
  return(
    <View style = {styles.body}>
      <Return/>
      <Title/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
body: {
  flex:1, 
  backgroundColor: '#C84734',
}

})