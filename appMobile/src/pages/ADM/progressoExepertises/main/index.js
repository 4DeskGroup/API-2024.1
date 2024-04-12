import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ProgressBarAndroid,
  Image,
  ScrollView,
} from 'react-native';
import styles from './style';

export default function Main() {
  const [lista, setLista] = useState([
    {id: 1, nome: 'Cloud Service Track', progress: 50},
    {id: 2, nome: 'License & Hardware Track', progress: 10},
    {id: 3, nome: 'Cloud Sell Track', progress: 20},
  ]);

  return (
    <View style={styles.redBackground}>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Confira o desenvolvimento de suas Expertises:
        </Text>
        <View style={styles.containerMain}>
        {lista.map(item => (
          <TouchableOpacity key={item.id} >
            <View style={styles.buttonContainerExpertise}>
              <View style={styles.buttonImageText}>
                <View style={styles.buttonContainerTexts}>
                  <Text style={styles.buttonTitleText}>{item.nome}</Text>
                  <Text style={styles.buttonSubtitleText}>
                    {item.progress}% da trilha concluídos
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
                  progress={item.progress / 100}
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
