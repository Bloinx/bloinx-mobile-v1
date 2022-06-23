import React from 'react';
import { Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { styles } from '../../../theme/appTheme';
import { stylesMyRounds } from '../themeMyrounds/myroundsStyles';




export const ApruebaDeposito = ({ checkValue, statecheckValue }) =>  {

    return (
        <View style={{flex:1}}>
            <View style={[styles.fondo, stylesMyRounds.ContainerRoundsStepper]}>
                <Text style={styles.textTitlePage}>Aprueba el depósito</Text>

                <View style={stylesMyRounds.contentApruebaDep}>
                    <Text style={stylesMyRounds.textTituloTable}>¿Qué es el depósito de seguridad?</Text>
                    <View style={{marginTop:15}}>
                        <Text style={stylesMyRounds.textinfoApruebaDep}>1. Este pago se devolverá al terminar la ronda y
                        se utilizará en caso de que pierda uno de sus pagos comprometidos.</Text>
                    </View>
                    <View style={{marginTop:5}}>
                        <Text style={stylesMyRounds.textinfoApruebaDep}>2. Si omite más de un pago, puede afectar
                        la devolución del depósito de seguridad de otros participantes en su grupo.</Text>
                    </View>
                    <View style={{marginTop:20, width:'100%',flexDirection:'row'}}>
                        <CheckBox
                            onCheckColor="white"
                            onTintColor="white"
                            onFillColor="white"
                            style={{
                                transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
                                marginRight:10,
                                marginTop:-10
                            }}
                            tintColors={{
                                true:'white',
                                false:'white',
                            }}
                            value={checkValue}
                            onValueChange={(newValue) => statecheckValue(newValue)}
                        />
                        <Text style={stylesMyRounds.textoCheck}>Entiendo cómo funciona el depósito.</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

