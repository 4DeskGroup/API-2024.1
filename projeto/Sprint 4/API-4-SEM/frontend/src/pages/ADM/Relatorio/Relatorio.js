import React from 'react';
import { StyleSheet, View} from 'react-native';
import Title from './components/title/title';
import Main from './components/main/main';
import MenuReport from '../../../components/menu/Report/main'

export default function RelatorioADMIN() {
    return (
        <View style={styles.body}>
            <Title/>
            <Main />
            <MenuReport/>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#C84734',
    }
});
