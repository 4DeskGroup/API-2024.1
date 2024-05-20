import React from "react";
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import Logo from "./components/logo";

export default function RecuperarSenha() {
    return (
        <KeyboardAvoidingView style={styles.background} behavior="padding">
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Animatable.View animation="slideInDown" style={styles.containerP}>
                    <Text style={styles.headerText}>Esqueceu sua senha?</Text>
                    <Text style={styles.headerText2}>Digite seu e-mail para redefinir sua senha</Text>
                </Animatable.View>
                <Animatable.View animation="slideInDown" style={styles.container}>
                    <Text style={styles.title}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu e-mail"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>CONTINUAR</Text>
                    </TouchableOpacity>
                </Animatable.View>
                {/* <Animatable.View animation="slideInDown" style={styles.containerLogo}>
                    <Image source={require('./img/oracle.png')} style={styles.logo} />
                </Animatable.View> */}
            </ScrollView>
            <Logo/>
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
        fontFamily: 'Verdana',
        fontStyle: 'italic',
    },
    arrow: {
        width: 20,
        height: 20,
        marginBottom: '5%',
    },
});
