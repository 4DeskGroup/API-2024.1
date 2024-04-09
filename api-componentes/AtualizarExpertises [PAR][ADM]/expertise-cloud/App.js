import React from 'react';
import Title from './src/components/expertise-cloud/Title';
import Main from './src/components/expertise-cloud/Main';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Return from './src/components/expertise-cloud/Return';
import Navbar from './src/components/navbar';

export default function App(){
  return(
    <View style = {styles.body}>
      <Return/>
      <Title/>
      <Main/>
      <Navbar/>
    </View>
  );
}

const styles = StyleSheet.create({
body: {
  flex:1, 
  backgroundColor: '#C84734',
}

})