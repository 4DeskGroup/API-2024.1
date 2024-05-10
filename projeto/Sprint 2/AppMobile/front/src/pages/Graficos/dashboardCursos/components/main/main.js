import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./style";
import { ProgressCircle } from "react-native-svg-charts";
import navigate from '../../../../../../RootNavigation';
import axios from '../../../../../Axios/axiosInstancia';

export default function Main(params) {
  const [lista, setLista] = useState([]);

  const GETExpertises = async (idExpertise) => {
    try {
      const response = await axios.get(`/GetExpertiseCursosByID/${idExpertise}`, {
      });
      if (response.data) {
        setLista(response.data.ExpertiseCursos);
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };

  useEffect(() => {
    GETExpertises(params.params.IdExpertise)
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Expertises em desenvolvimento da Track X:
        </Text>
        {lista.map((item, index) => (
          <View style={styles.buttonMenu} key={index}>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonText}>

                <View style={styles.buttonTitle}>
                  <Text style={styles.textTitle}>{item.nomeCurso}</Text>
                </View>

                <View style={styles.buttonSubTitle}>
                  <Text style={styles.textSubTitle}>
                    Parceiros que concluíram
                  </Text>
                </View>

                <View style={styles.buttonDescription}>
                  <View style={styles.buttonImage}>
                    <Image style={styles.book} source={require('../../img/book.png')} />
                    <Text style={styles.textDescription}>
                      {item.quantidadeParceirosConcluiu} parceiros que concluíram
                    </Text>
                  </View>
                </View>
                </View>

                <View style={styles.buttonGraph}>
                  <ProgressCircle
                    style={styles.progressCircle}
                    progress={item.percentualConclusao / 100}
                    progressColor={'rgb(198, 25, 0)'}
                    strokeWidth={15}
                  />
                  <View style={styles.progressTextCircle}>
                    <Text style={styles.textCircle}>{Math.round(item.percentualConclusao)}%</Text>
                  </View>
                </View>
              </View>
            </View>
        ))}
          </View>
    </ScrollView>
  );
}
