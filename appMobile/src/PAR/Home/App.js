import React from 'react';
import Title from './src/components/Title';
import Main from './src/components/Main';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Navbar from './src/components/Navbar';

export default function App(){
  return(
    <View style = {styles.body}>
      <Title/>
      <Main/>
      <Navbar/>
    </View>
  );
}

const styles = StyleSheet.create({
body: {
  flex:1, 
  backgroundColor: '#F3F6FF',
}

})