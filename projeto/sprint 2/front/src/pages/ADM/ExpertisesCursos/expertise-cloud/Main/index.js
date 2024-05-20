import React from 'react';
import {View, Form} from 'react-native';
import Forms from '../Form';

export default function Main(params) {
  return (
    <View>
      <Forms params={params.params} />
    </View>
  );
}
