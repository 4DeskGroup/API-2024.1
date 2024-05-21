import React from 'react';
import { StyleSheet, View} from 'react-native';
import Title from './components/title/title';
import Step1Parceiro from './step-1/step1';

export default function EdicaoParceiro() {
    return (
        <View style={styles.body}>
            <Step1Parceiro/>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#C84734',
    }
});
