import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from "./style";
import navigate from '../../../../../../../RootNavigation';


export default function MainStep1({ tipoUsuario, dadosParceiroJSON }) {
    const [companyID, setCompanyID] = React.useState('')
    const [nome, setNome] = React.useState('')
    const [nomeTitulo, setNomeTitulo] = React.useState('')
    const [pais, setPais] = React.useState('')
    const [cidade, setCidade] = React.useState('');
    const [endereco, setEndereco] = React.useState('');

    console.log('CHEGOU NO STEP 1: ' + dadosParceiroJSON)

    const recuperarDados = (dadosJSON) => {
        const dadosParceiro = JSON.parse(dadosJSON)
        
        if (dadosParceiro) {
            return {
                nome: dadosParceiro.nome,
                pais: dadosParceiro.pais,
                endereco: [dadosParceiro.endereco],
                OPNAdminName: dadosParceiro.OPNAdminName,
                OPNAdminEmail: dadosParceiro.OPNAdminEmail,
                ComplianceHold: dadosParceiro.ComplianceHold,
                CreditHold: dadosParceiro.CreditHold,
                OPNStatus: dadosParceiro.OPNStatus,
                tipoMembro: dadosParceiro.tipoMembro,
                OPNTrack: dadosParceiro.OPNTrack,
                primeiroMembro: dadosParceiro.primeiroMembro,
                slogan: dadosParceiro.slogan,
                ExpertisesParceiro: [dadosParceiro.expertisesParceiro]
            }
        }
    }
    
    const parceiro = recuperarDados(dadosParceiroJSON)
    // const parceiroEndereco = parceiro.endereco[0][0]

    React.useEffect(() => {
        const parceiro = recuperarDados(dadosParceiroJSON);
        const parceiroEndereco = parceiro.endereco[0][0]
        if (parceiro) {
            setNome(parceiro.nome);
            setNomeTitulo(parceiro.nome)
            setPais(parceiro.pais);
            setCidade(parceiroEndereco.cidade);
            setEndereco(parceiroEndereco.logradouro);
        }
    }, [dadosParceiroJSON]);

    return (
        <ScrollView style={styles.whiteBackground}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { navigate('ListaParceiros', { TipoUsuario: tipoUsuario }) }}>
                    <Image
                        style={styles.arrow}
                        source={require('../../../img/arrow.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Editar parceiro {nomeTitulo}</Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.campo1}>
                    <Text style={styles.title2}>ID da companhia</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="ID da empresa"
                        placeholderTextColor="#B5AEAE"
                        value={companyID}
                        onChangeText={text => setCompanyID(text)}
                    />
                    <Text style={styles.title2}>Nome da companhia</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome da empresa"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        value={nome}
                        onChangeText={text => setNome(text)}
                    />
                    <Text style={styles.title2}>País</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="País da empresa"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        value={pais}
                        onChangeText={text => setPais(text)}

                    />
                    <Text style={styles.title2}>Cidade</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Cidade da empresa"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        value={cidade}
                        onChangeText={text => setCidade(text)}

                    />
                    <Text style={styles.title2}>Endereço</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Endereço da empresa"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        value={endereco}
                        onChangeText={text => setEndereco(text)}

                    />

                    <TouchableOpacity style={styles.button} onPress={() => { navigate('EdicaoParceiroStep2', {Parceiro: JSON.stringify(parceiro), TipoUsuario: tipoUsuario}) }}>
                        <Text style={styles.buttonText}>CONTINUAR</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );

}

