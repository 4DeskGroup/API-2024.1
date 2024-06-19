import React from 'react';
import { StyleSheet, View} from 'react-native';
import Title from './components/title/title';
import Main from './components/main/main';
import MenuDashboard from '../../../components/menu/Dashboard/main';

export default function DashboardExpertise() {
    return (
        <View style={styles.body}>
            <Title/>
            <Main/>
            <MenuDashboard/>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#C84734',
    }
});
