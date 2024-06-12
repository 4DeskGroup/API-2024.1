import React from "react";
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';

export default function Title() {
    return (
        <Animatable.View animation="slideInDown" style={styles.containerP}>
            <Text style={styles.headerText}>Registre um Consultor</Text>
            <Text style={styles.headerText2}>Cadastre um Consultor</Text>
        </Animatable.View>
    );
}

const styles = StyleSheet.create({
    containerP: {
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginBottom: '10%',
    },
    headerText: {
        fontSize: 25,
        color: 'black',
    },
    headerText2: {
        fontSize: 18,
        color: '#8A8585',
    },
});
