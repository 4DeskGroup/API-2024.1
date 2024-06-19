import React from 'react';
import { StyleSheet, View} from 'react-native';
import Title from './components/title/title';
import Step1Parceiro from './step-1/step1';

export default function EdicaoParceiro({ route }) {
    const { TipoUsuario, ParceiroJSON } = route.params;
    
    return (
        <View style={styles.body}>
            <Step1Parceiro tipoUsuario={TipoUsuario} dadosParceiroJSON={ParceiroJSON}/>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#C84734',
    }
});
