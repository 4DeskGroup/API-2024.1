import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Navbar from './src/components/Navbar';
import Title from './components/Title/Title';
import Main from './components/Main/Forms';

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