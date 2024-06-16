import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { LinearGradient } from 'expo-linear-gradient';

export default function MenuReport() {
  const navigation = useNavigation();

  const handleNavigation = (screen, params = {}) => {
    navigation.navigate(screen, params);
  };

  return (
    <View style={styles.navbarContainer}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.2)']}
        style={styles.shadow}
      />

      <View style={styles.navbarContent}>
        <View style={styles.navbarSquare}>
          <TouchableOpacity onPress={() => handleNavigation('HomeADM', { TipoUsuario: 'Administrador' })}>
            <Image style={styles.navbarIconHome} source={require('../img/home-gray.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.navbarSquare}>
          <TouchableOpacity onPress={() => handleNavigation('DashboardExpertises', { TipoUsuario: 'Administrador' })}>
            <Image style={styles.navbarIconDash} source={require('../img/dashboard-gray.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.navbarSquare}>
          <TouchableOpacity onPress={() => handleNavigation('Parceiros', { TipoUsuario: 'Administrador' })}>
            <Image style={styles.navbarIconUser} source={require('../img/users-gray.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.navbarSquare}>
          <TouchableOpacity onPress={() => handleNavigation('GerenciarUsuarios', { TipoUsuario: 'Administrador' })}>
            <Image style={styles.navbarIconEditUser} source={require('../img/edituser-gray.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.navbarSquare}>
          <TouchableOpacity onPress={() => handleNavigation('Relatorio', { TipoUsuario: 'Administrador' })}>
            <Image style={styles.navbarIconReport} source={require('../img/report-white.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
