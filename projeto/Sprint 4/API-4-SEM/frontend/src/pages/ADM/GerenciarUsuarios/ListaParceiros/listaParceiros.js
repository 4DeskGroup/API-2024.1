import React from 'react';
import { StyleSheet, View} from 'react-native';
import Title from './components/title/title';
import Main from './components/main/main';
import MenuEditUsers from '../../../../components/menu/EditUser/main';

export default function ListaParceiros({ route }) {
    return (
        <View style={styles.body}>
            <Title params={route.params.TipoUsuario}/>
            <Main params={route.params.TipoUsuario}/>
            <MenuEditUsers/>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#C84734',
    }
});
