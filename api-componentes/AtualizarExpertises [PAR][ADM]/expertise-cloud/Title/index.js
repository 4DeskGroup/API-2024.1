import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitleExpertise}>Cloud Build Track</Text>
      <Text style={styles.textTitleSubtitle}>Acompanhe o progresso do PARCEIRO X na trilha de desenvolvimento de Cloud Build Track</Text>
    </View>
  );
}
