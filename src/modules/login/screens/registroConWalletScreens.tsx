import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {  Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { HeaderRegIni } from '../components/headerRegistroSesion';
import { stylesHeaderInicioSesion, stylesInicioSesion } from '../themeLogin/loginTheme';
import { styles } from '../../../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};


export const RegistroConWallet = ({ navigation }: Props) =>  {
    const [muestraExito, stateMuestraExito] = useState(false);


    const moduloMisRondas = ()=>{
        console.log('registrate');
        navigation.navigate('MisRondas');
    };

    const  siguienteMisRondas = (tipo:String) => {
        console.log('voy a misrondas',tipo);
        stateMuestraExito(true);
    };


    return (
        <View style={{flex:1}}>

                <HeaderRegIni title="Registro"/>
                {!muestraExito ? 
                <ScrollView style={{padding:24}}>
                    <Text style= {stylesInicioSesion.textoISWallet}>Para poder participar en Bloinx, 
                            es necesario contar con una wallet de Metamask o Valora.</Text>
                    <TouchableOpacity
                            style={[stylesInicioSesion.button,stylesInicioSesion.colorButtonActive]}
                            onPress={() => siguienteMisRondas('Metamask')}
                    >
                        <Text style= {[stylesInicioSesion.textoButton,stylesInicioSesion.colorLetraActive]}>
                        Metamask</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            style={[stylesInicioSesion.button,stylesInicioSesion.colorButtonActive]}
                            onPress={() => siguienteMisRondas('Valora')}
                    >
                        <Text style= {[stylesInicioSesion.textoButton,stylesInicioSesion.colorLetraActive]}>
                        Valora</Text>
                    </TouchableOpacity>
                    <View style={{marginTop: 24, marginBottom:24}}>
                        <Text style= {stylesInicioSesion.textoInformativo}>Esta información no será compartida con nadie.</Text>
                        <Text style= {stylesInicioSesion.textoInformativo}>Revisa nuestro
                            <Text style={{textDecorationLine:'underline', fontWeight: 'bold'}}> Aviso de privacidad</Text>
                        </Text>
                    </View>


                    <View style= {[stylesHeaderInicioSesion.lineaHorizontal]}></View>

                    <View style= {{flexDirection:'row', marginTop:26}}>
                        <Image  source={require('../../../images/iconoWallet.png')} />
                        <Text style= {[stylesInicioSesion.textIconWallet, stylesInicioSesion.textIconWalletColor]}>
                            ¿Aún no cuentas con tu wallet?</Text>
                    </View>

                    <View style={stylesInicioSesion.contenedorInfoWallet}>
                        <View style= {{flexDirection:'row'}}>
                            <Image  source={require('../../../images/MetaMask_Fox.png')} />
                            <Text style= {[stylesInicioSesion.textInfoWalletTitle]}>Metamask</Text>
                        </View>
                        <View style= {{marginTop:13}}>
                            <Text style= {[stylesInicioSesion.textIconWallet,stylesInicioSesion.textInfoWalletColor]}>
                                • Lorem ipsum dolor sit amet, consectetur.</Text>
                            <Text style= {[stylesInicioSesion.textIconWallet,stylesInicioSesion.textInfoWalletColor]}>
                                • Lorem ipsum dolor sit amet.</Text>
                            <Text style= {[stylesInicioSesion.textIconWallet,stylesInicioSesion.textInfoWalletColor]}>
                                • Lorem ipsum dolor sit amet, consectetur.</Text>
                        </View>

                        <View style= {{marginTop:12, alignItems:'center'}}>
                            <Text style={stylesInicioSesion.textInfoWalletLink}>Crea una</Text>
                        </View>
                    </View>

                    <View style={stylesInicioSesion.contenedorInfoWallet}>
                        <View style= {{flexDirection:'row'}}>
                            <Image  source={require('../../../images/valoraIcon.png')} />
                            <Text style= {[stylesInicioSesion.textInfoWalletTitle]}>Valora</Text>
                        </View>
                        <View style= {{marginTop:13}}>
                            <Text style= {[stylesInicioSesion.textIconWallet,stylesInicioSesion.textInfoWalletColor]}>
                                • Lorem ipsum dolor sit amet, consectetur.</Text>
                            <Text style= {[stylesInicioSesion.textIconWallet,stylesInicioSesion.textInfoWalletColor]}>
                                • Lorem ipsum dolor sit amet.</Text>
                            <Text style= {[stylesInicioSesion.textIconWallet,stylesInicioSesion.textInfoWalletColor]}>
                                • Lorem ipsum dolor sit amet, consectetur.</Text>
                        </View>

                        <View style= {{marginTop:12, alignItems:'center'}}>
                            <Text style={stylesInicioSesion.textInfoWalletLink}>Crea una</Text>
                        </View>
                    </View>
                    <View style={{marginBottom:50}}></View>

                </ScrollView> : 
                <View style={{padding:24,  flex: 4}}>

                    <View style={{alignItems: 'center', width:'100%', marginTop:40}}>
                        <Image style={stylesInicioSesion.iconoExito} source={require('../../../images/iconoExito.png')} />
                        <Text style= {[stylesInicioSesion.textTitleExito]}>¡Todo listo!</Text>
                        <Text style= {[stylesInicioSesion.textoISWallet, styles.textCenter]}>Comienza con tu primera ronda,
                        paga en tiempo para subir de rating y acumular puntos.</Text>
                    </View>
                </View>}

                {muestraExito ? 
                    <View style={[stylesInicioSesion.contenedorButton, stylesInicioSesion.contenedorButtonPositionR]}>
                        <TouchableOpacity
                                style={[stylesInicioSesion.button,stylesInicioSesion.colorButtonActive]}
                                onPress={moduloMisRondas}
                        >
                            <Text style= {[stylesInicioSesion.textoButton, stylesInicioSesion.colorLetraActive ]}>
                            Continuar</Text>
                        </TouchableOpacity>
                    </View>
                :
                    <View></View>}

        </View>
    );
};
