import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default function Title(params) {
  const tipoUsuario = params.params
  
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitleOla}>Olá, bem-vindo</Text>
      <Text style={styles.textTitleOla}>!</Text>
    </View>
  );
}
