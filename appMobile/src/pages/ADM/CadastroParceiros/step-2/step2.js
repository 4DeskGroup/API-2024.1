import React, { useState, useEffect } from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import * as Animatable from 'react-native-animatable'
import Logo from "../../../LOGIN/components/logo";
import Title from "../components/title";
import styles from './style';
import navigate from "../../../../../RootNavigation";

export default function CadastroStep2(parametros) {
    const [nomeAdminOPN, setNomeAdminOPN] = useState('');
    const [emailAdminOPN, setEmailAdminOPN] = useState('');
    const [complianceHold, setComplianceHold] = useState('');
    const [creditoHold, setCreditoHold] = useState('');
    const [OPNStatus, setOPNStatus] = useState('');
    
    const step1 = parametros.route.params
    console.log(step1)
    
    const continuarStep = () => {
        if (nomeAdminOPN.trim() === '' || emailAdminOPN.trim() === '' || complianceHold.trim() === '' || creditoHold.trim() === '' || OPNStatus.trim() === '') {
            Alert.alert(
                'Campos vazios',
                'Por favor, preencha todos os campos antes de continuar.'
            );
            return;
        }

        const dadosStep2 = {
            NomeAdminOPN: nomeAdminOPN,
            EmailAdminOPN: emailAdminOPN,
            ComplianceHolds: complianceHold,
            CreditoHold: creditoHold,
            OPNStatus: OPNStatus
        };
        
        const steps = {Step1: JSON.stringify(step1), Step2: JSON.stringify(dadosStep2)}
        navigate('CadastroStep3', steps)
    };

    return (
        <KeyboardAvoidingView style={styles.background} behavior="padding">
            <ScrollView contentContainerStyle={styles.container}>
                {/* <Animatable.View animation="slideInDown" style={styles.containerP}>
                    <TouchableOpacity>
                        <Image 
                        style={styles.arrow} 
                        source={require('../img/arrow.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Registre um parceiro</Text>
                    <Text style={styles.headerText2}>Cadastre um parceiro e acompanhe suas expertises</Text>
                </Animatable.View> */}
                <Title/>
                <Animatable.View animation="slideInDown" style={styles.formContainer}>
                    <Text style={styles.title}>Nome do Administrador OPN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do Administrador OPN"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setNomeAdminOPN(text)}
                    />
                    <Text style={styles.title}>Email do Administrador OPN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email do Administrador OPN"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setEmailAdminOPN(text)}
                    />
                    <Text style={styles.title}>Compliance Hold</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Compliance Hold"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setComplianceHold(text)}
                    />
                    <Text style={styles.title}>Credito Hold</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Credito Hold"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setCreditoHold(text)}
                    />
                    <Text style={styles.title}>OPN Status</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="OPN Status"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setOPNStatus(text)}
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
            <Logo/>
        </KeyboardAvoidingView>
    );
}
