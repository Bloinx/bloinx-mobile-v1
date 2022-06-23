import React from 'react'
import {  Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { stylesHeaderInicioSesion } from '../../login/themeLogin/loginTheme';
import { stylesMyRounds } from '../themeMyrounds/myroundsStyles';

interface Props {
    title : String
}



export const TableActiHistoComponent = ({ title }: Props) =>  {
    const navigation = useNavigation(); 

    const detalleActivo = (id,titlePage)=>{
        console.log(id,title);
        navigation.navigate('DetalleRonda', { 'id':id,'title':titlePage },);
    }

    return(
        <View style={{flex:1, backgroundColor:'black'}}>
                <View style={stylesMyRounds.ContentTableAH}>
                    <ScrollView >
                        <View style={{flexDirection:'row'}}>
                            <View style={{justifyContent:'flex-start', width:'60%'}}>
                                <Text style={stylesMyRounds.textTituloTable}>Nombre de Ronda</Text>
                            </View>
                            <View style={{justifyContent:'center'}}>
                                <Text style={stylesMyRounds.textTituloTable}>Próximo pago</Text>
                            </View>
                        </View>
                        <View style={{height:1,width:'100%',backgroundColor: '#B5B5B5', marginTop:12}}></View>

                        
                        <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection:'row',marginTop:16}}>
                                <View style={{width:'60%'}}>
                                    <Text style={stylesMyRounds.textitemTable}>Primos</Text>
                                </View>
                                <View style={{flexDirection:'row', marginBottom:16}}>
                                    <View><Text style={stylesMyRounds.textitemTable}>09-Apr-2022</Text></View>
                                    <View>
                                        <TouchableOpacity
                                        onPress={()=> detalleActivo('1','Primos')}>
                                            <Image style={{marginLeft:27, marginTop:2}} source={require('../../../images/flechaDerechaBlanca.png')} /> 
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection:'row',marginTop:16}}>
                                <View style={{width:'60%'}}>
                                    <Text style={stylesMyRounds.textitemTable}>Amigos</Text>
                                </View>
                                <View style={{flexDirection:'row', marginBottom:16}}>
                                    <View><Text style={stylesMyRounds.textitemTable}>09-Apr-2022</Text></View>
                                    <View>
                                        <TouchableOpacity
                                        onPress={()=> detalleActivo('1','Amigos')}>
                                            <Image style={{marginLeft:27, marginTop:2}} source={require('../../../images/flechaDerechaBlanca.png')} /> 
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection:'row',marginTop:16}}>
                                <View style={{width:'60%'}}>
                                    <Text style={stylesMyRounds.textitemTable}>Escuela</Text>
                                </View>
                                <View style={{flexDirection:'row', marginBottom:16}}>
                                    <View><Text style={stylesMyRounds.textitemTable}>09-Apr-2022</Text></View>
                                    <View>
                                        <TouchableOpacity
                                        onPress={()=> detalleActivo('1','Escuela')}>
                                            <Image style={{marginLeft:27, marginTop:2}} source={require('../../../images/flechaDerechaBlanca.png')} /> 
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection:'row',marginTop:16}}>
                                <View style={{width:'60%'}}>
                                    <Text style={stylesMyRounds.textitemTable}>Primos</Text>
                                </View>
                                <View style={{flexDirection:'row', marginBottom:16}}>
                                    <View><Text style={stylesMyRounds.textitemTable}>09-Apr-2022</Text></View>
                                    <View>
                                        <TouchableOpacity
                                        onPress={()=> detalleActivo('1','Primos')}>
                                            <Image style={{marginLeft:27, marginTop:2}} source={require('../../../images/flechaDerechaBlanca.png')} /> 
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection:'row',marginTop:16}}>
                                <View style={{width:'60%'}}>
                                    <Text style={stylesMyRounds.textitemTable}>Amigos</Text>
                                </View>
                                <View style={{flexDirection:'row', marginBottom:16}}>
                                    <View><Text style={stylesMyRounds.textitemTable}>09-Apr-2022</Text></View>
                                    <View>
                                        <TouchableOpacity
                                        onPress={()=> detalleActivo('1','Amigos')}>
                                            <Image style={{marginLeft:27, marginTop:2}} source={require('../../../images/flechaDerechaBlanca.png')} /> 
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection:'row',marginTop:16}}>
                                <View style={{width:'60%'}}>
                                    <Text style={stylesMyRounds.textitemTable}>Escuela</Text>
                                </View>
                                <View style={{flexDirection:'row', marginBottom:16}}>
                                    <View><Text style={stylesMyRounds.textitemTable}>09-Apr-2022</Text></View>
                                    <View>
                                        <TouchableOpacity
                                        onPress={()=> detalleActivo('1','Escuela')}>
                                            <Image style={{marginLeft:27, marginTop:2}} source={require('../../../images/flechaDerechaBlanca.png')} /> 
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                        </View>
                    </ScrollView>
                </View>
        </View>
    );
}
