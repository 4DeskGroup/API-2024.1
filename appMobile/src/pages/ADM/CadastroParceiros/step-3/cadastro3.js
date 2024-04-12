import React, { useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from "react-native";
import * as Animatable from 'react-native-animatable';
import Logo from "../../../LOGIN/components/logo";
import Title from "../components/title";
import styles from './style';
import modalStyles from './modalStyles'; // Importe os estilos do modal

// Componente para o seletor personalizado
const CustomPicker = ({ options, selectedOptions, onSelectOption, onRemoveOption }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectOption = (option) => {
        onSelectOption(option);
        setIsOpen(false); // Fecha o modal após selecionar um item
    };

    return (
        <View style={styles.pickerContainer}>
            <TouchableOpacity onPress={() => setIsOpen(true)} style={styles.pickerButton}>
                <Text style={styles.titleModal}>Selecione as opções</Text>
            </TouchableOpacity>
            <Modal
                visible={isOpen}
                animationType="slide"
                transparent={true}
            >
                <View style={modalStyles.modalContainer}>
                    <View style={modalStyles.modalContent}>
                        <Text style={modalStyles.modalTitle}>Selecione uma opção</Text>
                        {options.map((option, index) => (
                            <TouchableOpacity key={index} onPress={() => handleSelectOption(option)}>
                                <Text style={modalStyles.modalText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity onPress={() => setIsOpen(false)} style={modalStyles.modalButton}>
                            <Text style={modalStyles.modalButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
                {selectedOptions.map((option, index) => (
                    <TouchableOpacity key={index} onPress={() => onRemoveOption(index)} style={styles.selectedExpertise}>
                        <Text style={styles.selectedExpertiseText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default function Cadastro3() {
    const [selectedExpertises, setSelectedExpertises] = useState([]);

    const handleExpertiseSelection = (expertise) => {
        setSelectedExpertises([...selectedExpertises, expertise]);
    };

    const handleRemoveExpertise = (index) => {
        const updatedExpertises = [...selectedExpertises];
        updatedExpertises.splice(index, 1);
        setSelectedExpertises(updatedExpertises);
    };

    return (
        <KeyboardAvoidingView style={styles.background} behavior="padding">
            <ScrollView contentContainerStyle={styles.container}>
                <Title/>
                <Animatable.View animation="slideInDown" style={styles.formContainer}>
                    <Text style={styles.title}>Tipo de filiação (membership)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Tipo de filiação (membership)"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />
                    <Text style={styles.title}>Track da OPN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Track da OPN"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />
                    <Text style={styles.title}>Primeira filiação (membership)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Primeira filiação (membership)"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />
                    <Text style={styles.title}>Slogan</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Slogan"
                        placeholderTextColor="#B5AEAE"
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />
                    
                    <Text style={styles.title}>Expertise de interesse</Text>
                    <CustomPicker
                        options={["Cloud Build", "Cloud Shell", "Cloud Service", "Industry Healthcare", "Licence & Hardware"]}
                        selectedOptions={selectedExpertises}
                        onSelectOption={handleExpertiseSelection}
                        onRemoveOption={handleRemoveExpertise}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>CONCLUIR</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ScrollView>
            <Logo/>
        </KeyboardAvoidingView>
    );
}
