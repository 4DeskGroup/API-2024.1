import React from 'react';

import {Animated, StyleSheet, Text, View} from 'react-native';
import Title from './components/Title';
import Main from './components/Main';
import Navbar from '../../../components/navbar';

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
  backgroundColor: '#C84734',
}

})