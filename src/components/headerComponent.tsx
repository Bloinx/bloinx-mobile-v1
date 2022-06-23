import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import {  Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';



export const HeaderComponente = () =>  {
    const navigation = useNavigation(); 
    const route = useRoute();
    const [showMenu, setShowMenu] = useState(true);
    const [currentTab, setCurrentTab] = useState('Mis Rondas');
    const iconMisRondas = require('../images/iconMisrondas.png');
    const iconTop = require('../images/topIconInac.png');
    const iconPerfil = require('../images/perfilIconDES.png');
    const iconAmigos = require('../images/amigosIconDes.png');
    const iconTutoriales = require('../images/tutorialesIcondes.png');
    const iconPreguntas = require('../images/preguntasIconDes.png');
    const iconSesion = require('../images/cerrarSesIconDes.png');

    const iconMisRondasActive = require('../images/iconMisrondas.png');
    const iconTopActive = require('../images/topIconInac.png');
    const iconPerfilActive = require('../images/perfilIconDES.png');
    const iconAmigosActive = require('../images/amigosIconDes.png');
    const iconTutorialesActive = require('../images/tutorialesIcondes.png');
    const iconPreguntasActive = require('../images/preguntasIconDes.png');
    const iconSesionActive = require('../images/cerrarSesIconDes.png');

    const openORcloseMenu = (menuShow: boolean)=> {
        setShowMenu(menuShow);
    }

    useEffect(() => {
        rutaActual(route.name);
    });

    const rutaActual = (nameRuta:String) => {
        console.log('ruta acutal',nameRuta);
        switch (nameRuta) {
            case 'MisRondas':
                setCurrentTab('Mis Rondas');
                break;
            case 'DetalleRonda':
                setCurrentTab('Mis Rondas');
                break;
            case 'VistaPerfil':
                setCurrentTab('Perfil');
                break;
            case 'EditarPerfil':
                setCurrentTab('Perfil');
                break;
            case 'PreguntasFrecuentes':
                setCurrentTab('Preguntas frecuentes');
                break;
            case 'BuscadorAmigos':
                setCurrentTab('Amigos');
                break;
            case 'topCincuenta':
                setCurrentTab('Top 50');
                break;
            default:
                break;
        }
    }

    const TabButton = (currentTab, setCurrentTab, title, icon, iconActive,ruta) => {
        return (
      
          <TouchableOpacity onPress={() => {
            
            if (title === 'Cerrar') {
                setCurrentTab('Mis Rondas');
                setShowMenu(true);
                //mandar al login
              // Do your Stuff...
            } else {
                navigation.navigate(ruta);
                setCurrentTab(title);
                setShowMenu(true);
            }
          }}>

            <View style={[styles.itemContainerIn, currentTab === title ? styles.itemContainerActive : styles.itemContainerDes]}>
                <Image style={styles.iconoItem} source={ currentTab === title ? iconActive : icon} />
                <Text style={[styles.textItem, currentTab === title ? styles.itemTextActive : styles.itemTextDes]}>{title}</Text>
            </View>
          </TouchableOpacity>
        );
      }

    return(
        <View style={{flex:1}}>
            {
                showMenu ?
                <View style={styles.headerContainer}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>openORcloseMenu(false)}>
                            <Image style={styles.imageIconHamburgesa} source={require('../images/iconoHamburgesa.png')} /> 
                        </TouchableOpacity>
                            <Image style={styles.imageIconBloinx} source={require('../images/Minilogo_bloinx_.png')} /> 
                        </View>
                        <View style={styles.containerNumWallet}>
                            <Text style={styles.textNumWallet}>0x30...7ade</Text>
                        </View>
                    </View>
                </View>
            :
                <View style={styles.containerAnimated}>
                    <View style={{flexDirection:'row', justifyContent:'space-between',padding: 16,}}>
                        <Image style={styles.imageIconBloinx} source={require('../images/Minilogo_bloinx_.png')} /> 

                        <TouchableOpacity onPress={()=>openORcloseMenu(true)}>
                            <Image style={styles.imageIconHamburgesa} source={require('../images/closeMenuIcon.png')} /> 
                        </TouchableOpacity>
                    </View>

                    <View style= {styles.containerItems}>
                        <View style={{flexDirection:'column'}}>
                            {TabButton(currentTab, setCurrentTab, 'Mis Rondas',iconMisRondas,iconMisRondasActive,'MisRondas')}
                            {TabButton(currentTab, setCurrentTab, 'Top 50',iconTop,iconTopActive,'topCincuenta')}
                            {TabButton(currentTab, setCurrentTab, 'Perfil',iconPerfil,iconPerfilActive, 'VistaPerfil')}
                            {TabButton(currentTab, setCurrentTab, 'Amigos',iconAmigos, iconAmigosActive,'BuscadorAmigos')}
                            {TabButton(currentTab, setCurrentTab, 'Tutoriales',iconTutoriales, iconTutorialesActive,'InicioSession')}
                            {TabButton(currentTab, setCurrentTab, 'Preguntas frecuentes',iconPreguntas, iconPreguntasActive,'PreguntasFrecuentes')}
                            {TabButton(currentTab, setCurrentTab, 'Cerrar sesión',iconSesion,iconSesionActive ,'InicioSession')}

                        </View>
                    </View>

                    <View style={{paddingLeft:14, paddingRight:14}}>
                        <Text style={styles.textBilletera}>Mi billetera digital</Text>

                        <View style={styles.containerBilletera}>
                            <View style={{flexDirection:'row', justifyContent:'space-around', padding:16,}}>
                                <Text style={styles.txtItemBilletera}>Moneda digital</Text>
                                <Text style={styles.txtItemBilletera}>Balance</Text>
                            </View>
                            <View style={{alignItems:"center"}}>
                                <View style={{height:1,backgroundColor:'#121212',width:'80%'}}></View>
                            </View>

                            <View style={{flexDirection:'row', justifyContent:'space-around', padding:8,}}>
                                <View style={{flexDirection:'row'}}>
                                    <Image style={styles.imageIconHamburgesa} source={require('../images/cUSD.png')} /> 
                                    <View style={{flexDirection:'column'}}>
                                        <Text style={styles.txtItemBilletera}>Celo Dollar</Text>
                                        <Text style={styles.txtItemBilletera}>CUSD</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.txtItemBilletera}>100.1</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            }

        </View>
    );
}
