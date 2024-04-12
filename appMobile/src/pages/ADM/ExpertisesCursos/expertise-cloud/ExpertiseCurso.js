import React from 'react';
import Title from './Title/index';
import Main from './Main/index';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Return from './Return/index';

export default function ExpertiseCurso({route}){
  return(
    <View style = {styles.body}>
      <Return/>
      <Title/>
      <Main params={route.params} />
    </View>
  );
}

const styles = StyleSheet.create({
body: {
  flex:1, 
  backgroundColor: '#C84734',
}

})