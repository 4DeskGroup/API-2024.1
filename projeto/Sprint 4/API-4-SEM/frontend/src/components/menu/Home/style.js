// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//    navbarContainer: {
//       width: '100%',
//       height: 90,
//       bottom: -30,
//       backgroundColor: 'white',
//       alignItems: 'flex-start',
//       position: 'absolute',
//   },

//  navbarBar: {
//     width: '100%',
//     height: '30%',
//     bottom: 0,
//     backgroundColor: '#C84734',
//     alignItems: 'flex-start',
//     position: 'absolute'
//  },
//  navbarSquare: {
//     width: 60,
//     height: 50,
//     zIndex:11111,
//     top: 10,
//     alignItems: 'flex-start',
//     position: 'absolute',
//     marginLeft: 38,
//     alignContent:'center',
//     alignItems:'center',
//     justifyContent: 'center'
//  },

//  navbarSquare2: {
//    width: '18%',
//    height: '70%',
//    zIndex:11111,
//    bottom: '25%',
//    alignItems: 'flex-start',
//    position: 'absolute',
//    marginLeft: 119,
//    borderTopLeftRadius: 15,
//    borderTopRightRadius: 15,
//    alignContent:'center',
//    alignItems:'center',
//    justifyContent: 'center'
// },

// navbarSquare3: {
//    width: '18%',
//    height: '70%',
//    zIndex:11111,
//    bottom: '25%',
//    alignItems: 'flex-start',
//    position: 'absolute',
//    marginLeft: 199,
//    borderTopLeftRadius: 15,
//    borderTopRightRadius: 15,
//    alignContent:'center',
//    alignItems:'center',
//    justifyContent: 'center'
// },

// navbarSquare4: {
//    width: '18%',
//    height: '70%',
//    zIndex:11111,
//    bottom: '25%',
//    alignItems: 'flex-start',
//    position: 'absolute',
//    marginLeft: 280,
//    borderTopLeftRadius: 15,
//    borderTopRightRadius: 15,
//    alignContent:'center',
//    alignItems:'center',
//    justifyContent: 'center'
// },

// navbarSquare5: {
//     width: '18%',
//     height: '70%',
//     zIndex:11111,
//     bottom: '25%',
//     alignItems: 'flex-start',
//     position: 'absolute',
//     marginLeft: 280,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     alignContent:'center',
//     alignItems:'center',
//     justifyContent: 'center'
//  },

//  navbarSquare6: {
//     width: '18%',
//     height: '70%',
//     zIndex:11111,
//     bottom: '25%',
//     alignItems: 'flex-start',
//     position: 'absolute',
//     marginLeft: 280,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     alignContent:'center',
//     alignItems:'center',
//     justifyContent: 'center'
//  },

//  navbarIconHome: {
//     width: '100%',
//     height: '100%',
//     bottom: 4
//  },

//  navbarIconDash: {
//    width: '40%',
//    height: '50%',
//    bottom: 4
// },

// navbarIconUser: {
//    width: '40%',
//    height: '50%',
//    bottom: 4
// },

// navbarIconSetting: {
//    width: '40%',
//    height: '50%',
//    bottom: 4
// },

//  shadow: {
//    position: 'absolute',
//    top: -10, // Ajuste a posição conforme necessário para colocar a sombra acima do retângulo branco
//    width: '100%', // Ajuste o tamanho conforme necessário
//    height: 10, // Ajuste o tamanho conforme necessário
//  },
// })


// export default styles

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
    width: 55,
    height: 45,
  },

  navbarIconDash: {
    width: 25,
    height: 25,
  },

  navbarIconUser: {
    width: 30,
    height: 30,
  },

  navbarIconEditUser: {
    width: 27,
    height: 22,
  },

  navbarIconReport: {
    width: 22,
    height: 24,
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
