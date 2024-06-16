import React from 'react';
import {View, Form} from 'react-native';
import Forms from '../Forms/Forms';
export default function Main(params) {
  const tipoUsuario = params.params
  
  return (
    <View>
      <Forms tipoUsuario={tipoUsuario}/>
    </View>
  );
}