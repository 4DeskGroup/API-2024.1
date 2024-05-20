import React from 'react';
import {View, Form, StyleSheet} from 'react-native';
import Forms from '../Forms/Forms';

export default function Main() {
  return (
    <View>
      <Forms/>
      <View style={{
      width: '100%',
      height: '50%',
      bottom: 0,
      backgroundColor: 'white',
      alignItems: 'flex-start'
  }}>
      </View>
    </View>
  );
}