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
  // const [lista, setLista] = useState([
  //   {id: 1, nome: 'Cloud Service Track', progress: 50},
  //   {id: 2, nome: 'License & Hardware Track', progress: 10},
  //   {id: 3, nome: 'Cloud Sell Track', progress: 20},
  // ]);

  const GETInicio = async (idParceiro) => {
    try {
      const response = await axios.get(`/GETExpertisesPorcentagem/${idParceiro}`);

      console.log("REPONSE EXPERTISE"+ JSON.stringify(response.data));
      if (response.data) {
        setLista(response.data.ExpertisePorcentagem);
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };


  useEffect(() => {
    console.log('TELA PRINCIPAL -- idParceiro: '+ JSON.stringify(params.params));
    GETInicio(params.params)
    console.log('LISTA' + lista);
  }, [])

  return (
    <View style={styles.redBackground}>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Confira o desenvolvimento de suas Expertises:
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
                  progress={formatPorcentagem(item.porcentagem)}
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
