import React from 'react';
import { StyleSheet, View} from 'react-native';
import Title from './components/title/title';
import Main from './components/main/main';

export default function DashboardExpertise() {
    return (
        <View style={styles.body}>
            <Title/>
            <Main/>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#C84734',
    }
});
