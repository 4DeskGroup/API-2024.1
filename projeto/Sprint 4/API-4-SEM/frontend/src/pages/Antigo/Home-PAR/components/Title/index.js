import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitleOla}>Olá, </Text>
      <Text style={styles.textTitleUser}>Consultor</Text>
      <Text style={styles.textTitleOla}>!</Text>
    </View>
  );
}
