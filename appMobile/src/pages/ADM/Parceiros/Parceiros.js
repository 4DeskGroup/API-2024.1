import React from 'react';

import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
import Title from './Components/Title/Title';
import Forms from './Components/Forms/Forms';
import Main from './Components/Main/Main';
import Navbar from '../../../components/navbar';


export default function Parceiros(){
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