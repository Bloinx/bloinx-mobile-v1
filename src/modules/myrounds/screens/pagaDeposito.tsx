import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { stylesMyRounds } from '../themeMyrounds/myroundsStyles';
import { useNavigation } from '@react-navigation/native';




export const PagaDeposito = ({nombreRonda,motivoRonda,turno,numParticipantes}) =>  {
    const navigation = useNavigation();
    const regresa = () =>{
        navigation.navigate('ConfirmarRondas');
        navigation.navigate('StepperPersonalizarRondas',{
            numParticipantes:numParticipantes,
            nombreRonda: nombreRonda,
            motivoRonda: motivoRonda,
            turno: turno
        });

    }

    return (
        <View style={{flex:1}}>
            <View style={[styles.fondo, stylesMyRounds.ContainerRoundsStepper]}>
                <Text style={styles.textTitlePage}>Paga el depósito</Text>
                <View style={stylesMyRounds.contentResumenRonda}>
                    <View style={{flexDirection:'row', justifyContent:'space-between',width:'100%'}}>
                        <View style={{flexDirection:'column',}}>
                            <Text style={stylesMyRounds.textTituloTable}>Detalles de la ronda</Text>
                            <View style={{marginTop:16}}>
                                <Text style={stylesMyRounds.textinfoRondaTitulo}>Nombre de ronda</Text>
                                <Text style={stylesMyRounds.textinfoRondaTitulo}>Motivo de ronda</Text>
                                <Text style={stylesMyRounds.textinfoRondaTitulo}>Turno para recibir</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'column',alignItems:'flex-end'}}>
                            <TouchableOpacity onPress={regresa}>
                                <Text style={stylesMyRounds.texteditaRonda}>Editar</Text>
                            </TouchableOpacity>
                            <View style={{marginTop:16,alignItems:'flex-end'}}>
                                <Text style={stylesMyRounds.textinfoRonda}>{nombreRonda}</Text>
                                <Text style={stylesMyRounds.textinfoRonda}>{motivoRonda}</Text>
                                <Text style={stylesMyRounds.textinfoRonda}>{turno}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={stylesMyRounds.contentResumenRonda}>
                    <View style={{flexDirection:'row', justifyContent:'space-between',width:'100%'}}>
                        <View style={{flexDirection:'column',}}>
                            <Text style={stylesMyRounds.textTituloTable}>Detalles del pago</Text>
                            <View style={{marginTop:16}}>
                                <Text style={stylesMyRounds.textinfoRondaTitulo}>Depósito de seguridad</Text>
                                <Text style={stylesMyRounds.textinfoRondaTitulo}>Tarifa de servicio</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'column',alignItems:'flex-end'}}>
                        <TouchableOpacity >
                                <Text style={stylesMyRounds.texteditaRonda}></Text>
                            </TouchableOpacity>
                            <View style={{marginTop:16,alignItems:'flex-end'}}>
                                <Text style={stylesMyRounds.textinfoRonda}>10 cUSD</Text>
                                <Text style={stylesMyRounds.textinfoRonda}>0.5 cUSD</Text>
                            </View>
                        </View>
                    </View>
                </View>
            
            </View>
        </View>
    );
};

