import React from 'react';
import Title from './Title/index';
import Main from './Main/index';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Return from './Return/index';

export default function ExpertiseCurso(){
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