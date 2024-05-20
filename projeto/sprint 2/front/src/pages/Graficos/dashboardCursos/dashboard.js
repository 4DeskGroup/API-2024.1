import React from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import Title from './components/title/title';
import Main from './components/main/main';

export default function DashboardCursos() {

    return (
        <ScrollView>
            <View style={styles.body}>
                <Title />
                <Main />
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: '#C84734',
    }
})