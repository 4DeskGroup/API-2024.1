import React from "react";
import { Image, KeyboardAvoidingView, TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";
import * as Animatable from 'react-native-animatable';
import navigate from "../../../RootNavigation";

const screenWidth = Dimensions.get('window').width;

export default function Welcome() {
    function irPara() {
        navigate('Login')
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Animatable.View animation="slideInDown" style={styles.logoContainer}>
                <Image
                    source={require('./img/oracle-logo.png')}
                    style={styles.logo}
                />
            </Animatable.View>

            <Animatable.View animation="slideInDown" style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => irPara()}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </Animatable.View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: '30%',
    },
    logo: {
        width: 200,
        height: 150,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: '60%',
    },
    button: {
        backgroundColor: '#C61900',
        width: screenWidth * 0.7, // Definindo a largura em relação à largura da tela
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
