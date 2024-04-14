import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import Main from './components/Main/Forms';
import NavbarHome from '../../../components/navbar/Home';

export default function Home(){
  return(
    <View style = {styles.body}>
      <Title/>
      <Main/>
      <NavbarHome/>
    </View>
  );
}

const styles = StyleSheet.create({
body: {
  flex:1, 
  backgroundColor: '#F3F6FF',
}

})