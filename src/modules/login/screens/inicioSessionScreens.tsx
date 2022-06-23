import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {  Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { HeaderRegIni } from '../components/headerRegistroSesion';
import { stylesInicioSesion } from '../themeLogin/loginTheme';

interface Props extends StackScreenProps<any, any>{};


export const InicioSession = ({ navigation }: Props) =>  {
    const [text, onChangeText] = React.useState("");
    const [textpassword, onChangeTextPassowrd] = React.useState('');
    const [btnDisabled, /*statebtnDisabled*/] = useState(false);
    const [muestraWallet, stateMuestraWallet] = useState(false);

    const  ingresaCorreo = () => {
        console.log('hola',btnDisabled);
        stateMuestraWallet(true);
    };

    const  siguienteMisRondas = (tipo:String) => {
        console.log('voy a misrondas',tipo);
        navigation.navigate('MisRondas');
        stateMuestraWallet(false);
    };

    const moduloRegistrate = ()=>{
        console.log('registrate');
        navigation.navigate('Registro');
    };

    return (
        <View style={{flex:1}}>
            <HeaderRegIni title="Iniciar sesión"/>
            {!muestraWallet ? 
            <View style={{padding:24}}>
                <View>
                    <Text style= {stylesInicioSesion.textoInput}>Correo electrónico</Text>
                    <TextInput
                        style={stylesInicioSesion.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                </View>
                <View>
                    <Text style= {stylesInicioSesion.textoInput}>Contraseña</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={stylesInicioSesion.input}
                        onChangeText={onChangeTextPassowrd}
                        value={textpassword}
                    />
                </View>
                <View style={{alignItems:'center', marginTop:12}}>
                    <Text style= {stylesInicioSesion.textoInput}>¿No tienes una cuenta?
                        <Text style={{textDecorationLine:'underline', fontWeight: 'bold'}} onPress={moduloRegistrate}> Regístrate</Text>
                    </Text>
                </View>
            </View> :
            <View style={{padding:24}}>
                <Text style= {stylesInicioSesion.textoISWallet}>Inicia sesión con tu wallet</Text>
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
                <View style={{marginTop: 24}}>
                    <Text style= {stylesInicioSesion.textoInformativo}>Esta información no será compartida con nadie.</Text>
                    <Text style= {stylesInicioSesion.textoInformativo}>Revisa nuestro
                        <Text style={{textDecorationLine:'underline', fontWeight: 'bold'}}> Aviso de privacidad</Text>
                    </Text>
                </View>
            </View>}

            {!muestraWallet ? 
            <View style={[stylesInicioSesion.contenedorButton, stylesInicioSesion.contenedorButtonPositionAB]}>
                <TouchableOpacity
                        disabled= {btnDisabled}
                        style={[stylesInicioSesion.button,
                            ( btnDisabled === true) ? stylesInicioSesion.colorButtonDisabled : stylesInicioSesion.colorButtonActive]}
                        onPress={ingresaCorreo}
                >
                    <Text style= {[stylesInicioSesion.textoButton,
                                   ( btnDisabled === true) ? stylesInicioSesion.colorButtonDisabled : stylesInicioSesion.colorLetraActive ]}>
                    Entrar</Text>
                </TouchableOpacity>
            </View>
            :
            <View></View>}
        </View>
    );
};
