import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from "./style";
import navigate from '../../../../../../../RootNavigation';
import axios from '../../../../../../Axios/axiosInstancia'


export default function Main(params) {
    const tipoUsuario = params.params
    const [quantidadeConsultor, setQuantidadeConsultor] = React.useState(0)
    const [quantidadeParceiro, setQuantidadeParceiro] = React.useState(0)

    const GETQuantidadeConsultores = async () => {
        try {
            const response = await axios.get(`/ListarQuantidadeConsultores`);

            if (response.data) {
                setQuantidadeConsultor(response.data.Retorno);
            }
        } catch (error) {
            console.error('Erro ao fazer a solicitação:', error);
        }
    };

    const GETQuantidadeParceiros = async () => {
        try {
            const response = await axios.get(`/GetParceiroQuantidade`);

            if (response.data) {
                setQuantidadeParceiro(response.data.QuantidadeParceiros);
            }
        } catch (error) {
            console.error('Erro ao fazer a solicitação:', error);
        }
    };

    React.useEffect(() => {
        GETQuantidadeConsultores()
        GETQuantidadeParceiros()
    }, [])

    return (
        <View style={styles.whiteBackground}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { navigate('HomeADM', { TipoUsuario: tipoUsuario }) }}>
                    <Image
                        style={styles.arrow}
                        source={require('../../img/arrow.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>{tipoUsuario === 'Administrador' ? 'Usuários cadastrados no sistema' : ''}</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.campocard1}>
                    <Text style={styles.texto1card}>{quantidadeParceiro}</Text>
                    <Text style={styles.texto2card}>Parceiros</Text>
                </View>
                <View style={styles.campocard2}>
                    <Text style={styles.texto1card}>{quantidadeConsultor}</Text>
                    <Text style={styles.texto2card}>Consultores</Text>
                </View>
            </View>
            <View style={styles.container1}>
                <Text style={styles.title1}>Adicionar Usuários</Text>

                <TouchableOpacity style={styles.campo1} onPress={() => navigate('CadastroStep1', { TipoUsuario: tipoUsuario })}>
                    <Image
                        style={styles.user2}
                        source={require('../../img/addUser.png')} />
                    <View style={styles.textContainer}>
                        <Text style={styles.texto1}>Cadastrar Parceiros</Text>
                        <Text style={styles.texto2}>Cadastre um novo parceiro no sistema</Text>
                    </View>
                </TouchableOpacity>

                {tipoUsuario === 'Administrador' && (
                    <TouchableOpacity style={styles.campo1} onPress={() => navigate('CadastroConsultor')}>
                        <Image
                            style={styles.user2}
                            source={require('../../img/addUser.png')} />
                        <View style={styles.textContainer}>
                            <Text style={styles.texto1}>Cadastrar Consultor de Aliança</Text>
                            <Text style={styles.texto2}>Cadastre um novo consultor no sistema</Text>
                        </View>
                    </TouchableOpacity>
                )}

            </View>
            <View style={styles.container2}>
                <Text style={styles.title1}>Gerenciar Usuários</Text>
                <TouchableOpacity style={styles.campo2} onPress={() => navigate('ListaParceiros', { TipoUsuario: tipoUsuario })}>
                    <Image
                        style={styles.user}
                        source={require('../../img/editUser.png')} />
                    <View style={styles.textContainer}>
                        <Text style={styles.texto1}>Parceiros</Text>
                        <Text style={styles.texto2}>Gerencie os parceiros  do sistema</Text>
                    </View>
                </TouchableOpacity>

                {tipoUsuario === 'Administrador' && (
                    <TouchableOpacity style={styles.campo2} onPress={() => navigate('ListaConsultores', { TipoUsuario: tipoUsuario })}>
                        <Image
                            style={styles.user}
                            source={require('../../img/editUser.png')} />
                        <View style={styles.textContainer}>
                            <Text style={styles.texto1}>Gerenciar Consultores de Alianças</Text>
                            <Text style={styles.texto2}>Gerencie os consultores do sistema</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </View>
        
    );

}
