import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
// import CheckBox from '@react-native-community/checkbox';
import Checkbox from 'expo-checkbox';
import axios from '../../../../../Axios/axiosInstancia';

export default function Forms(params) {
  const [lista, setLista] = useState([]);

  const GETInicio = async (idParceiro, idExpertise) => {
    try {
      const response = await axios.post(`/GETCursoExpertisesParceiro`, {
        IdParceiro: idParceiro,
        IdExpertise: idExpertise
      });

      if (response.data) {
        setLista(response.data.parceiroExpertiseCursos);
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };

  useEffect(() => {
    GETInicio(params.params.IdParceiro, params.params.IdExpertise)
  }, [])


  function toggleCheckBox(index) {
    const newLista = [...lista];
    newLista[index].isCursoFeito = !newLista[index].isCursoFeito;
    setLista(newLista);
  }

  const AtualizarCursos = async (IdParceiro, lista) => {
    try {
      const response = await axios.post(`/atualizarCursosParceiroPorIsCursoFeito`, {
        lista: lista,
        IdParceiro: IdParceiro
      });

      if (response.data) {
        console.log(response.data.Sucesso);
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };

  function button() {
    AtualizarCursos(params.params.IdParceiro, lista)
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formText}>
          Certificações da expertise que foram concluídas até o
          momento: 
        </Text>
      </View>
      <View>
      {lista.map((item, index) => (
         <TouchableOpacity
         key={index}
         style={styles.expertisesContainer}
         onPress={() => toggleCheckBox(index)}>
         <Checkbox
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
          button();
        }}>
        <View style={styles.buttonText}>
          <Text style={styles.titleButtonMenu}>Salvar</Text>
        </View>
      </TouchableOpacity>
    </View>

      
  );
}


