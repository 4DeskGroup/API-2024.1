import React, { useEffect, useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Alert } from "react-native";
import * as Animatable from 'react-native-animatable';
import Logo from "../../../LOGIN/components/logo";
import Title from "../components/title";
import styles from './style';
import Axios from '../../../../Axios/axiosInstancia'
import navigate from "../../../../../RootNavigation";


export default function CadastroConsultor(parametros) {
    const [nomeConsultor, setNomeConsultor] = useState('');
    const [emailConsultor, setEmailConsultor] = useState('');
    const [cpfConsultor, setCpfConsultor] = useState('');
    const [telefoneConsultor, setTelefoneConsultor] = useState('');

    const cadastrarParceiro = async () => {
        if (nomeConsultor.trim() === '' || emailConsultor.trim() === '' || cpfConsultor.trim() === '' || telefoneConsultor.trim() === '') {
            Alert.alert(
                'Campos vazios',
                'Por favor, preencha todos os campos antes de continuar.'
            );
            return;
        }

        const dadosParceiro = {
            nome: nomeConsultor,
            email: emailConsultor,
            cpf: cpfConsultor, 
            telefone: telefoneConsultor,
        };

        // const response = await Axios.post('/cadastrarParceiro', {
        //     dadosParceiro
        // })

        // if (response.data.Sucesso) {
        //     Alert.alert('Sucesso', `${response.data.msg}`)
        //     navigate('HomeADM', {TipoUsuario: 'Administrador'})
        // } else {
        //     Alert.alert(`${response.data.msg}`, `${response.data.erro}`)
        // }
    }

    return (
        <KeyboardAvoidingView style={styles.background} behavior="padding">
            <ScrollView contentContainerStyle={styles.container}>
                <Title />
                <Animatable.View animation="slideInDown" style={styles.formContainer}>
                    <Text style={styles.title}>Nome do Consultor</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira nome do consultor"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={"" }
                    />
                    <Text style={styles.title}>Email do Consultor</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira o Email do Consultor"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={""}
                    />
                    <Text style={styles.title}>CPF do Consultor</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira o CPF do consultor"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={ ""}
                    />
                    <Text style={styles.title}>Telefone</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira Telefone do Consultor"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={"" }
                    />

                    <TouchableOpacity style={styles.button} onPress={cadastrarParceiro}>
                        <Text style={styles.buttonText}>CADASTRAR</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ScrollView>
            <Logo />
        </KeyboardAvoidingView>
    );
}
