import React, { useEffect, useState } from 'react';
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
import axios from '../../../../../Axios/axiosInstancia';

export default function Forms() {
  const [lista, setLista] = useState([]);

  const GETInicio = async () => {
    try {
      const response = await axios.get(`/GETParceirosNomeId`, {
      });
      console.log(JSON.stringify(response.data));
      if (response.data) {
        console.log('response.data.Parceiros:  '+ JSON.stringify(response.data.Parceiros));
        setLista(response.data.Parceiros);
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };

  useEffect(() => {
    GETInicio()
    console.log('LISTA' + lista);
  }, [])

  function button(nome) {
    console.log('LISTA BOTAO: '+ nome);
  }

  return (
    <ScrollView contentContainerStyle={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formText}>Lista de Parceiros:</Text>

        {lista.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.buttonMenu}
            onPress={() => {
              button(item.parceiroNome);
            }}>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonText}>
                <Text style={styles.titleButtonMenu}>{item.parceiroNome}</Text>
              </View>
              <View style={styles.buttonImage}>
                <Image
                  style={styles.icon}
                  source={require('./Images/seta.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
        
      </View>
    </ScrollView>
  );
}
