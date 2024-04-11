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
import navigate from '../../../../../../RootNavigation';

export default function Forms() {
  function button() {
    navigate('ExpertiseCursoParceiro')
  }

  return (
    <ScrollView contentContainerStyle={styles.formContext}>
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
                source={require('./Images/icon1.png')}
              />
            </View>
            <View style={styles.buttonText}>
              <Text style={styles.titleButtonMenu}>Registrar parceiro</Text>
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
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => {
            button();
          }}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonImage}>
              <Image
                style={styles.icon}
                source={require('./Images/icon5.png')}
              />
            </View>
            <View style={styles.buttonText}>
              <Text style={styles.titleButtonMenu}>Gerenciar usuários</Text>
              <Text style={styles.subtitleButtonMenu}>
                Crie um registro para nova empresa parceira
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
