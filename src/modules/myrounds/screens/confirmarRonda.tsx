import React, { useState } from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from '../../../theme/appTheme';
import { stylesMyRounds } from '../themeMyrounds/myroundsStyles';
import { stylesInicioSesion } from '../../login/themeLogin/loginTheme';

interface parametros  {
    numParticipantes: string,
    pagarPorTurno: number,
    recibirPorTurno: number,
    duracion: string
}

export const ConfirmarRondas = () =>  {
    const navigation = useNavigation();
    const route = useRoute();
    const [btnDisabled, /*statebtnDisabled*/] = useState(false);

    const jsonParams = JSON.stringify(route.params);
    const parametros: parametros = {
        numParticipantes: JSON.parse(jsonParams).numParticipantes,
        pagarPorTurno: JSON.parse(jsonParams).pagarPorTurno,
        recibirPorTurno: JSON.parse(jsonParams).recibirPorTurno,
        duracion: JSON.parse(jsonParams).duracion,
    }
    console.log(parametros);

    const siguiente = () => {
        navigation.navigate('StepperPersonalizarRondas',{
            numParticipantes:parametros.numParticipantes,
        });
    }

    const regresa = () => {
        navigation.navigate('CrearRondas');
    }

    return (
        <View style={{flex:1}}>
            <View style={[styles.fondo, stylesMyRounds.ContainerRounds]}>    
                <Text style={styles.textTitlePage}>Confirma nueva ronda</Text>

                <View style={stylesMyRounds.contentResumenRonda}>
                    <View style={{flexDirection:'row', justifyContent:'space-between',width:'100%'}}>


                        <View style={{flexDirection:'column',}}>
                            <Text style={stylesMyRounds.textTituloTable}>Resumen de selección</Text>
                            <View style={{marginTop:16}}>
                                <Text style={stylesMyRounds.textinfoRondaTitulo}>No. de participantes</Text>
                                <Text style={stylesMyRounds.textinfoRondaTitulo}>A pagar por turno</Text>
                                <Text style={stylesMyRounds.textinfoRondaTitulo}>A recibir en turno</Text>
                                <Text style={stylesMyRounds.textinfoRondaTitulo}>Duración de turno</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'column',alignItems:'flex-end'}}>
                            <TouchableOpacity onPress={regresa}>
                                <Text style={stylesMyRounds.texteditaRonda}>Editar</Text>
                            </TouchableOpacity>
                            <View style={{marginTop:16,alignItems:'flex-end'}}>
                                <Text style={stylesMyRounds.textinfoRonda}>{parametros.numParticipantes}</Text>
                                <Text style={stylesMyRounds.textinfoRonda}>${parametros.pagarPorTurno} CUSD</Text>
                                <Text style={stylesMyRounds.textinfoRonda}>${parametros.recibirPorTurno} CUSD</Text>
                                <Text style={stylesMyRounds.textinfoRonda}>{parametros.duracion}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={[stylesInicioSesion.contenedorButton, stylesInicioSesion.contenedorButtonPositionAB]}>
                <TouchableOpacity
                        disabled= {btnDisabled}
                        style={[stylesInicioSesion.button,
                            ( btnDisabled === true) ? stylesInicioSesion.colorButtonDisabled : stylesInicioSesion.colorButtonActive]}
                        onPress={siguiente}
                >
                    <Text style= {[stylesInicioSesion.textoButton,
                                ( btnDisabled === true) ? stylesInicioSesion.colorButtonDisabled : stylesInicioSesion.colorLetraActive ]}>
                    Crear ronda</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
