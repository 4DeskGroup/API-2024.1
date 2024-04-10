import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePAR from './src/pages/Home-PAR/HomePAR';
import HomeADM from './src/pages/Home-ADM/HomeADM';
import ExpertiseCursoParceiro from './src/pages/AtualizarExpertises/expertise-cloud/ExpertiseCursosParceiro';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePAR} />
        <Stack.Screen name="ADM" component={HomeADM} />
        <Stack.Screen name="Expertise" component={ExpertiseCursoParceiro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
