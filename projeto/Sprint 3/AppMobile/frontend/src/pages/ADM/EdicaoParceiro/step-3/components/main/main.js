import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from './style';
import navigate from '../../../../../../../RootNavigation';


export default function Main({ parceiro, tipoUsuario }) {
    const [nome, setNome] = React.useState('')
    const [tipoMembro, setTipoMembro] = React.useState('')
    const [track, setTrack] = React.useState('')
    const [primeiroMembro, setPrimeiroMembro] = React.useState('')
    const [slogan, setSlogan] = React.useState('')

    const parceiroDados = JSON.parse(parceiro)
    console.log(parceiroDados)

    React.useEffect(() => {
        const parceiroDados = JSON.parse(parceiro)

        if (parceiroDados) {
            setNome(parceiroDados.nome)
            setTipoMembro(parceiroDados.tipoMembro)
            setTrack(parceiroDados.OPNTrack)
            setPrimeiroMembro(parceiroDados.primeiroMembro)
            setSlogan(parceiroDados.slogan)
        }

    }, [parceiro]);

    // SERÁ IMPLEMENTADO NA 4 SPRINT
    const atualizarParceiro = () => {
        console.log(parceiroDados)
    }


    return (
        <ScrollView style={styles.whiteBackground}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { navigate('EdicaoParceiroStep2', { Parceiro: parceiro, TipoUsuario: tipoUsuario }) }}>
                    <Image
                        style={styles.arrow}
                        source={require('../../../img/arrow.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Editar parceiro {nome}</Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.campo1}>
                    <Text style={styles.title2}>Tipo de filiação (membership)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Tipo de filiação (membership)"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        value={tipoMembro}
                        onChangeText={text => setTipoMembro(text)}
                    />
                    <Text style={styles.title2}>Track da OPN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Track da OPN"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        value={track}
                        onChangeText={text => setTrack(text)}
                    />
                    <Text style={styles.title2}>Primeira filiação (membership)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Primeira filiação (membership)"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        value={primeiroMembro}
                        onChangeText={text => setPrimeiroMembro(text)}
                    />
                    <Text style={styles.title2}>Slogan</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Slogan"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        value={slogan}
                        onChangeText={text => setSlogan(text)}
                    />

                    <TouchableOpacity style={styles.button} onPress={atualizarParceiro}>
                        <Text style={styles.buttonText}>CONCLUIR</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );

}

