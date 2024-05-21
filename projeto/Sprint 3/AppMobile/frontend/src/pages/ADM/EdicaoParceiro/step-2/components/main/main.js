import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from "./style";
import navigate from '../../../../../../../RootNavigation';

export default function Main() {
    return (
        <ScrollView style={styles.whiteBackground}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { navigate('EdicaoParceiroStep1') }}>
                    <Image
                        style={styles.arrow}
                        source={require('../../../img/arrow.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Editar Parceiro X</Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.campo1}>
                    <Text style={styles.title2}>Nome do Administrador OPN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do Administrador OPN"
                        placeholderTextColor="#B5AEAE"

                    />
                    <Text style={styles.title2}>Email do Administrador OPN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email do Administrador OPN"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}

                    />
                    <Text style={styles.title2}>Compliance Hold</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Compliance Hold"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                    />
                    <Text style={styles.title2}>Credito Hold</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Credito Hold"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                    />
                    <Text style={styles.title2}>OPN Status</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="OPN Status"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => { navigate('EdicaoParceiroStep3') }}>
                        <Text style={styles.buttonText}>CONTINUAR</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );

}

