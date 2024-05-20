import React, { useState } from "react";
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import Logo from "./components/logo";
import Axios from '../../Axios/axiosInstancia'
import navigate from "../../../RootNavigation";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const acessarSistema = async () => {
        if (email.trim() === '' || senha.trim() === '') {
            Alert.alert(
                'Campos vazios',
                'Por favor, preencha todos os campos antes de continuar.'
            );
            return;
        }

        const response = await Axios.post('/login', {
            email: email,
            senha: senha
        });

        if (response.data.Sucesso) {
            const usuarioEncontrado = response.data.Usuario;
            let tipoUsuario = usuarioEncontrado.tipoUsuario

            if (tipoUsuario === 'Administrador') {
                navigate('HomeADM')
            } else if (tipoUsuario === 'ConsultorAlianca') {
                navigate('Parceiros')
            }

        } else {
            Alert.alert(
                'Falha na tentativa de login',
                `${response.data.msg}`
            );
        }
    };

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    return (
        <KeyboardAvoidingView style={styles.background} behavior="padding">
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Animatable.View animation="slideInDown" style={styles.containerP}>
                    <Text style={styles.headerText}>Bem-Vindo de volta!</Text>
                    <Text style={styles.headerText2}>Entre na sua conta</Text>
                </Animatable.View>
                <Animatable.View animation="slideInDown" style={styles.container}>
                    <Text style={styles.title}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu e-mail"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setEmail(text)}
                    />
                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Sua senha"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setSenha(text)}
                        secureTextEntry={!mostrarSenha}
                    />
                    <TouchableOpacity onPress={toggleMostrarSenha} style={styles.eyeIcon}>
                        <Text style={styles.eyeIconText}>{mostrarSenha ? '🔓' : '🔒'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={acessarSistema}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </Animatable.View>
                {/* <Animatable.View animation="slideInDown"style={styles.containerLogo}>
                <Image source={require('./img/oracle.png')} style={styles.logo} />
            </Animatable.View> */}
            </ScrollView>
            <Logo />
        </KeyboardAvoidingView>


    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '60%',
    },
    containerP: {
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginTop: '20%',
        marginBottom: '10%',
    },
    headerText: {
        fontSize: 25,
        color: 'black',
    },
    headerText2: {
        fontSize: 20,
        color: '#8A8585',
    },
    containerLogo: {
        alignSelf: 'center',
    },
    logo: {
        width: 100,
        height: 20,
        marginTop: '50%',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginBottom: '35%',
    },
    input: {
        backgroundColor: '#F5F5F5',
        width: '90%',
        marginBottom: 15,
        fontSize: 17,
        borderRadius: 10,
        padding: 10,
        color: 'black',
    },
    button: {
        backgroundColor: '#C61900',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    textSenha: {
        marginTop: 10,
        flexDirection: 'row',
        marginLeft: 25,
        alignItems: 'center',
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },
    linkText: {
        color: '#C61900',
    },
    title: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'flex-start',
        marginLeft: 25,
        // fontFamily: 'Verdana',
        fontStyle: 'italic',
    },
    arrow: {
        width: 20,
        height: 20,
        marginBottom: '5%',
    },
    eyeIcon: {
        position: 'absolute',
        right: 35,
        top: 130 
    },
    eyeIconText: {
        fontSize: 20, // Ajuste o tamanho do emoji conforme necessário
    }
});
