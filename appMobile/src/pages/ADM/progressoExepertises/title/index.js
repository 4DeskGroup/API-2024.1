import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitleExpertise}>Desenvolvimento do Parceiro X</Text>
      <Text style={styles.textTitleSubtitle}>Acompanhe seu progresso e sua trilha de desenvolvimento</Text>
    </View>
  );
}
