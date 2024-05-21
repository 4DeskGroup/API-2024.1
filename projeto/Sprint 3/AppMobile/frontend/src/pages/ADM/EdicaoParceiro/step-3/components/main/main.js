import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from './style';
import navigate from '../../../../../../../RootNavigation';


export default function Main() {
    return (
        
        <ScrollView style={styles.whiteBackground}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { navigate('EdicaoParceiroStep2') }}>
                    <Image
                        style={styles.arrow}
                        source={require('../../../img/arrow.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Editar Parceiro X</Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.campo1}>
                    <Text style={styles.title2}>Tipo de filiação (membership)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Tipo de filiação (membership)"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setTipoFiliacao(text)}
                    />
                    <Text style={styles.title2}>Track da OPN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Track da OPN"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setOPNTrack(text)}
                    />
                    <Text style={styles.title2}>Primeira filiação (membership)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Primeira filiação (membership)"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setPrimeiraFiliacao(text)}
                    />
                    <Text style={styles.title2}>Slogan</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Slogan"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={text => setSlogan(text)}
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>CONCLUIR</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );

}

