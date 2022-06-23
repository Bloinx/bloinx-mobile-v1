

import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, ScrollView, Image} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from '../../../theme/appTheme';
import { stylesHeaderInicioSesion } from '../../login/themeLogin/loginTheme';
import { stylesMyRounds } from '../themeMyrounds/myroundsStyles';
import { MisPagosTableComponent } from './misPagosTable';

export const  ListPagoAmigosComponent = () =>{
    const [expanded, statebtnexpanded] = useState(false);
    
    
    const toggleExpand=(bandera)=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        statebtnexpanded(bandera);
    }

  
  

    return (
        <ScrollView nestedScrollEnabled={true} style={{backgroundColor:'black', flex:1}}>
            <View style={{width:'100%', backgroundColor:'black'}}>  
                <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false) :  ()=>toggleExpand(true) }>
                    <View style={{width:'50%',flexDirection:'row'}}>
                        <Image style={{ marginTop:-2, marginRight:12}} source={require('../../../images/imagenPerfil.png')} /> 
                        <Text style={[stylesMyRounds.textitemTable]}>Sara</Text>
                    </View>
                    <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                </TouchableOpacity>
                <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                { expanded &&
                    <MisPagosTableComponent title={'hola'}/>
                }
                
            </View>
            <View style={{width:'100%', backgroundColor:'black'}}>  
                <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false) :  ()=>toggleExpand(true) }>
                    <View style={{width:'50%',flexDirection:'row'}}>
                        <Image style={{ marginTop:-2, marginRight:12}} source={require('../../../images/imagenPerfil.png')} /> 
                        <Text style={[stylesMyRounds.textitemTable]}>Sara</Text>
                    </View>
                    <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                </TouchableOpacity>
                <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                { expanded &&
                    <MisPagosTableComponent title={'hola'}/>
                }
                
            </View>
            <View style={{width:'100%', backgroundColor:'black'}}>  
                <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false) :  ()=>toggleExpand(true) }>
                    <View style={{width:'50%',flexDirection:'row'}}>
                        <Image style={{ marginTop:-2, marginRight:12}} source={require('../../../images/imagenPerfil.png')} /> 
                        <Text style={[stylesMyRounds.textitemTable]}>Sara</Text>
                    </View>
                    <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                </TouchableOpacity>
                <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                { expanded &&
                    <MisPagosTableComponent title={'hola'}/>
                }
                
            </View>
            <View style={{width:'100%', backgroundColor:'black'}}>  
                <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false) :  ()=>toggleExpand(true) }>
                    <View style={{width:'50%',flexDirection:'row'}}>
                        <Image style={{ marginTop:-2, marginRight:12}} source={require('../../../images/imagenPerfil.png')} /> 
                        <Text style={[stylesMyRounds.textitemTable]}>Sara</Text>
                    </View>
                    <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                </TouchableOpacity>
                <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                { expanded &&
                    <MisPagosTableComponent title={'hola'}/>
                }
                
            </View>
            <View style={{width:'100%', backgroundColor:'black'}}>  
                <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false) :  ()=>toggleExpand(true) }>
                    <View style={{width:'50%',flexDirection:'row'}}>
                        <Image style={{ marginTop:-2, marginRight:12}} source={require('../../../images/imagenPerfil.png')} /> 
                        <Text style={[stylesMyRounds.textitemTable]}>Sara</Text>
                    </View>
                    <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                </TouchableOpacity>
                <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                { expanded &&
                    <MisPagosTableComponent title={'hola'}/>
                }
                
            </View>
            <View style={{width:'100%', backgroundColor:'black'}}>  
                <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false) :  ()=>toggleExpand(true) }>
                    <View style={{width:'50%',flexDirection:'row'}}>
                        <Image style={{ marginTop:-2, marginRight:12}} source={require('../../../images/imagenPerfil.png')} /> 
                        <Text style={[stylesMyRounds.textitemTable]}>Sara</Text>
                    </View>
                    <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                </TouchableOpacity>
                <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                { expanded &&
                    <MisPagosTableComponent title={'hola'}/>
                }
                
            </View>
            <View style={{width:'100%', backgroundColor:'black'}}>  
                <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false) :  ()=>toggleExpand(true) }>
                    <View style={{width:'50%',flexDirection:'row'}}>
                        <Image style={{ marginTop:-2, marginRight:12}} source={require('../../../images/imagenPerfil.png')} /> 
                        <Text style={[stylesMyRounds.textitemTable]}>Sara</Text>
                    </View>
                    <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                </TouchableOpacity>
                <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                { expanded &&
                    <MisPagosTableComponent title={'hola'}/>
                }
                
            </View>
            <View style={{width:'100%', backgroundColor:'black'}}>  
                <TouchableOpacity  style={stylesMyRounds.containerListPagoAmigos} onPress={expanded ? ()=>toggleExpand(false) :  ()=>toggleExpand(true) }>
                    <View style={{width:'50%',flexDirection:'row'}}>
                        <Image style={{ marginTop:-2, marginRight:12}} source={require('../../../images/imagenPerfil.png')} /> 
                        <Text style={[stylesMyRounds.textitemTable]}>Sara</Text>
                    </View>
                    <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />
                </TouchableOpacity>
                <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                { expanded &&
                    <MisPagosTableComponent title={'hola'}/>
                }
                
            </View>
        </ScrollView>
    );

}