import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function Title() {
    return (
        <View>
            <View style={styles.boxTitle}>
                <Text style={styles.textTitleOla}>Relatórios</Text>
                <Text style={styles.textTitleOla}>!</Text>
            </View>
            <View style={styles.boxSubTitle}>
                <Text style={styles.textSubTitle}>Visualizar relatórios do sistema</Text>
            </View>
        </View >
    );
}