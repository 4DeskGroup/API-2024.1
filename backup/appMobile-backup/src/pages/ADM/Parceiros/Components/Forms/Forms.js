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
    <ScrollView contentContainerStyle={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formText}>Lista de Parceiros:</Text>
        
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => {
            button();
          }}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonText}>
              <Text style={styles.titleButtonMenu}>Parceiro 1</Text>
            </View>
            <View style={styles.buttonImage}>
              <Image
                style={styles.icon}
                source={require('./Images/seta.png')}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => {
            button();
          }}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonText}>
              <Text style={styles.titleButtonMenu}>Parceiro 1</Text>
            </View>
            <View style={styles.buttonImage}>
              <Image
                style={styles.icon}
                source={require('./Images/seta.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => {
            button();
          }}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonText}>
              <Text style={styles.titleButtonMenu}>Parceiro 1</Text>
            </View>
            <View style={styles.buttonImage}>
              <Image
                style={styles.icon}
                source={require('./Images/seta.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => {
            button();
          }}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonText}>
              <Text style={styles.titleButtonMenu}>Parceiro 1</Text>
            </View>
            <View style={styles.buttonImage}>
              <Image
                style={styles.icon}
                source={require('./Images/seta.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
}
