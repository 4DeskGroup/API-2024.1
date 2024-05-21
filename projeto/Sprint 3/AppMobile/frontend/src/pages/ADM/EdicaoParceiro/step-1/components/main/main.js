import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from "./style";
import navigate from '../../../../../../../RootNavigation';


export default function Step1Parceiro() {
    return (
        <ScrollView style={styles.whiteBackground}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { navigate('ListaParceiros') }}>
                    <Image
                        style={styles.arrow}
                        source={require('../../../img/arrow.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Editar Parceiro X</Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.campo1}>
                    <Text style={styles.title2}>ID da companhia</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="ID da empresa"
                        placeholderTextColor="#B5AEAE"

                    />
                    <Text style={styles.title2}>Nome da companhia</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome da empresa"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}

                    />
                    <Text style={styles.title2}>País</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="País da empresa"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}

                    />
                    <Text style={styles.title2}>Cidade</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Cidade da empresa"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}

                    />
                    <Text style={styles.title2}>Endereço</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Endereço da empresa"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}

                    />

                    <TouchableOpacity style={styles.button} onPress={() => { navigate('EdicaoParceiroStep2') }}>
                        <Text style={styles.buttonText}>CONTINUAR</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );

}

