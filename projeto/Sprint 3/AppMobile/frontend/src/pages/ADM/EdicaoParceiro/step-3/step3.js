import React from 'react';
import { StyleSheet, View} from 'react-native';
import Title from './components/title/title';
import Main from './components/main/main';

export default function Step3Parceiro({ route }) {
    const { Parceiro, TipoUsuario } = route.params

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
