import React from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import Title from './components/title/title';
import Main from './components/main/main';
import MenuDashboard from '../../../components/menu/Dashboard/main';

export default function DashboardCursos({ route }) {

    return (
        <View>
            <ScrollView>
                <View style={styles.body}>
                    <Title />
                    <Main params={route.params} />
                </View>
            </ScrollView>
            {/* <MenuDashboard/> */}
        </View>

    );
}

const styles = StyleSheet.create({

    body: {
        flexGrow: 1,
        backgroundColor: '#C84734',
    }
})