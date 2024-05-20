import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import modalStyles from "./modalStyles";

const CustomPicker = ({ options, selectedOptions, onSelectOption, onRemoveOption }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectOption = (option) => {
        onSelectOption(option);
        setIsOpen(false); // Fecha o modal após selecionar um item
    };

    return (
        <View style={styles.pickerContainer}>
            <TouchableOpacity onPress={() => setIsOpen(true)} style={styles.pickerButton}>
                <Text style={styles.title}>Abrir modal</Text>
            </TouchableOpacity>
            <Modal
                visible={isOpen}
                animationType="slide"
                transparent={true}
            >
                <View style={modalStyles.modalContainer}>
                    <View style={modalStyles.modalContent}>
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
                        <Text>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default CustomPicker;
