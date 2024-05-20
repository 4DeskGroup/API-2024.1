import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from "./style";
import { ProgressCircle } from 'react-native-svg-charts';
import navigate from '../../../../../../RootNavigation';



export default function Main() {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.body}>
                <Text style={styles.bodyText}>Tracks em desenvolvimento:</Text>

                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={() => {
                        navigate('DashboardCursos')
                    }}>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonText}>
                            <View style={styles.buttonTitle}>
                                <Text style={styles.textTitle}>Cloud Build Track</Text>
                            </View>
                            <View style={styles.buttonSubTitle}>
                                <Text style={styles.textSubTitle}>Parceiros que concluíram</Text>
                            </View>
                            <View style={styles.buttonDescription}>
                                <Text style={styles.textDescription} >115 parceiros inscritos</Text>
                                <Text style={styles.textDescription}>24 cursos / certificações</Text>
                            </View>
                        </View>
                        <View style={styles.buttonGraph}>
                            {/* <ProgressCircle
                                style={styles.progressCircle}
                                progress={0.7}
                                progressColor={'rgb(198, 25, 0)'}
                                strokeWidth={15}
                            /> */}
                            <View style={styles.progressTextCircle}>
                                <Text style={styles.textCircle} >75%</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={() => {
                        navigate('DashboardCursos')
                    }}>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonText}>
                            <View style={styles.buttonTitle}>
                                <Text style={styles.textTitle}>Cloud Sell Track</Text>
                            </View>
                            <View style={styles.buttonSubTitle}>
                                <Text style={styles.textSubTitle}>Parceiros que concluíram</Text>
                            </View>
                            <View style={styles.buttonDescription}>
                                <View style={styles.buttonTextDescription} >
                                    <Text style={styles.textDescription} >115 parceiros inscritos</Text>
                                </View>
                                <View style={styles.buttonTextDescription}>
                                    <Text style={styles.textDescription}>24 cursos / certificações</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonGraph}>
                            {/* <ProgressCircle
                                style={styles.progressCircle}
                                progress={0.7}
                                progressColor={'rgb(198, 25, 0)'}
                                strokeWidth={15}
                            /> */}
                            <View style={styles.progressTextCircle}>
                                <Text style={styles.textCircle} >75%</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={() => {
                        navigate('DashboardCursos')
                    }}>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonText}>
                            <View style={styles.buttonTitle}>
                                <Text style={styles.textTitle}>Cloud Service Track</Text>
                            </View>
                            <View style={styles.buttonSubTitle}>
                                <Text style={styles.textSubTitle}>Parceiros que concluíram</Text>
                            </View>
                            <View style={styles.buttonDescription}>
                                <View style={styles.buttonTextDescription} >
                                    <Text style={styles.textDescription} >115 parceiros inscritos</Text>
                                </View>
                                <View style={styles.buttonTextDescription}>
                                    <Text style={styles.textDescription}>24 cursos / certificações</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonGraph}>
                            {/* <ProgressCircle
                                style={styles.progressCircle}
                                progress={0.7}
                                progressColor={'rgb(198, 25, 0)'}
                                strokeWidth={15}
                            /> */}
                            <View style={styles.progressTextCircle}>
                                <Text style={styles.textCircle} >75%</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={() => {
                        navigate('DashboardCursos')
                    }}>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonText}>
                            <View style={styles.buttonTitle}>
                                <Text style={styles.textTitle}>Industry Healthcare Track</Text>
                            </View>
                            <View style={styles.buttonSubTitle}>
                                <Text style={styles.textSubTitle}>Parceiros que concluíram</Text>
                            </View>
                            <View style={styles.buttonDescription}>
                                <View style={styles.buttonTextDescription} >
                                    <Text style={styles.textDescription} >115 parceiros inscritos</Text>
                                </View>
                                <View style={styles.buttonTextDescription}>
                                    <Text style={styles.textDescription}>24 cursos / certificações</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonGraph2}>
                            {/* <ProgressCircle
                                style={styles.progressCircle2}
                                progress={0.7}
                                progressColor={'rgb(198, 25, 0)'}
                                strokeWidth={15}
                            /> */}
                            <View style={styles.progressTextCircle}>
                                <Text style={styles.textCircle} >75%</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={() => {
                        navigate('DashboardCursos')
                    }}>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonText}>
                            <View style={styles.buttonTitle}>
                                <Text style={styles.textTitle}>License & Hardware Build Track</Text>
                            </View>
                            <View style={styles.buttonSubTitle}>
                                <Text style={styles.textSubTitle}>Parceiros que concluíram</Text>
                            </View>
                            <View style={styles.buttonDescription}>
                                <View style={styles.buttonTextDescription} >
                                    <Text style={styles.textDescription} >115 parceiros inscritos</Text>
                                </View>
                                <View style={styles.buttonTextDescription}>
                                    <Text style={styles.textDescription}>24 cursos / certificações</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonGraph2}>
                            {/* <ProgressCircle
                                style={styles.progressCircle2}
                                progress={0.7}
                                progressColor={'rgb(198, 25, 0)'}
                                strokeWidth={15}
                            /> */}
                            <View style={styles.progressTextCircle}>
                                <Text style={styles.textCircle} >75%</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>

    );
}