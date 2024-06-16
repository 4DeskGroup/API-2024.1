import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ProgressBarAndroid,
  Image,
  ScrollView,
  Modal,
  Alert
} from 'react-native';
import styles from './style';
import axios from '../../../../Axios/axiosInstancia';
import navigate from '../../../../../RootNavigation';
import modalStyles from './modalStyles';

function formatPorcentagem(string) {
  const valor = string.replace('%', '')
  return parseFloat(valor)
}

// Componente para o seletor personalizado
const CustomPicker = ({ options, selectedOptions, onSelectOption, onRemoveOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option) => {
    onSelectOption(option);
    setIsOpen(false); // Fecha o modal após selecionar um item
  };

  console.log("OPTIONS:  " + JSON.stringify(options));
};

export default function Main(params) {
  const [expertises, setExpertises] = useState([]);
  const [selectedExpertises, setSelectedExpertises] = useState([]);
  const [lista, setLista] = useState([])

  const handleExpertiseSelection = (expertise) => {
    setSelectedExpertises([...selectedExpertises, expertise]);
  };

  const handleRemoveExpertise = (index) => {
    const updatedExpertises = [...selectedExpertises];
    updatedExpertises.splice(index, 1);
    setSelectedExpertises(updatedExpertises);
  };

  const GETInicio = async (idParceiro, idExpertise) => {
    try {
      const response = await axios.get(`/GETCursosPorcentagem/${idParceiro}/${idExpertise}`);

      if (response.data && response.data.Sucesso) {
        console.log("response.data:  " + JSON.stringify(response.data));
        setLista(response.data.ExpertisePorcentagem);
      } else {
        console.error('Erro ao buscar expertise:', response.data?.Erro || 'Resposta inesperada');
      }
    } catch (error) {
      // console.error('Erro ao fazer a solicitação:', error);
    }
  };

  useEffect(() => {
    console.log("INICIO TELAAAAAAA:     " + JSON.stringify(params.params.IdParceiro));
    GETInicio(params.params.IdParceiro, params.params.IdExpertise)
    console.log('expertises: ' + expertises);
  }, [])

  return (
    <View style={styles.redBackground}>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Confira o desenvolvimento de suas Expertises da Track X:
        </Text>
        <View style={styles.containerMain}>
          {lista.map(item => (
            <TouchableOpacity key={item.idExpertise}
              onPress={() => {
                navigate('CertificacoesCheck', { IdParceiro: params.params.IdParceiro, IdExpertise: params.params.IdExpertise, IdCurso: item.idCurso })
              }}>
              <View style={styles.buttonContainerExpertise}>
                <View style={styles.buttonImageText}>
                  <View style={styles.buttonContainerTexts}>
                    <Text style={styles.buttonTitleText}>{item.nome}</Text>
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
