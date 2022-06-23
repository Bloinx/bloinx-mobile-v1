import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { stylesHeaderInicioSesion, stylesInicioSesion } from '../../login/themeLogin/loginTheme';
import { stylesMyRounds } from '../themeMyrounds/myroundsStyles';



interface parametros  {
    numParticipantes: string,
    amigosArray: Array<arrayAmigos[]>,
    nombreRonda: string,
}

interface arrayAmigos {
    "userId": number,
    "imagenPerfil": string,
    "Nombre": string
}

export const MisInvitaciones = () =>  {
    const route = useRoute();
    const navigation = useNavigation();
    const [arrayItems, setStatearrayItems]= useState<arrayAmigos[]>([]);
    const jsonParams = JSON.stringify(route.params);
    const parametros: parametros = {
        numParticipantes: JSON.parse(jsonParams).numParticipantes,
        amigosArray: JSON.parse(jsonParams).amigosArray,
        nombreRonda: JSON.parse(jsonParams).nombreRonda,
    }
  
    console.log(arrayItems);
    console.log(parametros.numParticipantes);
    console.log(parametros.nombreRonda);
    

    console.log('arrayItems',arrayItems);
    const agregarNuevos = () => {
        console.log('manda al buscador')
    }

    const anadirmasAmigos=() => {
        console.log('invita amigos')
    }


    const regresar = () => {
        navigation.navigate('InvitaAmigos',{
            amigosArray: parametros.amigosArray,
            numParticipantes: parametros.numParticipantes,
            nombreRonda:parametros.nombreRonda,
        });
    }

    const comenzarRonda = () => {
        navigation.navigate('DetalleRonda', { 'id':'id','title':parametros.nombreRonda },);
    }

    return (
        <View style={{flex:1}}>
            { Number(parametros.numParticipantes) <= 5  ? 
                <ScrollView nestedScrollEnabled={true} style={{backgroundColor:'black', flex:1}}>
                    <View style={[styles.fondo, stylesMyRounds.ContainerRounds]}>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={regresar}>
                                <Image style={styles.iconoItem} source={require('../../../images/flechaIzquierdaBlanca.png')} />
                            </TouchableOpacity>
                            <Text style={styles.textTitlePage}>Tus invitaciones</Text>
                        </View>
    
                        <View style={{width:'100%', marginTop:32}}>
                        {
                            parametros.amigosArray.map((buttonInfo:any) => (
                            <View key={buttonInfo.userId}>
                                <View>
                                    <View  style={[stylesMyRounds.contentTooltipInvita,{flexDirection:'row', justifyContent:'space-between'}]}>
                                            <View style={{alignItems:'center', marginLeft:0,marginTop:13}}>
                                                <Text style={stylesMyRounds.textitemTable}>{buttonInfo.Nombre}</Text>
                                            </View>
                                                <View style={{alignItems:'center', marginLeft:0,marginTop:13}}>
                                                    <Text style={[stylesMyRounds.textitemEstatus,
                                                    (buttonInfo.Nombre==='Valeria' || buttonInfo.Nombre==='Ximena') ? stylesMyRounds.estatusColorPendiente: stylesMyRounds.estatusColorAceptada]}
                                                    >{(buttonInfo.Nombre==='Valeria' || buttonInfo.Nombre==='Ximena') ? "Pendiente": "Aceptada"}</Text>
                                                </View> 
                                    </View>
                                    <View style= {{marginTop:-10, marginBottom:15, width:'100%', height:1, backgroundColor:'#2E2E2E'}}></View>
                                </View>
                            </View>
                            ))}
                        </View>
    
                        <View style={{width:'100%'}}>
                            <TouchableOpacity
                                    style={[stylesInicioSesion.button,stylesInicioSesion.colorButtonActive]}
                                    onPress={anadirmasAmigos}>
                                <Text style= {[stylesInicioSesion.textoButton,stylesInicioSesion.colorLetraActive ]}>
                                +   Añadir invitados</Text>
                            </TouchableOpacity>
                        </View>
    
                        <View style={{marginTop:40}}>
                            <Text style={styles.textTitlePage}>Invitaciones rechazas y/o expiradas</Text>
                        </View>
    
                        <View>
                            <View  style={[stylesMyRounds.contentTooltipInvita,{flexDirection:'row', justifyContent:'space-between'}]}>
                                    <View style={{alignItems:'center', marginLeft:0,marginTop:13}}>
                                        <Text style={stylesMyRounds.textitemTable}>Ejemplo 1</Text>
                                    </View>
                                    <View style={{alignItems:'center', marginLeft:0,marginTop:13}}>
                                        <Text style={[stylesMyRounds.textitemEstatus,stylesMyRounds.estatusColorExpirada]}>Expirada</Text>
                                    </View> 
                            </View>
                            <View style= {{marginTop:-10, marginBottom:15, width:'100%', height:1, backgroundColor:'#2E2E2E'}}></View>
                            <View  style={[stylesMyRounds.contentTooltipInvita,{flexDirection:'row', justifyContent:'space-between'}]}>
                                    <View style={{alignItems:'center', marginLeft:0,marginTop:13}}>
                                        <Text style={stylesMyRounds.textitemTable}>Ejemplo 2</Text>
                                    </View>
                                    <View style={{alignItems:'center', marginLeft:0,marginTop:13}}>
                                        <Text style={[stylesMyRounds.textitemEstatus,stylesMyRounds.estatusColorRechazada]}>Rechazada</Text>
                                    </View> 
                            </View>
                            <View style= {{marginTop:-10, marginBottom:15, width:'100%', height:1, backgroundColor:'#2E2E2E'}}></View>
                        </View>

                        <View style={{marginBottom:40}}>
                            <Text style={stylesMyRounds.textNumParticipantes}>*Si un invitado rechaza o expira la invitación para 
                            la ronda deberás de invitar a alguien más para que su lugar sea ocupado.</Text>
                        </View>
                    </View>        
                </ScrollView>
                        :
                <View style={{flex:1}}>
                    <ScrollView nestedScrollEnabled={true} style={{backgroundColor:'black', flex:1}}>
                        <View style={[styles.fondo, stylesMyRounds.ContainerRounds]}>
                            <Text style={styles.textTitlePage}>Tus invitaciones</Text>
                            <View style={{width:'100%', marginTop:32}}>
                            {
                                parametros.amigosArray.map((buttonInfo:any, index:number) => (
                                <View key={buttonInfo.userId}>
                                    <View>
                                        <View  style={[stylesMyRounds.contentTooltipInvita,{flexDirection:'row', justifyContent:'space-between'}]}>
                                                <View style={{alignItems:'center', marginLeft:0,marginTop:13}}>
                                                    <Text style={stylesMyRounds.textitemTable}>{index+1}   {buttonInfo.Nombre}</Text>
                                                </View>
                                                    <View style={{alignItems:'center', marginLeft:0,marginTop:13}}>
                                                        <Text style={[stylesMyRounds.textitemEstatus,stylesMyRounds.estatusColorAceptada]}
                                                        >Aceptada</Text>
                                                    </View> 
                                        </View>
                                        <View style= {{marginTop:-10, marginBottom:15, width:'100%', height:1, backgroundColor:'#2E2E2E'}}></View>
                                    </View>
                                </View>
                                ))}
                            </View>
                        </View>
                        <View style={{height:100}}></View>
                    </ScrollView>
                    <View style={[stylesInicioSesion.contenedorButton, stylesInicioSesion.contenedorButtonPositionAB]}>
                        <TouchableOpacity
                                style={[stylesInicioSesion.button,stylesInicioSesion.colorButtonActive]}
                                onPress={comenzarRonda}>
                            <Text style= {[stylesInicioSesion.textoButton,stylesInicioSesion.colorLetraActive ]}>
                            Comenzar ronda</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    );
};

