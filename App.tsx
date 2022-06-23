
import * as React from 'react';
//import { SafeAreaView, StatusBar, } from 'react-native';
//import { InicioSession } from './src/modules/login/screens/inicioSessionScreens';
//import { styles } from './src/theme/appTheme';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { StackNavigator } from './src/navigator/StackNavigator';

export const App = () =>  (
  <NavigationContainer >
    <StatusBar backgroundColor="black" barStyle="light-content"/>
    <StackNavigator></StackNavigator>
    {/*<SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content"/>
      <InicioSession />
    </SafeAreaView>*/}
  </NavigationContainer>
  );

