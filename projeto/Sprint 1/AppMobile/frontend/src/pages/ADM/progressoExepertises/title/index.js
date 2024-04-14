import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import axios from '../../../../Axios/axiosInstancia'

export default function Title(params) {
  const [nomeParceiro, setNomeParceiro] = React.useState('')

  const GETParceiro = async (idParceiro) => {
    try {
      const response = await axios.get(`/getParceiroByID/${idParceiro}`);

      if (response.data) {
        const parceiro = response.data.Parceiro
        console.log(parceiro)
        setNomeParceiro(parceiro.nome)
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };


  React.useEffect(() => {
    GETParceiro(params.params)
  }, [])


  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitleExpertise}>Desenvolvimento do Parceiro {nomeParceiro}</Text>
      <Text style={styles.textTitleSubtitle}>Acompanhe seu progresso e sua trilha de desenvolvimento</Text>
    </View>
  );
}
