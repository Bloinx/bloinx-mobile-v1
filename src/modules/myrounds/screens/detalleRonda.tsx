import React, { useState } from 'react';
import * as Progress from 'react-native-progress';
import { useNavigation, useRoute } from '@react-navigation/native';
import {  Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { stylesInicioSesion } from '../../login/themeLogin/loginTheme';
import { stylesMyRounds } from '../themeMyrounds/myroundsStyles';
import { MisPagosTableComponent } from '../components/misPagosTable';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ListPagoAmigosComponent } from '../components/listPagoAmigos';

interface parametros  {
    id:String,
    title:String
}
const Tab = createMaterialTopTabNavigator();


export const DetalleRonda = () =>  {
    const route = useRoute();
    const navigation = useNavigation(); 
    const [btnDisabled, /*statebtnDisabled*/] = useState(false);
    const jsonParams = JSON.stringify(route.params);
    JSON.parse(jsonParams);
    const parametros: parametros = {
         id: JSON.parse(jsonParams).id,
         title: JSON.parse(jsonParams).title,
    }

    const regresar = () => {
        console.log('hola');
        navigation.navigate('MisRondas');
    }

    const pagar = () => {
        console.log('pagar');
    }

    console.log('holadetalle');
    return (
        <ScrollView >
            <View style={[styles.fondo, stylesMyRounds.ContainerRounds]}>    
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={regresar}>
                        <Image style={styles.iconoItem} source={require('../../../images/flechaIzquierdaBlanca.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textTitlePage}>{parametros.title}</Text>
                </View>

                <View style={stylesMyRounds.cardDetalleContainer}>
                    <View style={{marginBottom:24}}>
                        <Text style={stylesMyRounds.txtTituloCard}>Turno 2</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={stylesMyRounds.txtApagar}>A pagar</Text>
                        <Text style={stylesMyRounds.txtPrecioCard}>$10 cUSD</Text>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:40}}>
                        <View style={{width:136}}>
                            <TouchableOpacity
                                    disabled= {btnDisabled}
                                    style={[stylesInicioSesion.button, 
                                        ( btnDisabled === true) ? stylesInicioSesion.colorButtonDisabled : stylesInicioSesion.colorButtonActive]}
                                    onPress={pagar}
                            >
                                <Text style= {[stylesInicioSesion.textoButton,
                                            ( btnDisabled === true) ? stylesInicioSesion.colorButtonDisabled : stylesInicioSesion.colorLetraActive ]}>
                                Pagar</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{width:136}}>
                            <TouchableOpacity
                                    disabled= {!btnDisabled}
                                    style={[stylesInicioSesion.button, 
                                        ( !btnDisabled === true) ? stylesInicioSesion.colorButtonDisabled : stylesInicioSesion.colorButtonActive]}
                                    onPress={pagar}
                            >
                                <Text style= {[stylesInicioSesion.textoButton,
                                            ( !btnDisabled === true) ? stylesInicioSesion.colorButtonDisabled : stylesInicioSesion.colorLetraActive ]}>
                                Cobrar</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={{alignItems:'center',marginBottom:12}}>
                        <Text style={stylesMyRounds.txtApagar}>Total de pagos de ronda</Text>
                    </View>

                    <View style={{width:'100%', backgroundColor:'white', borderRadius:25}}>
                        <Progress.Bar progress={0.7} width={null} borderRadius={25} color={'#F58F98'} />
                    </View>

                    <View style={{marginTop:12, alignItems:'center'}}>
                        <Text style={stylesMyRounds.textitemTable}>10 de 12 participantes</Text>
                    </View>
                </View>

                <View style={stylesMyRounds.containerCardTiempo}>
                    <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:8}}>
                        <Text style={stylesMyRounds.txtTiempoRestante}>Tiempo restante</Text>
                        <Text style={stylesMyRounds.textitemTable}>17 días</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={stylesMyRounds.txtTiempoRestante}>Duración</Text>
                        <Text style={stylesMyRounds.textitemTable}>2 meses</Text>
                    </View>
                </View>

               <View style={{marginTop:32, backgroundColor:'red',height:370, marginBottom:20}}>
                <Tab.Navigator
                    screenOptions={{ 
                        tabBarInactiveTintColor:'#646464',
                        tabBarActiveTintColor:'#F58F98' ,
                        tabBarIndicatorStyle: {                        
                            backgroundColor: '#F58F98',
                        },
                        tabBarStyle:{
                        backgroundColor:'black',
                        borderTopColor: 'black',
                        borderTopWidth:2,
                        elevation:0,
                        
                    }} }
                    >
                        <Tab.Screen name="mispagos" children={()=><MisPagosTableComponent title={'mispagos'}/>} options={{tabBarLabel:'Mis pagos'}} />
                        <Tab.Screen name="pagosAmigos" children={()=><ListPagoAmigosComponent />} options={{tabBarLabel:'Pagos de amigos'}}/>
                    </Tab.Navigator>
               </View>
            </View>
        </ScrollView>
    );
};
