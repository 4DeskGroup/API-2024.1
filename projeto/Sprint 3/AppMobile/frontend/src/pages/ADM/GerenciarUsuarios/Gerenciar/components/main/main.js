import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from "./style";
import navigate from '../../../../../../../RootNavigation';


export default function Main() {

    return (
        <View style={styles.whiteBackground}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { navigate('HomeADM') }}>
                    <Image
                        style={styles.arrow}
                        source={require('../../img/arrow.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Usuários</Text>
            </View>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.campo1} onPress={() => navigate('ListaParceiros')}>
                    <Text style={styles.texto1}>Gerenciar Parceiros</Text>
                    <Text style={styles.texto2}>Excluir ou editar informações de parceiros</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.campo2} onPress={() => navigate('ListaConsultores')}>
                    <Text style={styles.texto1}>Gerenciar Consultores de Alianças</Text>
                    <Text style={styles.texto2}>Excluir ou editar informações de consultores de alianças</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

