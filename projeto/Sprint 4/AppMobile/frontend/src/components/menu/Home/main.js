import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { LinearGradient } from 'expo-linear-gradient';


export default function MenuHome() {

  return (

    <View style={styles.navbarContainer}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.2)']}
        style={styles.shadow}
      />

      <View style={styles.navbarContent}>
        <View style={styles.navbarSquare}>
          <Image style={styles.navbarIconHome} source={require('../img/home-white.png')} />
        </View>

        <View style={styles.navbarSquare}>
          <Image style={styles.navbarIconDash} source={require('../img/dashboard-gray.png')}></Image>
        </View>

        <View style={styles.navbarSquare}>
          <Image style={styles.navbarIconUser} source={require('../img/users-gray.png')} />
        </View>

        <View style={styles.navbarSquare}>
          <Image style={styles.navbarIconEditUser} source={require('../img/edituser-gray.png')} />
        </View>

        <View style={styles.navbarSquare}>
          <Image style={styles.navbarIconReport} source={require('../img/report-gray.png')} />
        </View>

        {/* <View style={styles.navbarSquare}>
          <Image style={styles.navbarIconSetting} source={require('../img/config-gray.png')} />
        </View> */}
      </View>

      {/* <View style={styles.navbarBar}></View> */}
    </View>



  );
}


