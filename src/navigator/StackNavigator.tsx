import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { InicioSession } from '../modules/login/screens/inicioSessionScreens';
import { Registro } from '../modules/login/screens/registroScreens';
import { RegistroConWallet } from '../modules/login/screens/registroConWalletScreens';
import { MisRondas } from '../modules/myrounds/screens/misRondas';
import { HeaderComponente } from '../components/headerComponent';
import { DetalleRonda } from '../modules/myrounds/screens/detalleRonda';
import { PreguntasFrecuentes } from '../modules/cuestions/screens/preguntasFrecuentes';
import { CrearRondas } from '../modules/myrounds/screens/crearRonda';
import { ConfirmarRondas } from '../modules/myrounds/screens/confirmarRonda';
import { StepperPersonalizarRondas } from '../modules/myrounds/components/stepperPersonalizaRonda';
import { InvitaAmigos } from '../modules/myrounds/screens/invitaAmigos';
import { MisInvitaciones } from '../modules/myrounds/screens/misInvitaciones';
import { VistaPerfil } from '../components/perfilVista';
import { EditarPerfil } from '../modules/perfil/screens/editarPerfil';
import { BuscadorAmigos } from '../modules/friends/screens/buscadorAmigo';
import { topCincuenta } from '../modules/top/screens/topPrincipal';


const Stack = createStackNavigator();


export const  StackNavigator = () => {

  return (
    <Stack.Navigator
      //initialRouteName='InicioSession' primera ruta siempre
      screenOptions={() => ({
        cardStyle:{
          backgroundColor : 'black',
        },
      })}
    >
      <Stack.Screen name="InicioSession" options={{headerShown: false}} component={InicioSession} />
      <Stack.Screen name="Registro" options={{headerShown: false}} component={Registro} />
      <Stack.Screen name='RegistroConWallet' options={{headerShown: false}} component={RegistroConWallet} />
      <Stack.Screen name='MisRondas' options={{ header: () => <HeaderComponente  /> }}  component={MisRondas} />
      <Stack.Screen name='DetalleRonda' options={{ header: () => <HeaderComponente  /> }} component={DetalleRonda} />
      <Stack.Screen name='PreguntasFrecuentes' options={{ header: () => <HeaderComponente  /> }} component={PreguntasFrecuentes} />
      <Stack.Screen name='CrearRondas' options={{ header: () => <HeaderComponente  /> }} component={CrearRondas} />
      <Stack.Screen name='ConfirmarRondas' options={{ header: () => <HeaderComponente  /> }} component={ConfirmarRondas} />
      <Stack.Screen name='StepperPersonalizarRondas' options={{ header: () => <HeaderComponente  /> }} component={StepperPersonalizarRondas} />
      <Stack.Screen name='InvitaAmigos' options={{ header: () => <HeaderComponente  /> }} component={InvitaAmigos} />
      <Stack.Screen name='MisInvitaciones' options={{ header: () => <HeaderComponente  /> }} component={MisInvitaciones} />
      <Stack.Screen name='VistaPerfil' options={{ header: () => <HeaderComponente  /> }} component={VistaPerfil} />
      <Stack.Screen name='EditarPerfil' options={{ header: () => <HeaderComponente  /> }} component={EditarPerfil} />
      <Stack.Screen name='BuscadorAmigos' options={{ header: () => <HeaderComponente  /> }} component={BuscadorAmigos} />
      <Stack.Screen name='topCincuenta' options={{ header: () => <HeaderComponente  /> }} component={topCincuenta} />
    </Stack.Navigator>
  );
}