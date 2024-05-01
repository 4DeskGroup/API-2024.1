import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./style";
import { ProgressCircle } from "react-native-svg-charts";

const lista = [{id:'1',expertiseNome: 'ExpertiseX', parceirosInscritos: '100', parceirosConcluiram: '50%'}, {id:'1',expertiseNome: 'ExpertiseX', parceirosInscritos: '250', parceirosConcluiram: '25%'}, {id:'1',expertiseNome: 'ExpertiseX', parceirosInscritos: '250', parceirosConcluiram: '25%'}, {id:'1',expertiseNome: 'ExpertiseX', parceirosInscritos: '250', parceirosConcluiram: '25%'}, {id:'1',expertiseNome: 'ExpertiseX', parceirosInscritos: '250', parceirosConcluiram: '25%'}, {id:'1',expertiseNome: 'ExpertiseX', parceirosInscritos: '250', parceirosConcluiram: '25%'}, {id:'1',expertiseNome: 'ExpertiseX', parceirosInscritos: '250', parceirosConcluiram: '25%'}, {id:'1',expertiseNome: 'ExpertiseX', parceirosInscritos: '250', parceirosConcluiram: '25%'}, {id:'1',expertiseNome: 'ExpertiseX', parceirosInscritos: '250', parceirosConcluiram: '25%'}, {id:'1',expertiseNome: 'ExpertiseX', parceirosInscritos: '250', parceirosConcluiram: '25%'}]
export default function Main() {
  return (
    <View style={styles.fundo}>
      <View style={styles.container}>
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
                    <Text style={styles.textTitle}>{item.expertiseNome}</Text>
                  </View>
                  <View style={styles.buttonSubTitle}>
                    <Text style={styles.textSubTitle}>
                      Parceiros que concluíram
                    </Text>
                  </View>
                  <View style={styles.buttonDescription}>
                    <Text style={styles.textDescription}>
                    {item.parceirosInscritos} parceiros inscritos
                    </Text>
                  </View>
                </View>
                <View style={styles.buttonGraph}>
                  {/* <ProgressCircle
                                style={styles.progressCircle}
                                progress={0.7}
                                progressColor={'rgb(198, 25, 0)'}
                                strokeWidth={15}
                            /> */}
                  <View style={styles.progressTextCircle}>
                    <Text style={styles.textCircle}>{item.parceirosConcluiram}</Text>
                  </View>
                </View>
              </View>
            </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
