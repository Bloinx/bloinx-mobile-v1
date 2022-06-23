import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {  Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { stylesMyRounds } from '../../myrounds/themeMyrounds/myroundsStyles';
import { stylesTop } from '../themeTop/themeTopStyles';
import { topDiez, topCincuentaArray } from '../../../constant/arregloAmigos';



export const topCincuenta = () =>  {
    const navigation = useNavigation(); 
    const [verTodos, stateverTodos] = useState(false);

    const irAperfil = () => {
        navigation.navigate('VistaPerfil', {
            amigo:false,
            estrellas:"",
            totalRecibido: "",
            topCincuenta:true
        });
        stateverTodos(false)
    }

    return (
        <View style={{flex:1}}>
            <View style={[styles.fondo, stylesMyRounds.ContainerRounds]}>
                { !verTodos ?
                    <ScrollView >
                        <Text style={styles.textTitlePage}>Top 50</Text>
                        <View style={{width:'100%',flexDirection:'row',padding:40, justifyContent:'space-between'}}>
                            <View style={{flexDirection:'column'}}>
                                <View >
                                    <Image style={{position:'absolute', zIndex:99 , right:0}} 
                                        source={require('../../../images/Medal_Silver.png')}
                                    />
                                    <Image style={{width:60,height:60, borderRadius:75, borderWidth:3, borderColor:'white'}}
                                        source={require('../../../images/numero3top.png')} />
                                </View>
                                <Text style={stylesTop.textNombreTop}>JohnDoe</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={[stylesTop.textNombreTop,{marginLeft:3}]}>4.9</Text>
                                    <Image style={{marginTop:7, marginLeft:10}}
                                        source={require('../../../images/estella.png')} />
                                </View>
                            </View>
                            <View style={{flexDirection:'column',alignItems:'center'}}>
                                <View>
                                    <Image style={{position:'absolute', zIndex:99 , right:0}} 
                                        source={require('../../../images/Medal_Gold.png')}
                                    />
                                    <Image style={{width:80,height:80, borderRadius:70, borderWidth:3, borderColor:'white'}}
                                        source={require('../../../images/numero1top.png')} />
                                </View>

                                <Text style={stylesTop.textNombreTop}>JohnDoe</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={[stylesTop.textNombreTop,{marginLeft:13}]}>5.0</Text>
                                    <Image style={{marginTop:7, marginLeft:10}}
                                        source={require('../../../images/estella.png')} />
                                </View>
                            </View>

                            <View style={{flexDirection:'column',alignItems:'center'}}>
                                <View >
                                    <Image style={{position:'absolute', zIndex:99 , right:0}} 
                                        source={require('../../../images/Medal_Bronze.png')}
                                    />
                                    <Image style={{width:56,height:56, borderRadius:75, borderWidth:3, borderColor:'white'}}
                                        source={require('../../../images/numero2top.png')} />
                                </View>
                                <Text style={stylesTop.textNombreTop}>JohnDoe</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={[stylesTop.textNombreTop,{marginLeft:13}]}>4.9</Text>
                                    <Image style={{marginTop:7, marginLeft:10}}
                                        source={require('../../../images/estella.png')} />
                                </View>
                            </View>
                        </View>

                        <View style={{width:'100%'}}>
                        {
                            topDiez.map((buttonInfo:any, index:number) => (
                            <View key={buttonInfo.posicion}>
                                <TouchableOpacity onPress={() => {irAperfil(buttonInfo.userId)}}>
                                    <View>
                                        <View  style={[stylesMyRounds.contentTooltipInvita,{flexDirection:'row', justifyContent:'space-between'}]}>
                                            <View style={{alignItems:'center', marginLeft:0,marginTop:13}}>
                                                <Text style={stylesTop.textNombreTop}>{buttonInfo.posicion}   {buttonInfo.Nombre}</Text>
                                            </View>
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={[stylesTop.textNombreTop,{marginLeft:13,marginTop:15}]}>{buttonInfo.estrellas}</Text>
                                                <Image style={{marginTop:18, marginLeft:10}}
                                                    source={require('../../../images/estella.png')} />
                                            </View>
                                        </View>
                                        <View style= {{marginTop:-10, marginBottom:15, width:'100%', height:1, backgroundColor:'#2E2E2E'}}></View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            ))}
                        </View>
                        <View style={{width:'100%', marginTop:15,marginBottom:30, alignItems:'flex-end'}}>
                            <TouchableOpacity onPress={()=>{stateverTodos(true)}}>
                                <Text style={[stylesTop.textVerTodos]}>Ver todos</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    :
                    <ScrollView>
                        <Text style={styles.textTitlePage}>Top 50</Text>
                        <View style={{width:'100%',marginTop:20}}>
                        {
                            topCincuentaArray.map((buttonInfo:any, index:number) => (
                            <View key={buttonInfo.posicion}>
                                <TouchableOpacity onPress={() => {irAperfil(buttonInfo.userId)}}>
                                    <View  style={[stylesMyRounds.contentTooltipInvita,{flexDirection:'row', justifyContent:'space-between'}]}>
                                        <View style={{alignItems:'center', marginLeft:0,marginTop:13}}>
                                            <Text style={stylesTop.textNombreTop}>{buttonInfo.posicion}   {buttonInfo.Nombre}</Text>
                                        </View>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={[stylesTop.textNombreTop,{marginLeft:13,marginTop:15}]}>{buttonInfo.estrellas}</Text>
                                            <Image style={{marginTop:18, marginLeft:10}}
                                                source={require('../../../images/estella.png')} />
                                        </View>
                                    </View>
                                    <View style= {{marginTop:-10, marginBottom:15, width:'100%', height:1, backgroundColor:'#2E2E2E'}}></View>
                                </TouchableOpacity>
                            </View>
                            ))}
                        </View>
                    </ScrollView>
                }
            </View>
        </View>
    );
};


