import * as React from 'react';
// import HomePAR from './src/pages/Home-PAR/HomePAR';
import HomeADM from './src/pages/ADM/Home/HomeADM';
import ExpertiseCursoParceiro from './src/pages/ADM/ExpertisesCursos/expertise-cloud/ExpertiseCurso';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from './RootNavigation';
import Parceiros from './src/pages/ADM/Parceiros/Parceiros';
import ProgressoExpertise from './src/pages/ADM/progressoExepertises/ProgressoExpertise';
import Welcome from './src/pages/LOGIN/welcome';
import Login from './src/pages/LOGIN/login';
import CadastroStep1 from './src/pages/ADM/CadastroParceiros/step-1/step1';
import CadastroStep2 from './src/pages/ADM/CadastroParceiros/step-2/step2';
import CadastroStep3 from './src/pages/ADM/CadastroParceiros/step-3/step3';

const AppStack = createNativeStackNavigator()
//caso queira chamar um component de header que seja padrao nosso, em AppStack.Screen, dentro de option passar header: 'A header configurada nossa'


function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack.Navigator>
        <AppStack.Screen name='Inicio' component={Welcome} options={{ headerShown: false }} />
        <AppStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <AppStack.Screen name='HomeADM' component={HomeADM} options={{ headerShown: false }} />
        <AppStack.Screen name='Parceiros' component={Parceiros} options={{ headerShown: false }} />
        <AppStack.Screen name='ProgressoExpertise' component={ProgressoExpertise} options={{ headerShown: false }} />
        <AppStack.Screen name='ExpertiseCursoParceiro' component={ExpertiseCursoParceiro} options={{ headerShown: false }} />
        <AppStack.Screen name='CadastroStep1' component={CadastroStep1} options={{ headerShown: false }} />
        <AppStack.Screen name='CadastroStep2' component={CadastroStep2} options={{ headerShown: false }} />
        <AppStack.Screen name='CadastroStep3' component={CadastroStep3} options={{ headerShown: false }} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
