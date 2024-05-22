import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from "./style";
import navigate from '../../../../../../../RootNavigation';

export default function Main({ parceiro, tipoUsuario }) {
    const [nome, setNome] = React.useState('')
    const [nomeAdmin, setNomeAdmin] = React.useState('')
    const [emailAdmin, setEmailAdmin] = React.useState('')
    const [complianceHold, setComplianceHold] = React.useState('')
    const [credito, setCredito] = React.useState('')
    const [opnStatus, setOpnStatus] = React.useState('')

    const recuperarDados = (dadosJSON) => {
        const parceiroObj = JSON.parse(dadosJSON)
        
        if (parceiroObj) {
            return {
                nome: parceiroObj.nome,
                pais: parceiroObj.pais,
                endereco: [parceiroObj.endereco],
                OPNAdminName: parceiroObj.OPNAdminName,
                OPNAdminEmail: parceiroObj.OPNAdminEmail,
                ComplianceHold: parceiroObj.ComplianceHold,
                CreditHold: parceiroObj.CreditHold,
                OPNStatus: parceiroObj.OPNStatus,
                tipoMembro: parceiroObj.tipoMembro,
                OPNTrack: parceiroObj.OPNTrack,
                primeiroMembro: parceiroObj.primeiroMembro,
                slogan: parceiroObj.slogan,
                ExpertisesParceiro: [parceiroObj.expertisesParceiro]
            }
        }
    }
    
    // const parceiroObj = recuperarDados(parceiro)
    
    React.useEffect(() => {
        const parceiroObj = recuperarDados(parceiro);
        
        if (parceiroObj) {
            setNome(parceiroObj.nome);
            setComplianceHold(parceiroObj.ComplianceHold);
            setCredito(parceiroObj.CreditHold);
            setEmailAdmin(parceiroObj.OPNAdminEmail);
            setNomeAdmin(parceiroObj.OPNAdminName);
            setOpnStatus(parceiroObj.OPNStatus);
        }
    }, [parceiro]);

    return (
        <ScrollView style={styles.whiteBackground}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { navigate('EdicaoParceiroStep1', tipoUsuario, parceiroObj) }}>
                    <Image
                        style={styles.arrow}
                        source={require('../../../img/arrow.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Editar parceiro {nome}</Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.campo1}>
                    <Text style={styles.title2}>Nome do Administrador OPN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do Administrador OPN"
                        placeholderTextColor="#B5AEAE"
                        value={nomeAdmin}
                        onChangeText={text => setNomeAdmin(text)}

                    />
                    <Text style={styles.title2}>Email do Administrador OPN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email do Administrador OPN"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        value={emailAdmin}
                        onChangeText={text => setEmailAdmin(text)}

                    />
                    <Text style={styles.title2}>Compliance Hold</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Compliance Hold"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        value={complianceHold}
                        onChangeText={text => setComplianceHold(text)}
                    />
                    <Text style={styles.title2}>Credito Hold</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Credito Hold"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        value={credito}
                        onChangeText={text => setCredito(text)}
                    />
                    <Text style={styles.title2}>OPN Status</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="OPN Status"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        value={opnStatus}
                        onChangeText={text => setOpnStatus(text)}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => { navigate('EdicaoParceiroStep3', {Parceiro: parceiro, TipoUsuario: tipoUsuario}) }}>
                        <Text style={styles.buttonText}>CONTINUAR</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );

}

