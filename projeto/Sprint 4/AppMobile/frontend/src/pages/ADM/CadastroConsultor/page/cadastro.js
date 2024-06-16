import React, { useEffect, useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Alert } from "react-native";
import * as Animatable from 'react-native-animatable';
import Logo from "../../../LOGIN/components/logo";
import Title from "../components/title";
import styles from './style';
import Axios from '../../../../Axios/axiosInstancia'
import navigate from "../../../../../RootNavigation";


export default function CadastroConsultor() {
    const [nomeConsultor, setNomeConsultor] = useState('');
    const [emailConsultor, setEmailConsultor] = useState('');
    const [senhaConsultor, setSenhaConsultor] = useState('');
    const [cpfConsultor, setCpfConsultor] = useState('');
    const [telefoneConsultor, setTelefoneConsultor] = useState('');

    const limpaCampos = () => {
        setNomeConsultor('')
        setEmailConsultor('')
        setSenhaConsultor('')
        setCpfConsultor('')
        setTelefoneConsultor('')
    }

    const cadastrarConsultor = async () => {
        if (nomeConsultor.trim() === '' || emailConsultor.trim() === '' || cpfConsultor.trim() === '' || telefoneConsultor.trim() === '' || senhaConsultor.trim() === '') {
            Alert.alert(
                'Campos vazios',
                'Por favor, preencha todos os campos antes de continuar.'
            );
            return;
        }

        const dadosUsuario = {
            nome: nomeConsultor,
            email: emailConsultor,
            senha: senhaConsultor,
            cpf: cpfConsultor, 
            telefone: telefoneConsultor,
            tipoUsuario: 'ConsultorAlianca'
        };
        console.log("MONTADO EM TELA: " + JSON.stringify(dadosUsuario));
        const response = await Axios.post('/cadastrarUsuario', {
            dadosUsuario
        })
        
        if (response.data.Sucesso) {
            Alert.alert('Sucesso', `${response.data.msg}`)
            
            // navigate('HomeADM', {TipoUsuario: 'Administrador'})
        } else {
            Alert.alert(`${response.data.msg}`, `${response.data.erro}`)
        }
    }

    return (
        <KeyboardAvoidingView style={styles.background} behavior="padding">
            <ScrollView contentContainerStyle={styles.container}>
                <Title />
                <Animatable.View animation="slideInDown" style={styles.formContainer}>
                    <Text style={styles.title}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira nome do consultor"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setNomeConsultor(text)}
                    />
                    <Text style={styles.title}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira o Email do Consultor"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setEmailConsultor(text)}
                    />
                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira nome do consultor"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setSenhaConsultor(text)}
                    />
                    <Text style={styles.title}>CPF</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira o CPF do consultor"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setCpfConsultor(text)}
                    />
                    <Text style={styles.title}>Telefone</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira Telefone do Consultor"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setTelefoneConsultor(text)}
                    />

                    <TouchableOpacity style={styles.button} onPress={cadastrarConsultor}>
                        <Text style={styles.buttonText}>CADASTRAR</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ScrollView>
            <Logo />
        </KeyboardAvoidingView>
    );
}
