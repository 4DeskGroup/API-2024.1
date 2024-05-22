import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Return from './return/Return/index';
import Title from './title/index';
import Main from './main/index';
import NavbarUsers from '../Home/components/navbar/Users';


export default function ExpertisesLista({route}){
console.log('route.params.IdParceiro:  '+ JSON.stringify(route.params.IdParceiro));
  return(
    <View style = {styles.body}>
      <Return/>
      <Title params={route.params.IdParceiro}/>
      <Main params={route.params.IdParceiro}/>
      <NavbarUsers/>
    </View>
  );
}

const styles = StyleSheet.create({
body: {
  flex:1, 
  backgroundColor: '#C84734',
}

})