import React, { useState } from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../theme/appTheme';
import { stylesMyRounds } from '../themeMyrounds/myroundsStyles';
import {Slider} from '@miblanchard/react-native-slider';
import { stylesInicioSesion } from '../../login/themeLogin/loginTheme';

export const CrearRondas = () =>  {
    const navigation = useNavigation();
    const [contador, statecontador] = useState(1);
    const [progressSlider, stateprogressSlider] = useState(3);
    const [recibeTotal, staterecibeTotal] = useState(0);
    const [id, stateid] = useState('0');
    const [btnInicial, statebtnInicial] = useState(false);
    const [btnIncrementaUno, stateIncrementaUno] = useState(false);
    const [btnIncrementaDos, stateIncrementaDos] = useState(false);
    const [btnIncrementaTres, stateIncrementaTres] = useState(false);
    const [btnIncrementaCuatro, stateIncrementaCuatro] = useState(false);
    const [optionSelect, stateoptionSelect] = useState('Semanal');
    const [btnDisabled, /*statebtnDisabled*/] = useState(false);

    const seleccionaTipo = (tipo:string) => {
        console.log(tipo);
        stateoptionSelect(tipo);
    }

    const numeroSeleccionado = (numero:string) => {
        console.log(numero);
        stateprogressSlider(3); 
        staterecibeTotal(0);
        stateid(numero);
    }

    const siguiente = () => {
        navigation.navigate('ConfirmarRondas',{
            numParticipantes: id,
            pagarPorTurno: progressSlider,
            recibirPorTurno: recibeTotal,
            duracion: optionSelect
        });
    }

    const paginator = () => {
        var arrayInicial= ['3','4','5','6','7','8'];
        var arraySecuencialUno= ['4','5','6','7','8','9'];
        var arraySecuencialDos= ['5','6','7','8','9','10'];
        var arraySecuencialTres= ['6','7','8','9','10','11'];
        var arraySecuencialCuatro= ['7','8','9','10','11','12'];
        

        return (
                !btnInicial ? 
                arrayInicial.map(buttonInfo => (
                    <TouchableOpacity key={buttonInfo} style={[stylesMyRounds.btnPaginadorNumero,
                        (id === buttonInfo) ? stylesMyRounds.btnPaginadorNumeroActivo : stylesMyRounds.btnPaginadorNumeroInactivo
                        ]} onPress={() => {numeroSeleccionado(buttonInfo)}}>
                        <Text style={stylesMyRounds.textbtnPaginador}>{buttonInfo}</Text>
                    </TouchableOpacity>
                  )): 
                  btnIncrementaUno ? 

                arraySecuencialUno.map(buttonInfo => (
                <TouchableOpacity key={buttonInfo} style={[stylesMyRounds.btnPaginadorNumero,
                    (id === buttonInfo) ? stylesMyRounds.btnPaginadorNumeroActivo : stylesMyRounds.btnPaginadorNumeroInactivo
                    ]} onPress={() => {numeroSeleccionado(buttonInfo)}}>
                    <Text style={stylesMyRounds.textbtnPaginador}>{buttonInfo}</Text>
                </TouchableOpacity>
                )): btnIncrementaDos ? 

                arraySecuencialDos.map(buttonInfo => (
                <TouchableOpacity key={buttonInfo} style={[stylesMyRounds.btnPaginadorNumero,
                    (id === buttonInfo) ? stylesMyRounds.btnPaginadorNumeroActivo : stylesMyRounds.btnPaginadorNumeroInactivo
                    ]} onPress={() => {numeroSeleccionado(buttonInfo)}}>
                    <Text style={stylesMyRounds.textbtnPaginador}>{buttonInfo}</Text>
                </TouchableOpacity>
                )): btnIncrementaTres ? 

                arraySecuencialTres.map(buttonInfo => (
                <TouchableOpacity key={buttonInfo} style={[stylesMyRounds.btnPaginadorNumero,
                    (id === buttonInfo) ? stylesMyRounds.btnPaginadorNumeroActivo : stylesMyRounds.btnPaginadorNumeroInactivo
                    ]} onPress={() => {numeroSeleccionado(buttonInfo)}}>
                    <Text style={stylesMyRounds.textbtnPaginador}>{buttonInfo}</Text>
                </TouchableOpacity>
                )): btnIncrementaCuatro ? 

                arraySecuencialCuatro.map(buttonInfo => (
                <TouchableOpacity key={buttonInfo} style={[stylesMyRounds.btnPaginadorNumero,
                    (id === buttonInfo) ? stylesMyRounds.btnPaginadorNumeroActivo : stylesMyRounds.btnPaginadorNumeroInactivo
                    ]} onPress={() => {numeroSeleccionado(buttonInfo)}}>
                    <Text style={stylesMyRounds.textbtnPaginador}>{buttonInfo}</Text>
                </TouchableOpacity>
                )):null
            
        );
    }

    const accionAvanzaRetrocede = (accion:string) =>{
        console.log(accion,contador);
        switch (accion) {
            case 'avanza':
                statecontador(contador+1);
                console.log('avanza',contador);
            break;
            case 'retrocede':
                statecontador(contador-1);
                console.log('retrocede',contador);
            break;
            
            default:
                console.log('no hay mas');
            break;
        }

        switch (contador) {
            case 1:
                statebtnInicial(true);
                stateIncrementaUno(true);
                stateIncrementaDos(false);
                stateIncrementaTres(false);
                stateIncrementaCuatro(false);
            break;
            case 2:
                statebtnInicial(true);
                stateIncrementaUno(false);
                stateIncrementaDos(true);
                stateIncrementaTres(false);
                stateIncrementaCuatro(false);
            break;
            case 3:
                statebtnInicial(true);
                stateIncrementaUno(false);
                stateIncrementaDos(false);
                stateIncrementaTres(true);
                stateIncrementaCuatro(false);
            break;
    
            case 4:
                statebtnInicial(true);
                stateIncrementaUno(false);
                stateIncrementaDos(false);
                stateIncrementaTres(false);
                stateIncrementaCuatro(true);
                statecontador(3);
            break;

            case 0:
                statebtnInicial(false);
                stateIncrementaUno(false);
                stateIncrementaDos(false);
                stateIncrementaTres(false);
                stateIncrementaCuatro(false);
                statecontador(1);
            break;
        
            default:
                console.log('no hay mas');
            break;
        }
    }

    return (
        <View style={{flex:1}}>
            <View style={[styles.fondo, stylesMyRounds.ContainerRounds]}>    
                <Text style={styles.textTitlePage}>Crear nueva ronda</Text>
                <Text style={stylesMyRounds.textNumParticipantes}>Número de participantes</Text>

                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:18, width:'100%'}}>
                    { btnInicial ?

                        <TouchableOpacity  style={[stylesMyRounds.btnPaginadorNumero,
                            stylesMyRounds.btnPaginadorNumeroInactivo
                            ]} onPress={() => {accionAvanzaRetrocede('retrocede')}}>
                            <Text style={stylesMyRounds.textbtnPaginador}>-</Text>
                        </TouchableOpacity>
                    
                            : null
                    }
                    
                    {paginator()}

                    { (!btnInicial || btnIncrementaUno || btnIncrementaDos || btnIncrementaTres || !btnIncrementaCuatro ) ?
                        <TouchableOpacity  style={[stylesMyRounds.btnPaginadorNumero,
                            stylesMyRounds.btnPaginadorNumeroInactivo
                            ]} onPress={() => {accionAvanzaRetrocede('avanza')}}>
                            <Text style={stylesMyRounds.textbtnPaginador}>+</Text>
                        </TouchableOpacity>
                    : null
                    }

                </View>

                <Text style={stylesMyRounds.textNumParticipantes}>Monto por periodo</Text>

                <View style={{width:'100%', marginTop:21, marginBottom:25}}>
                    <Slider
                        minimumValue={3}
                        maximumValue={50}
                        value={progressSlider}
                        onValueChange={value => {
                            let valorEntero = Number(value.toString());
                            var valorTotal = (Math.round(valorEntero));
                            var recibe = (valorTotal * Number(id)) - valorTotal;
                            staterecibeTotal(recibe);
                            stateprogressSlider(valorTotal); 
                        }}
                        thumbStyle={{backgroundColor:'#F58F98'}}
                        trackStyle={{backgroundColor:'#F58F98'}}
                        minimumTrackTintColor='#F58F98'
                    />
                </View>

                <View style={stylesMyRounds.containerTotales}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={stylesMyRounds.textTotales}>Monto pagado por ronda</Text>
                        <Text style={stylesMyRounds.textTotalesRes}>${progressSlider} cUSD</Text>
                    </View>    
                    <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:8}}>
                        <Text style={stylesMyRounds.textTotales}>Tu recíbiras</Text>
                        <Text style={stylesMyRounds.textTotalesRes}>${recibeTotal} cUSD</Text>
                    </View> 
                </View>

                <Text style={stylesMyRounds.textNumParticipantes}>Duración de ronda</Text>

                <View style= {[stylesInicioSesion.contentButtonsChek,stylesMyRounds.widthGen]}>
                    <TouchableOpacity
                            style={[stylesInicioSesion.buttonCheck,
                                    (optionSelect === 'Semanal') ? stylesInicioSesion.buttonCheckActive : stylesInicioSesion.buttonCheckDisabled]}
                            onPress={() => seleccionaTipo('Semanal')}
                    >
                        <Text style={stylesInicioSesion.textoInput}>Semanal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            style={[stylesInicioSesion.buttonCheck,
                                    (optionSelect === 'Quincenal') ? stylesInicioSesion.buttonCheckActive : stylesInicioSesion.buttonCheckDisabled]}
                            onPress={() => seleccionaTipo('Quincenal')}
                    >
                        <Text style={stylesInicioSesion.textoInput}>Quincenal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            style={[stylesInicioSesion.buttonCheck,
                                    (optionSelect === 'Mensual') ? stylesInicioSesion.buttonCheckActive : stylesInicioSesion.buttonCheckDisabled]}
                            onPress={() => seleccionaTipo('Mensual')}
                    >
                        <Text style={stylesInicioSesion.textoInput}>Mensual</Text>
                    </TouchableOpacity>
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
                    Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
