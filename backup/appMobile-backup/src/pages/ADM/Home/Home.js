import React from 'react';

import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
import Title from './components/Title/Title';
import Main from './components/Main/Main';
import Navbar from '../../../components/navbar';

export default function Home(){
  return(
    <View style = {styles.body}>

      <ScrollView>
      <Title/>
      <Main/>
      </ScrollView>

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