import React, { useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import * as Animatable from 'react-native-animatable';
import Logo from "../../../LOGIN/components/logo";
import Title from "../components/title";
import styles from './style';
import navigate from "../../../../../RootNavigation";

export default function CadastroStep1() {
    const [companyID, setCompanyID] = useState('');
    const [nome, setNome] = useState('');
    const [pais, setPais] = useState('');
    const [cidade, setCidade] = useState('');
    const [endereco, setEndereco] = useState('');

    const continuarStep = () => {
        if (companyID.trim() === '' || nome.trim() === '' || pais.trim() === '' || cidade.trim() === '' || endereco.trim() === '') {
            Alert.alert(
                'Campos vazios',
                'Por favor, preencha todos os campos antes de continuar.'
            );
            return;
        }

        const dadosStep1 = {
            CompanyID: companyID,
            Nome: nome,
            Pais: pais,
            Cidade: cidade,
            Endereco: endereco
        };

        navigate('CadastroStep2', dadosStep1)
    };

    return (
        <KeyboardAvoidingView style={styles.background} behavior="padding">
            <ScrollView contentContainerStyle={styles.container}>
                {/* <Animatable.View animation="slideInDown" style={styles.containerP}>
                    <Text style={styles.headerText}>Registre um parceiro</Text>
                    <Text style={styles.headerText2}>Cadastre um parceiro e acompanhe suas expertises</Text>
                </Animatable.View> */}
                <Title />
                <Animatable.View animation="slideInDown" style={styles.formContainer}>
                    <Text style={styles.title}>ID da companhia</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="ID da empresa"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setCompanyID(text)}
                    />
                    <Text style={styles.title}>Nome da companhia</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome da empresa"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setNome(text)}
                    />
                    <Text style={styles.title}>País</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="País da empresa"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setPais(text)}
                    />
                    <Text style={styles.title}>Cidade</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Cidade da empresa"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setCidade(text)}
                    />
                    <Text style={styles.title}>Endereço</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Endereço da empresa"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setEndereco(text)}
                    />

                    <TouchableOpacity style={styles.button} onPress={continuarStep}>
                        <Text style={styles.buttonText}>CONTINUAR</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ScrollView>
            {/* <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="slideInDown"
                    source={require('../img/oracle.png')}
                    style={styles.logo} />
            </View> */}
            <Logo />
        </KeyboardAvoidingView>
    );
}
