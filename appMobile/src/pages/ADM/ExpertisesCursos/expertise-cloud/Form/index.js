import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import CheckBox from '@react-native-community/checkbox';
import Axios from 'axios';

export default function Forms() {
  const [lista, setLista] = useState([]);

  const GETInicio = async (idParceiro, idExpertise) => {
    try {
      const response = await Axios.post(`http://192.168.15.24:3001/GETCursoExpertisesParceiro`, {
        idParceiro: idParceiro,
        idExpertise: idExpertise
      });

      console.log('RESPONSE: ', response.data);

      if (response.data) {
        setLista(response.data.parceiroExpertiseCursos);
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };

  useEffect(() => {
    GETInicio('660d52c06df6478154f70361', '660c1e18cfc3b2d71c3c9cfd')

    console.log('LISTA' + lista);

  }, [])


  function toggleCheckBox(index) {
    const newLista = [...lista];
    newLista[index].isCursoFeito = !newLista[index].isCursoFeito;
    setLista(newLista);
  }

  function button() {
    console.log(lista);
  }
  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formText}>
          Certificações da expertise Cloud Sell que foram concluídas até o
          momento:
        </Text>
      </View>
      <View>
      {lista.map((item, index) => (
         <TouchableOpacity
         key={index}
         style={styles.expertisesContainer}
         onPress={() => toggleCheckBox(index)}>
         <CheckBox
           value={item.isCursoFeito}
           onValueChange={() => toggleCheckBox(index)}
         />
         <Text style={styles.titleMenu}>{item.cursoNome}</Text>
       </TouchableOpacity>
      ))}
      </View>

      <TouchableOpacity
        style={styles.buttonMenu}
        onPress={() => {
          console.log("oI")
          button();
        }}>
        <View style={styles.buttonText}>
          <Text style={styles.titleButtonMenu}>Salvar</Text>
        </View>
      </TouchableOpacity>
    </View>

      
  );
}


