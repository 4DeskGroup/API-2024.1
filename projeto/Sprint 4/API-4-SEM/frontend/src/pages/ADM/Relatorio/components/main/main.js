import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import styles from "./style";
import navigate from '../../../../../../RootNavigation';
import axios from '../../../../../Axios/axiosInstancia';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Main(params) {

    const downloadExcelparceiro = async () => {
        try {
            const value = await AsyncStorage.getItem('EmailUser');
            console.log(value);
    
            const response = await axios.get(`/download-parceiros?email=${value}`);
            console.log('Resposta do servidor:', response.data);
            alert(response.data)
            // Aqui você pode lidar com a resposta, se necessário
        } catch (error) {
            console.error('Erro ao baixar o arquivo Excel de parceiros:', error);
            // Trate o erro conforme necessário
        }
    };
    
    const downloadExcelCurso = async () => {
        try {
            const value = await AsyncStorage.getItem('EmailUser');
            console.log(value);
    
            const response = await axios.get(`/download-parceirosCursos?email=${value}`);
            console.log('Resposta do servidor:', response.data);
            alert(response.data)
            // Aqui você pode lidar com a resposta, se necessário
        } catch (error) {
            console.error('Erro ao baixar o arquivo Excel de cursos:', error);
            // Trate o erro conforme necessário
        }
    };
    
    const downloadExcelCursoExpertise = async () => {
        try {
            const value = await AsyncStorage.getItem('EmailUser');
            console.log(value);
    
            const response = await axios.get(`/download-parceirosCursosExpertise?email=${value}`);
            console.log('Resposta do servidor:', response.data);
            alert(response.data)
            // Aqui você pode lidar com a resposta, se necessário
        } catch (error) {
            console.error('Erro ao baixar o arquivo Excel de cursos por expertise:', error);
            // Trate o erro conforme necessário
        }
    };

    
    const tipoUsuario = params.params
    return (
        <View style={styles.whiteBackground}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { navigate('HomeADM', { TipoUsuario: tipoUsuario }) }}>
                   
                </TouchableOpacity>
                <Text style={styles.title}>Relatórios disponíveis para download:</Text>
            </View>
            <View style={styles.container2}>
                <TouchableOpacity onPress={downloadExcelparceiro} style={styles.campo1}>
                    <Image
                        style={styles.icon2}
                        source={require('../../img/icon5.png')}
                    />
                    <Text style={styles.texto1}>Parceiros Oracle</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={downloadExcelCurso} style={styles.campo1}>
                    <Image
                        style={styles.icon2}
                        source={require('../../img/icon5.png')}
                    />
                    <Text style={styles.texto1}>Relação de parceiros e progresso de Tracks</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={downloadExcelCursoExpertise} style={styles.campo1}>
                    <Image
                        style={styles.icon2}
                        source={require('../../img/icon5.png')}
                    />
                    <Text style={styles.texto1}>Relação de parceiros e progresso de Expertises</Text>
                </TouchableOpacity>

            </View>
        </View>
    );

}

