
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navbarContainer: {
    width: '100%',
    height: 90,
    bottom: -30,
    backgroundColor: 'white',
    alignItems: 'center',
    position: 'absolute',
  },

  navbarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20, // Ajuste conforme necessário
    top: 5
  },

  navbarBar: {
    width: '100%',
    height: '30%',
    bottom: 0,
    backgroundColor: '#C84734',
    position: 'absolute',
  },

  navbarSquare: {
    width: 60,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navbarIconHome: {
    marginLeft:-5,
    width: 25,
    height: 25,
  },

  navbarIconDash: {
    width: 25,
    height: 25,
  },

  navbarIconUser: {
    width: 27,
    height: 27,
  },

  navbarIconEditUser: {
    width: 27,
    height: 22,
  },

  navbarIconReport: {
    width: 55,
    height: 45,
  },

  navbarIconSetting: {
    width: 25,
    height: 25,
  },

  shadow: {
    position: 'absolute',
    top: -10,
    width: '100%',
    height: 10,
  },
});

export default styles;
