import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';


export default function Navbar() {

  return (

    <View style={styles.navbarContainer}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.2)']}
        style={styles.shadow}
      />


      <View style={styles.navbarSquare}>
        <Image style={styles.navbarIconHome} source={require('./img/home.png')} />
      </View>

      <View style={styles.navbarBar}></View>


    </View>
    


  );
}


