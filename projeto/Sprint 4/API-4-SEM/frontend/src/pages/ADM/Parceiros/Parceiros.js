import React from 'react';

import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import Title from './Components/Title/Title';
import Main from './Components/Main/Main';
import MenuUsers from '../../../components/menu/Users/main';


export default function Parceiros() {
  return (
    <View style={styles.body}>
      <Title />
      <Main />
      <MenuUsers />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#C84734',
  }

})