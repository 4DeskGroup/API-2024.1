import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Navbar from './src/components/Navbar';
import Title from './components/Title';
import Main from './components/Main';

export default function Home(){
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