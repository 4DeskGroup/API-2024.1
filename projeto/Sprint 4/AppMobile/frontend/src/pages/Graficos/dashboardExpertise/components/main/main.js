import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import axios from '../../../../../Axios/axiosInstancia';
import styles from "./style";
import navigate from '../../../../../../RootNavigation';


export default function Main() {
    const [quantidadeParceiro, setQuantidadeParceiro] = useState(0);
    const [quantidadeConsultor, setQuantidadeConsultor] = useState(0);

    const GETParceiros = async () => {
        try {
            const response = await axios.get(`/GetParceiroQuantidade`, {
            });
            if (response.data) {
                setQuantidadeParceiro(response.data.QuantidadeParceiros);
            }
        } catch (error) {
            console.error('Erro ao fazer a solicitação:', error);
        }
    };

    const GETConsultores = async () => {
        try {
            const response = await axios.get(`/ListarQuantidadeConsultores`, {
            });
            if (response.data) {
                setQuantidadeConsultor(response.data.Retorno);
            }
        } catch (error) {
            console.error('Erro ao fazer a solicitação:', error);
        }
    };

    useEffect(() => {
        GETParceiros()
        GETConsultores()
    }, [])

    return (
        <View style={styles.whiteBackground}>
            <View style={styles.container}>
                
                <Text style={styles.title}>Perfis cadastrados no sistema:</Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.campo1}>
                    <Text style={styles.texto1}>{quantidadeParceiro}</Text>
                    <Text style={styles.texto2}>Parceiros</Text>
                </View>
                <View style={styles.campo2}>
                    <Text style={styles.texto1}>{quantidadeConsultor}</Text>
                    <Text style={styles.texto2}>Consultores</Text>
                </View>
            </View>
            <View style={styles.container3}>
                <Text style={styles.texto3}>Acesse as tracks em desenvolvimento:</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigate('DashboardParceiros')
                }}
            >
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonTextContainer}>
                        <View style={styles.buttonText1}>
                            <Image style={styles.book} source={require('../..//img/book.png')} />
                            <Text style={styles.texto4}>Tracks</Text>
                        </View>
                        <View style={styles.buttonText2}>
                            <Text style={styles.texto5}>Acompanhe o processo de cada</Text>
                        </View>
                    </View>
                    <View style={styles.buttonImage}>
                        <Image style={styles.icon} source={require('../../img/seta.png')} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );

}

