import React from 'react';
import Title from './Title/index';
import Main from './Main/index';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Return from './Return/index';
import NavbarUsers from '../../../Home/components/navbar/Users';
import MenuUsers from '../../../../../components/menu/Users/main';

export default function ExpertiseCurso({route}){
  return(
    <View style = {styles.body}>
      <Return/>
      <Title params={route.params}/>
      <Main params={route.params} />
      <MenuUsers/>
    </View>
  );
}

const styles = StyleSheet.create({
body: {
  flex:1, 
  backgroundColor: '#C84734',
}

})