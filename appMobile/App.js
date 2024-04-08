// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import Home from './src/ADM/Home/Home';

// export default function App(){
//   return(
//     <View>
//       <Text>teste</Text>
//     </View>
//   );
// }

import React from 'react';


import {Animated, StyleSheet, Text, View} from 'react-native';

import Title from './src/ADM/Home/components/Title';
import Main from './src/ADM/Home/components/Main';
import Navbar from './src/ADM/Home/components/Navbar';
import Home from './src/ADM/Home/Home';

export default function App(){
  return(
    <Home/>
  );
}
