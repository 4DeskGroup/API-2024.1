import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from "./style";
import navigate from '../../../../../../../RootNavigation';
import axios from "../../../../../../Axios/axiosInstancia"

export default function Main() {
    const [listaConsultor, setListaConsultor] = React.useState([]);

    const GETConsultores = async () => {
        try {
            const response = await axios.get(`/GETConsultores`);

            if (response.data) {
                setListaConsultor(response.data.Consultores);
            }
        } catch (error) {
            console.error('Erro ao fazer a solicitação:', error);
        }
    };

    React.useEffect(() => {
        GETConsultores()
    }, [])

    const confirmDelete = () => {
        Alert.alert(
            "Confirmar exclusão",
            "Tem certeza de que deseja excluir este consultor?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                { text: "Excluir", onPress: () => console.log("Consultor excluído") }
            ],
            { cancelable: false }
        );
    };

    return (
        <ScrollView style={styles.whiteBackground}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {navigate('GerenciarUsuarios')}}>
                    <Image
                        style={styles.arrow}
                        source={require('../../img/arrow.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Lista de consultores</Text>
            </View>
            {listaConsultor.map((item, index) => (
                <View style={styles.container2}>
                    <View style={styles.campo1}>
                        <Text style={styles.texto2}>{item.nome}</Text>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity onPress={confirmDelete}>
                                <Image source={require('../../img/excluir.png')} style={styles.excluir} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../img/editar.png')} style={styles.editar} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            ))}
        </ScrollView>
    );

}

