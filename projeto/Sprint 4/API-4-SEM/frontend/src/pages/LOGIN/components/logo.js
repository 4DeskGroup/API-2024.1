import React from "react";
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';

export default function Logo() {
    return (
                <Animatable.View animation="slideInDown" style={styles.containerLogo}>
                    <Image source={require('../img/oracle.png')} style={styles.logo} />
                </Animatable.View>
    );
}

const styles = StyleSheet.create({
    containerLogo: {
        alignSelf: 'center',
        marginTop: '200%',
        position: 'absolute',
    },
    logo: {
        width: 100,
        height: 50,
    },
});
