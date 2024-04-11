import React from 'react';
import {View, Form} from 'react-native';
import Forms from '../Forms/Forms';
export default function Main() {
  return (
    <View>
      <Forms/>
      <View style={{
      width: '100%',
      height: '40%',
      bottom: 0,
      backgroundColor: 'white',
      alignItems: 'flex-start'
  }}>

      </View>
    </View>
  );
}