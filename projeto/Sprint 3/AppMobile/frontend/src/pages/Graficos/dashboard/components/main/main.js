import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from "./style";
import navigate from '../../../../../../RootNavigation';
import axios from '../../../../../Axios/axiosInstancia';
export default function Main() {
    const [lista, setLista] = useState([]);


    const GETExpertises = async () => {
        try {
            const response = await axios.get(`/GETExpertiseGraficos`, {
            });
            if (response.data) {
                setLista(response.data.Retorno);
            }
        } catch (error) {
            console.error('Erro ao fazer a solicitação:', error);
        }
    };

    useEffect(() => {
        GETExpertises()
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.body}>
                <Text style={styles.bodyText}>Tracks em desenvolvimento:</Text>
                {lista.map((item, index) => (
                    <TouchableOpacity
                        style={styles.buttonMenu}
                        onPress={() => {
                            navigate('DashboardExpertisesCursos', {IdExpertise: item.idExpertise})
                        }}>
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonText}>
                                <View style={styles.buttonTitle}>
                                    <Text style={styles.textTitle}>{item.nome}</Text>
                                </View>
                                <View style={styles.buttonSubTitle}>
                                    <Text style={styles.textSubTitle}>Parceiros que concluíram</Text>
                                </View>
                                <View style={styles.buttonDescription}>
                                    <View style={styles.buttonImage}>
                                        <Image source={require('../../img/user.png')} style={styles.user} />
                                        <View style={styles.textImageContainer}>
                                            <Text style={styles.textDescription}>{item.quantidadeParceiros} parceiros inscritos</Text>
                                        </View>
                                    </View>
                                    <View style={styles.buttonDescription}>
                                        <View style={styles.buttonImage}>
                                            <Image style={styles.book} source={require('../..//img/book.png')} />
                                            <Text style={styles.textDescription}>{item.quantidadeCursos} cursos / certificações</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.buttonGraph}>
            
                                <View style={styles.progressTextCircle}>
                                    <Text style={styles.textCircle} >{item.percentualCompletos}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>

    );
}