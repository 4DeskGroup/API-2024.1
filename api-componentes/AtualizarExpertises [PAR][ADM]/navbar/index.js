import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './style';
export default function Navbar() {


  return (
    <View style={styles.navbarContainer}>
        <View style={styles.navbarSquare}>
            <Image style={styles.navbarIconHome} source={require('./img/home.png')}/>
        </View>
        <View style={styles.navbarBar}>

        </View>
    </View>

      
  );
}


