import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function Title(params) {
    const tipoUsuario = params.params

    return (
        <View>
            <View style={styles.boxTitle}>
                <Text style={styles.textTitleOla}>Gerenciar Usuários</Text>
                <Text style={styles.textTitleOla}>!</Text>
            </View>
            <View style={styles.boxSubTitle}>
                <Text style={styles.textSubTitle}>Cadastre ou gerencie usuários do sistema.</Text>
            </View>
        </View >
    );
}