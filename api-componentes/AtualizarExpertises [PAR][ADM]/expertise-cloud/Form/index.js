import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import CheckBox from '@react-native-community/checkbox';
export default function Forms() {


  const [lista, setLista] = useState([
    { id: 1,nome: 'IaaS/PaaS', check: true },
    { id: 2, nome: 'SaaS', check: false },
    { id: 3, nome: 'Industries', check: false },
  ]);

  function toggleCheckBox(index) {
    const newLista = [...lista];
    newLista[index].check = !newLista[index].check;
    setLista(newLista);
  }

  function button() {
    console.log(lista);
  }
  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formText}>
          Certificações da expertise Cloud Sell que foram concluídas até o
          momento:
        </Text>
      </View>
      <View>
      {lista.map((item, index) => (
         <TouchableOpacity
         key={index}
         style={styles.expertisesContainer}
         onPress={() => toggleCheckBox(index)}>
         <CheckBox
           value={item.check}
           onValueChange={() => toggleCheckBox(index)}
         />
         <Text style={styles.titleMenu}>{item.nome}</Text>
       </TouchableOpacity>
      ))}
      </View>

      <TouchableOpacity
        style={styles.buttonMenu}
        onPress={() => {
          console.log("oI")
          button();
        }}>
        <View style={styles.buttonText}>
          <Text style={styles.titleButtonMenu}>Salvar</Text>
        </View>
      </TouchableOpacity>
    </View>

      
  );
}


