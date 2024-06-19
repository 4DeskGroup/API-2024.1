import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './components/title/title';
import MainStep1 from './components/main/main';

export default function Step1Parceiro({ tipoUsuario, dadosParceiroJSON }) {
    
    return (
        <View style={styles.body}>
            <Title tipoUsuario={tipoUsuario} />
            <MainStep1 tipoUsuario={tipoUsuario} dadosParceiroJSON={dadosParceiroJSON} />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#C84734',
    }
});
