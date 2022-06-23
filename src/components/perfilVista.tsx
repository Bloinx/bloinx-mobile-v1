import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {  Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Modal from "react-native-modal";
import { styles } from '../theme/appTheme';
import { stylesMyRounds } from '../modules/myrounds/themeMyrounds/myroundsStyles';
import { stylesHeaderInicioSesion, stylesInicioSesion } from '../modules/login/themeLogin/loginTheme';


interface parametros  {
    amigo?:boolean,
    estrellas?:string,
    totalRecibido?:string,
    topCincuenta?:boolean,
}


export const VistaPerfil = () =>  {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const [isToltipVisible, setisToltipVisible] = useState(false);
    const [isToltipVisibleAg, setisToltipVisibleAg] = useState(false);
    const [eliminadoAmigo, seteliminado] = useState(false);
    const route = useRoute();

    const editar = () => {
        console.log('editar');
        navigation.navigate('EditarPerfil');
    }

    const agregar = () => {
        setisToltipVisibleAg(true);
        seteliminado(false);
        setTimeout(() => {
            setisToltipVisibleAg(false);
        }, 2000);
    }

    const eliminar = () => {
        setModalVisible(!isModalVisible);
    }


    const eliminado = () => {
        seteliminado(true);
        setModalVisible(!isModalVisible);
        setisToltipVisible(true);
        setTimeout(() => {
            setisToltipVisible(false);
        }, 2000);
    }

    return (
        <ScrollView >
            <View style={[styles.fondo, stylesMyRounds.ContainerRounds]}>
                <View style={{flexDirection:'row', marginBottom:16}}>
                    <View style={{width:'95%',flexDirection:'row'}}>
                        <View>
                            <Image style={styles.iconoItem} source={require('../images/fotoPerfilPrincipal.png')} />
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <View style={{marginTop:12}}>
                                <Text style={styles.textTitlePage}>ValeMML</Text>
                            </View>
                            <View style={{flexDirection:'row',marginTop:5}}>
                                <Text style={styles.txtestrellas}>4.1</Text>
                                <Image style={{marginLeft:5,marginTop:2}} source={require('../images/estella.png')} />
                            </View>
                        </View>
                    </View>
                    <View>
                        {route.params === undefined ? 
                            <TouchableOpacity onPress={editar}>
                                    <Image style={{marginTop:12}} source={require('../images/iconoEditar.png')} />
                            </TouchableOpacity>
                            :
                            route.params?.amigo && !eliminadoAmigo ?
                            <TouchableOpacity onPress={eliminar}>
                                <Image style={{marginTop:12}} source={require('../images/iconoEliminar.png')} />
                            </TouchableOpacity>
                            : 
                            <TouchableOpacity onPress={agregar}>
                                <Image style={{marginTop:12}} source={require('../images/iconoAgregar.png')} />
                            </TouchableOpacity>
                            
                        }
                    </View>
                </View>
                <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>

                <View style={stylesMyRounds.contentResumenRonda}>
                    <View style={{flexDirection:'row', justifyContent:'space-between',width:'100%'}}>
                        <View style={{flexDirection:'column',}}>
                            <Text style={stylesMyRounds.textTituloTable}>Resumen de rondas</Text>
                            <View style={{marginTop:16}}>
                                <Text style={stylesMyRounds.textinfoRondaTitulo}>Total participadas</Text>
                                <Text style={stylesMyRounds.textinfoRondaTitulo}>Activas</Text>
                                {route.params === undefined ?  <Text style={stylesMyRounds.textinfoRondaTitulo}>Total recibido</Text> : null}
                            </View>
                        </View>
                        <View style={{flexDirection:'column',alignItems:'flex-end'}}>
                            <TouchableOpacity >
                                {  route.params?.topCincuenta ?
                                    <View style={{width:71, height:24,padding:4,alignItems:'center', backgroundColor:'#FFC960', borderRadius:28}}>
                                        <Text style={stylesMyRounds.textRondaTopCincuenta}>Top 50</Text>
                                    </View> : null
                                }
                            </TouchableOpacity>
                            <View style={{marginTop:16,alignItems:'flex-end'}}>
                                <Text style={stylesMyRounds.textinfoRonda}>200</Text>
                                <Text style={stylesMyRounds.textinfoRonda}>2</Text>
                                {route.params === undefined ? <Text style={stylesMyRounds.textinfoRonda}>$5,000 CUSD</Text> : null}
                            </View>
                        </View>
                    </View>
                </View>

                <Text style= {[stylesInicioSesion.textoInformativo,{marginTop:16}]}>Miembro desde abril 2020 | Costa Rica</Text>

                <View style={{width:'100%',alignItems:'center'}}>
                    <Modal isVisible={isModalVisible} style={{alignItems:'center'}}>
                        <View style={{  backgroundColor:'white',height:'auto', borderRadius:12, padding:26, width:'90%' }}>
                            <Text style={stylesMyRounds.txtModal}>¿Estas seguro de que deseas eliminar a este usuario de tu lista de amigos? </Text>
                            <TouchableOpacity onPress={eliminado}
                                    style={[stylesInicioSesion.button,stylesInicioSesion.colorButtonActive]}
                                    >
                                <Text style= {[stylesInicioSesion.textoButton,stylesInicioSesion.colorLetraActive ]}>
                                    Confirmar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={eliminar}
                                    style={[stylesInicioSesion.button,stylesInicioSesion.colorButtonModal,
                                        {borderWidth:1, borderColor:'#F58F98'}]}
                                    >
                                <Text style= {[stylesInicioSesion.textoButton,stylesInicioSesion.colorLetraModal ]}>
                                    Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>

                <View style={{width:'100%',alignItems:'center'}}>
                    <Modal isVisible={isToltipVisible} style={{alignItems:'center', position:'absolute', width:'100%',left:-10, bottom:0}} backdropColor="transparent">
                        <View style={{  backgroundColor:'#363636',height:'auto', borderRadius:8, padding:16, width:'90%',flexDirection:'row' }}>
                            <Image style={{marginRight:12, marginTop:4}} source={require('../images/exitoVerde.png')} />
                            <Text style={stylesMyRounds.textTotales}>Usuario eliminado</Text>
                        </View>
                    </Modal>
                </View>

                <View style={{width:'100%',alignItems:'center'}}>
                    <Modal isVisible={isToltipVisibleAg} style={{alignItems:'center', position:'absolute', width:'100%',left:-10, bottom:0}} backdropColor="transparent">
                        <View style={{  backgroundColor:'#363636',height:'auto', borderRadius:8, padding:16, width:'90%',flexDirection:'row' }}>
                            <Image style={{marginRight:12, marginTop:4}} source={require('../images/exitoVerde.png')} />
                            <Text style={stylesMyRounds.textTotales}>Usuario agregado a tu lista de amigos</Text>
                        </View>
                    </Modal>
                </View>
            </View>
        </ScrollView>
    );
};
