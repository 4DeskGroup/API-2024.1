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

  return (
    <View style={styles.pickerContainer}>
      <TouchableOpacity onPress={() => setIsOpen(true)} style={styles.pickerButton}>
        <Text style={styles.titleModal}>+ Iniciar nova track</Text>
      </TouchableOpacity>
      <View style={styles.modalExpertise}>
        <Text style={styles.title}>Track</Text>
        <Modal
          visible={isOpen}
          animationType="slide"
          transparent={true}
        >
          <View style={modalStyles.modalContainer}>
            <View style={modalStyles.modalContent}>
              <Text style={modalStyles.modalTitle}>Selecione uma opção</Text>
              {options.map((option, index) => (
                <TouchableOpacity key={index} onPress={() => handleSelectOption(option)}>
                  <Text style={modalStyles.modalText}>{option.nome}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity onPress={() => setIsOpen(false)} style={modalStyles.modalButton}>
                <Text style={modalStyles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
          {selectedOptions.map((option, index) => (
            <TouchableOpacity key={index} onPress={() => onRemoveOption(index)} style={styles.selectedExpertise}>
              <Text style={styles.selectedExpertiseText}>{option.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
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

  const GETExpertises = async (idParceiro) => {
    try {
        const response = await axios.get(`/listarExpertisesNomeDesIDPorParceiro/${idParceiro}`);

        if (response.data.Sucesso) {
            const expertisesArray = response.data.Retorno;
            setExpertises(expertisesArray);
        }
    } catch (error) {
        console.error('Erro ao fazer a solicitação:', error);
    }
};


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
    GETExpertises(params.params)
    console.log('expertises: ' + expertises);
  }, [])

  const cadastrarExpertise = async (idParceiro) => {
    const expertisesParceiro = [];

    selectedExpertises.forEach(item => {
      var itemAdd = {
          idExpertise: item.expertiseID,
          nome: item.nome,
          descricao:item.descricao,
          cursosRealizados: []
      }
      expertisesParceiro.push(itemAdd)
  });
    try {
      const idParceiro = params.params; // Substitua pelo ID do parceiro
      const novasExpertises = expertisesParceiro; // Substitua pelos dados da nova expertise
  
      const response = await axios.post('/cadastrarExpertiseParceiro', {
        idParceiro,
        novasExpertises
      });
  
      if (response.data) {
        Alert.alert('Sucesso', `${response.data.msg}`);
        navigate('Parceiros');
      } else {
        Alert.alert(`${response.data.msg}`, `${response.data.erro}`);
      }
    } catch (error) {
      console.error('Erro ao cadastrar expertise:', error);
      Alert.alert('Erro', 'Erro ao cadastrar expertise. Verifique o console para mais detalhes.');
    }
  };

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
                // navigate('ExpertiseCursoParceiro', { IdParceiro: params.params, IdExpertise: item.idExpertise }) EXPERTISES LISTA EM CHECKBOX
                navigate('ExpertisesLista', { IdParceiro: params.params, IdExpertise: item.idExpertise }) // EXPERTISES LISTA PROGRESSO E BOTÃO
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
          
          <CustomPicker
            // options={["Cloud Build", "Cloud Shell", "Cloud Service", "Industry Healthcare", "Licence & Hardware"]}
            options={expertises}
            selectedOptions={selectedExpertises}
            onSelectOption={handleExpertiseSelection}
            onRemoveOption={handleRemoveExpertise}
          />

          <TouchableOpacity style={styles.button} onPress={cadastrarExpertise}>
            <Text style={styles.buttonText}>Concluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
