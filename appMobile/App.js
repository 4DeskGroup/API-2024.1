import * as React from 'react';
import HomePAR from './src/pages/Home-PAR/HomePAR';
import HomeADM from './src/pages/Home-ADM/HomeADM';
import ExpertiseCursoParceiro from './src/pages/AtualizarExpertises/expertise-cloud/ExpertiseCursosParceiro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from './RootNavigation';

const AppStack = createNativeStackNavigator()
//caso queira chamar um component de header que seja padrao nosso, em AppStack.Screen, dentro de option passar header: 'A header configurada nossa'


function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack.Navigator>
        <AppStack.Screen name='HomeADM' component={HomeADM} options={{headerShown: false}}/>
        <AppStack.Screen name='ExpertiseCursoParceiro' component={ExpertiseCursoParceiro} options={{headerShown: false}} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
