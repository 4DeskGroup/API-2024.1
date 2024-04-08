import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from './style';
export default function Forms() {
  function button() {
    const a = 'oi';
    return a;
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formText}>Acesse uma opção:</Text>
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => {
            button();
          }}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonImage}>
              <Image
                style={styles.icon}
                source={require('./Images/icon3.png')}
              />
            </View>
            <View style={styles.buttonText}>
              <Text style={styles.titleButtonMenu}>Parceiros</Text>
              <Text style={styles.subtitleButtonMenu}>
                Crie um registro para nova empresa parceira
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => {
            button();
          }}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonImage}>
              <Image
                style={styles.icon}
                source={require('./Images/icon2.png')}
              />
            </View>
            <View style={styles.buttonText}>
              <Text style={styles.titleButtonMenu}>Dashboards</Text>
              <Text style={styles.subtitleButtonMenu}>
                Crie um registro para nova empresa parceira
              </Text>
            </View>
          </View>
        </TouchableOpacity>
       
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => {
            button();
          }}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonImage}>
              <Image
                style={styles.icon}
                source={require('./Images/icon4.png')}
              />
            </View>
            <View style={styles.buttonText}>
              <Text style={styles.titleButtonMenu}>Relatórios</Text>
              <Text style={styles.subtitleButtonMenu}>
                Crie um registro para nova empresa parceira
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
