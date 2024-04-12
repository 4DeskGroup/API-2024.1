import React, { useState, useEffect } from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable'
import Logo from "../../../LOGIN/components/logo";
import Title from "../components/title";
import styles from './style';
// import navigate from "../RootNavigation";
// import { sessao } from "../storage/sessao";

export default function Cadastro2() {
    // const [dadosStep1, setDadosStep1] = useState(null);

    // useEffect(() => {
    //     function capturaDados() {
    //         const dados = sessao.getString('step1')
    //         setDadosStep1(dados ? JSON.parse(dados) : {})
    //     };

    //     capturaDados();
    // }, []);

    // console.log(dadosStep1);
 
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
                        onChangeText={() => { }}
                    />
                    <Text style={styles.title}>Email do Administrador OPN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email do Administrador OPN"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />
                    <Text style={styles.title}>Compliance Hold</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Compliance Hold"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />
                    <Text style={styles.title}>Credito Hold</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Credito Hold"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />
                    <Text style={styles.title}>OPN Status</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="OPN Status"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />
                    
                    <TouchableOpacity style={styles.button} onPress={() => navigate("Step 3", "Cadastro3")}>
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
