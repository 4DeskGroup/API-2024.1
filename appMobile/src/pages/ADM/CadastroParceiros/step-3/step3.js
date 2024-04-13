import React, { useEffect, useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Alert } from "react-native";
import * as Animatable from 'react-native-animatable';
import Logo from "../../../LOGIN/components/logo";
import Title from "../components/title";
import styles from './style';
import modalStyles from './modalStyles'; // Importe os estilos do modal
import Axios from '../../../../Axios/axiosInstancia'

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
                <Text style={styles.titleModal}>Selecione as opções</Text>
            </TouchableOpacity>
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
                                <Text style={modalStyles.modalText}>{option}</Text>
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
                        <Text style={styles.selectedExpertiseText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};



export default function CadastroStep3(parametros) {
    const [expertises, setExpertises] = useState([]);
    const [selectedExpertises, setSelectedExpertises] = useState([]);
    const [tipoFiliacao, setTipoFiliacao] = useState('')
    const [OPNTrack, setOPNTrack] = useState('')
    const [primeiraFiliacao, setPrimeiraFiliacao] = useState('')
    const [slogan, setSlogan] = useState('')

    const step1 = JSON.parse(parametros.route.params.Step1)
    const step2 = JSON.parse(parametros.route.params.Step2)

    console.log('step1:  ' + JSON.stringify(step1))
    console.log('step2:  ' + JSON.stringify(step2))

    const handleExpertiseSelection = (expertise) => {
        setSelectedExpertises([...selectedExpertises, expertise]);
    };

    const handleRemoveExpertise = (index) => {
        const updatedExpertises = [...selectedExpertises];
        updatedExpertises.splice(index, 1);
        setSelectedExpertises(updatedExpertises);
    };

    const GETExpertises = async () => {
        try {
            const response = await Axios.get(`/listarExpertisesNomeDesID`);

            if (response.data.Sucesso) {
                const expertisesArray = response.data.Retorno;
                console.log(expertisesArray)
                setExpertises(expertisesArray);
            }
        } catch (error) {
            console.error('Erro ao fazer a solicitação:', error);
        }
    };

    useEffect(() => {
        GETExpertises()
        console.log('expertises: ' + expertises);
    }, [])


    const cadastrarParceiro = async () => {
        if (tipoFiliacao.trim() === '' || OPNTrack.trim() === '' || primeiraFiliacao.trim() === '' || slogan.trim() === '' || selectedExpertises.length === 0) {
            Alert.alert(
                'Campos vazios',
                'Por favor, preencha todos os campos antes de continuar.'
            );
            return;
        }

        const endereco = {
            cep: 'CEP',
            logradouro: step1.Endereco,
            bairro: "Bairro",
            cidade: step1.Cidade,
            uf: "UF"
        }


        const expertisesParceiro = [
            {
                idExpertise: "660be7fc9a32d90bf2ea35fa",
                nome: "Cloud Build",
                descricao: "Cloud Build",
                cursosRealizados: []
            }
        ];

        const dadosParceiro = {
            nome: step1.Nome,
            pais: step1.Pais,
            endereco: [endereco], // Note que aqui o endereço está dentro de um array, assim como no exemplo JSON
            OPNAdminName: step2.NomeAdminOPN,
            OPNAdminEmail: step2.EmailAdminOPN,
            ComplianceHold: step2.ComplianceHolds,
            CreditHold: step2.CreditoHold,
            OPNStatus: step2.OPNStatus,
            tipoMembro: tipoFiliacao,
            OPNTrack: OPNTrack,
            primeiroMembro: primeiraFiliacao,
            slogan: slogan,
            ExpertisesParceiro: expertisesParceiro
        };

        console.log('AAAAAAAAAAAAAAAAA:  ' + JSON.stringify(dadosParceiro));

        const response = await Axios.post('/cadastrarParceiro', {
            dadosParceiro
        })

        if (response.data.Sucesso) {
            Alert.alert('Sucesso', `${response.data.msg}`)
        } else {
            Alert.alert(`${response.data.msg}`, `${response.data.erro}`)
        }
    }

    return (
        <KeyboardAvoidingView style={styles.background} behavior="padding">
            <ScrollView contentContainerStyle={styles.container}>
                <Title />
                <Animatable.View animation="slideInDown" style={styles.formContainer}>
                    <Text style={styles.title}>Tipo de filiação (membership)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Tipo de filiação (membership)"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setTipoFiliacao(text)}
                    />
                    <Text style={styles.title}>Track da OPN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Track da OPN"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setOPNTrack(text)}
                    />
                    <Text style={styles.title}>Primeira filiação (membership)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Primeira filiação (membership)"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setPrimeiraFiliacao(text)}
                    />
                    <Text style={styles.title}>Slogan</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Slogan"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setSlogan(text)}
                    />

                    <Text style={styles.title}>Expertise de interesse</Text>
                    <CustomPicker
                        options={["Cloud Build", "Cloud Shell", "Cloud Service", "Industry Healthcare", "Licence & Hardware"]}
                        // options={expertises}
                        selectedOptions={selectedExpertises}
                        onSelectOption={handleExpertiseSelection}
                        onRemoveOption={handleRemoveExpertise}
                    />
                    <TouchableOpacity style={styles.button} onPress={cadastrarParceiro}>
                        <Text style={styles.buttonText}>CONCLUIR</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ScrollView>
            <Logo />
        </KeyboardAvoidingView>
    );
}
