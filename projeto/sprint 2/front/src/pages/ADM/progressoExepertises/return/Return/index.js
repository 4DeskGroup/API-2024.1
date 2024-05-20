import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

export default function Return() {
  return (
    <View style={styles.arrowBox}>
      <Image style={styles.icon}
                source={require('./images/icon-arrow-white.png')}
              />
    </View>
  );
}
