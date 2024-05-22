import React from 'react';
import { StyleSheet, View} from 'react-native';
import Title from './components/title/title';
import Main from './components/main/main';

export default function Step2Parceiro({ route }) {
    const { Parceiro, TipoUsuario } = route.params
    console.log(route.params)
    console.log(Parceiro)
    return (
        <View style={styles.body}>
            <Title tipoUsuario={TipoUsuario}/>
            <Main parceiro={Parceiro} tipoUsuario={TipoUsuario}/>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#C84734',
    }
});
