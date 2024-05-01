import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ProgressBarAndroid,
  Image,
  ScrollView,
} from 'react-native';
import styles from './style';
import axios from '../../../../Axios/axiosInstancia';
import navigate from '../../../../../RootNavigation';

function formatPorcentagem(string){
  const valor = string.replace('%', '')
  return parseFloat(valor)
}


export default function Main(params) {
  const [lista, setLista] = useState([])

  const GETInicio = async (idParceiro) => {
    try {
      const response = await axios.get(`/GETExpertisesPorcentagem/${idParceiro}`);

      if (response.data) {
        setLista(response.data.ExpertisePorcentagem);
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };


  useEffect(() => {
    GETInicio(params.params)
  }, [])

  return (
    <View style={styles.redBackground}>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Confira o desenvolvimento de suas Tracks:
        </Text>
        <View style={styles.containerMain}>
        {lista.map(item => (
          <TouchableOpacity key={item.idExpertise} 
           onPress={() => {
            navigate('ExpertiseCursoParceiro',{IdParceiro:params.params, IdExpertise:item.idExpertise})
            }}>
            <View style={styles.buttonContainerExpertise}>
              <View style={styles.buttonImageText}>
                <View style={styles.buttonContainerTexts}>
                  <Text style={styles.buttonTitleText}>{item.expertise}</Text>
                  <Text style={styles.buttonSubtitleText}>
                    {item.porcentagem} da trilha concluídos
                  </Text>
                </View>
                <View>
                  <Image
                    style={styles.buttonImage}
                    source={require('./img/seta.png')}
                  />
                </View>
              </View>
              <View style={styles.progressBar}>
                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={(formatPorcentagem(item.porcentagem) / 100)}
                  color="#C84734"
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    </View>
  );
}
