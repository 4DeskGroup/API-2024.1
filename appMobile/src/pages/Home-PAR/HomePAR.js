import React from 'react';
import Title from './components/Title/index';
import Main from './components/Main/index';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App(){
  return(
    <View style = {styles.body}>
      <Title/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
body: {
  flex:1, 
  backgroundColor: '#F3F6FF',
}

})