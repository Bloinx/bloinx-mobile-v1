import React, { useState } from 'react';
import {  LayoutAnimation, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from '../../../theme/appTheme';
import { stylesHeaderInicioSesion } from '../../login/themeLogin/loginTheme';
import { stylesMyRounds } from '../../myrounds/themeMyrounds/myroundsStyles';




export const PreguntasFrecuentes = () =>  {
    const [expanded, statebtnexpanded] = useState(false);
    const [id, statebtnid] = useState('0');

    const toggleExpand=(bandera:boolean,idCaja:string)=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        statebtnexpanded(bandera);
        statebtnid(idCaja);
    }

    return (
        <View style={[styles.fondo, stylesMyRounds.ContainerRounds]}>    
           <Text style={styles.textTitlePage}>Preguntas frecuentes</Text>
           <ScrollView nestedScrollEnabled={true} style={{backgroundColor:'black', flex:1, marginTop:26}}>
                <View style={{width:'100%', backgroundColor:'black'}}>  
                    <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false,'1') :  ()=>toggleExpand(true,'1') }>
                        <Text style={[stylesMyRounds.textitemTable]}>Aviso de privacidad</Text>
                        <Icon name={(expanded && id==='1') ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                    </TouchableOpacity>
                    { (expanded && id==='1') &&
                        <View style={{height:'auto', width:'100%', marginTop:16, marginBottom:16}}>
                            <Text style={stylesMyRounds.txtTiempoRestante}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fermentum ac semper amet, in. Ac tortor at aliquam ac vel eu faucibus maecenas eget.
                            </Text>
                        </View>
                    }
                    <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                </View>
                <View style={{width:'100%', backgroundColor:'black'}}>  
                    <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false,'2') :  ()=>toggleExpand(true,'2') }>
                        <Text style={[stylesMyRounds.textitemTable]}>A quien puedo invitar a una ronda?</Text>
                        <Icon name={(expanded && id==='2') ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                    </TouchableOpacity>
                    { (expanded && id==='2') &&
                        <View style={{height:'auto', width:'100%', marginTop:16, marginBottom:16}}>
                            <Text style={stylesMyRounds.txtTiempoRestante}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fermentum ac semper amet, in. Ac tortor at aliquam ac vel eu faucibus maecenas eget.
                            </Text>
                        </View>
                    }
                    <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                </View>

                <View style={{width:'100%', backgroundColor:'black'}}>  
                    <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false,'3') :  ()=>toggleExpand(true,'3') }>
                        <Text style={[stylesMyRounds.textitemTable]}>Que pasa con mi deposito de seguridad?</Text>
                        <Icon name={(expanded && id==='3') ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                    </TouchableOpacity>
                    { (expanded && id==='3') &&
                        <View style={{height:'auto', width:'100%', marginTop:16, marginBottom:16}}>
                            <Text style={stylesMyRounds.txtTiempoRestante}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fermentum ac semper amet, in. Ac tortor at aliquam ac vel eu faucibus maecenas eget.
                            </Text>
                        </View>
                    }
                    <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                </View>

                <View style={{width:'100%', backgroundColor:'black'}}>  
                    <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false,'4') :  ()=>toggleExpand(true,'4') }>
                        <Text style={[stylesMyRounds.textitemTable]}>Que pasa cuando un invitado no paga?</Text>
                        <Icon name={(expanded && id==='4') ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                    </TouchableOpacity>
                    { (expanded && id==='4') &&
                        <View style={{height:'auto', width:'100%', marginTop:16, marginBottom:16}}>
                            <Text style={stylesMyRounds.txtTiempoRestante}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fermentum ac semper amet, in. Ac tortor at aliquam ac vel eu faucibus maecenas eget.
                            </Text>
                        </View>
                    }
                    <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                </View>

                <View style={{width:'100%', backgroundColor:'black'}}>  
                    <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false,'5') :  ()=>toggleExpand(true,'5') }>
                        <Text style={[stylesMyRounds.textitemTable]}>Cómo saco mis ahorros?</Text>
                        <Icon name={(expanded && id==='5') ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                    </TouchableOpacity>
                    { (expanded && id==='5') &&
                        <View style={{height:'auto', width:'100%', marginTop:16, marginBottom:16}}>
                            <Text style={stylesMyRounds.txtTiempoRestante}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fermentum ac semper amet, in. Ac tortor at aliquam ac vel eu faucibus maecenas eget.
                            </Text>
                        </View>
                    }
                    <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                </View>

                <View style={{width:'100%', backgroundColor:'black'}}>  
                    <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false,'6') :  ()=>toggleExpand(true,'6') }>
                        <Text style={[stylesMyRounds.textitemTable]}>Como se calcula la calificación?</Text>
                        <Icon name={(expanded && id==='6') ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                    </TouchableOpacity>
                    { (expanded && id==='6') &&
                        <View style={{height:'auto', width:'100%', marginTop:16, marginBottom:16}}>
                            <Text style={stylesMyRounds.txtTiempoRestante}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fermentum ac semper amet, in. Ac tortor at aliquam ac vel eu faucibus maecenas eget.
                            </Text>
                        </View>
                    }
                    <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                </View>

                <View style={{width:'100%', backgroundColor:'black'}}>  
                    <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false,'7') :  ()=>toggleExpand(true,'7') }>
                        <Text style={[stylesMyRounds.textitemTable]}>Que pasa si tengo 2 cuentas?</Text>
                        <Icon name={(expanded && id==='7') ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                    </TouchableOpacity>
                    { (expanded && id==='7') &&
                        <View style={{height:'auto', width:'100%', marginTop:16, marginBottom:16}}>
                            <Text style={stylesMyRounds.txtTiempoRestante}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fermentum ac semper amet, in. Ac tortor at aliquam ac vel eu faucibus maecenas eget.
                            </Text>
                        </View>
                    }
                    <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                </View>

                <View style={{width:'100%', backgroundColor:'black'}}>  
                    <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false,'8') :  ()=>toggleExpand(true,'8') }>
                        <Text style={[stylesMyRounds.textitemTable]}>Contacto</Text>
                        <Icon name={(expanded && id==='8') ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                    </TouchableOpacity>
                    { (expanded && id==='8') &&
                        <View style={{height:'auto', width:'100%', marginTop:16, marginBottom:16}}>
                            <Text style={stylesMyRounds.txtTiempoRestante}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fermentum ac semper amet, in. Ac tortor at aliquam ac vel eu faucibus maecenas eget.
                            </Text>
                        </View>
                    }
                    <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                </View>
                
            </ScrollView>
        </View>
    );
}