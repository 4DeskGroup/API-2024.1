import React from 'react';

import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import Title from './components/Title/Title';
import Main from './components/Main/Main';
import NavbarHome from './components/navbar/Home';

export default function HomeADM({ route }) {
  return (
    <View style={styles.body}>
      <ScrollView>
        <Title params={route.params.TipoUsuario} />
        <Main params={route.params.TipoUsuario} />
      </ScrollView>
      <NavbarHome />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#C84734',
  }

})