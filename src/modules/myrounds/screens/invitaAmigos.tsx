import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { stylesHeaderInicioSesion, stylesInicioSesion } from '../../login/themeLogin/loginTheme';
import { stylesMyRounds } from '../themeMyrounds/myroundsStyles';


interface arrayAmigos {
    "userId": number,
    "imagenPerfil": string,
    "Nombre": string
}
interface parametros  {
    numParticipantes: string,
    amigosArray: Array<arrayAmigos[]>,
    nombreRonda: string,
}

export const InvitaAmigos = () =>  {
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
    
    const eliminaTooltip = (id) => {
        console.log(id);
    }

    const misInvitacionesScreen = () => {
        console.log('h');
        navigation.navigate('MisInvitaciones',{
            amigosArray: parametros.amigosArray,
            numParticipantes: parametros.numParticipantes,
            nombreRonda:parametros.nombreRonda,
        });
    }

    return (
        <View style={{flex:1}}>
             <ScrollView nestedScrollEnabled={true} style={{backgroundColor:'black', flex:1}}>
                <View style={[styles.fondo, stylesMyRounds.ContainerRounds]}>
                    <Image style={{width:'100%', marginTop:10, marginBottom:33, height:54}}
                        source={require('../../../images/stepper.png')} //Change your icon image here
                    />
                    <Text style={styles.textTitlePage}>Invita a tus amigos</Text>
                    <Text style={[stylesMyRounds.textitemTableMisPag, {color:'white',marginTop:8}]}>{parametros.numParticipantes} participantes</Text>

                    <View style={{width:'100%', marginTop:32,}}>
                    {
                        parametros.amigosArray.map((buttonInfo:any) => (
                        <View key={buttonInfo.userId}>
                            <View  style={[stylesMyRounds.contentTooltipInvita,{flexDirection:'row', justifyContent:'space-between'}]}>
                                    <View style={{width:'95%', flexDirection:'row'}}>
                                        <Image style={{}}
                                                source={require('../../../images/fotoP.png')} />
                                        <View style={{alignItems:'center', marginLeft:12,marginTop:3}}>
                                            <Text style={stylesMyRounds.textitemTable}>{buttonInfo.Nombre}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => {eliminaTooltip(buttonInfo.userId)}}>
                                            <Image
                                                style={{marginTop:10,marginRight:10}}
                                                source={require('../../../images/closeMenuIcon.png')} //Change your icon image here
                                        
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style= {{marginTop:0, marginBottom:15, width:'100%', height:1, backgroundColor:'#2E2E2E'}}></View>
                        </View>
                        ))}
                    </View>
                    <View style={{height:100}}>

                    </View>
                </View>
             </ScrollView>
            <View style={[stylesInicioSesion.contenedorButton, stylesInicioSesion.contenedorButtonPositionAB]}>
                <TouchableOpacity
                        style={[stylesInicioSesion.button,stylesInicioSesion.colorButtonActive]}
                        onPress={misInvitacionesScreen}>
                    <Text style= {[stylesInicioSesion.textoButton,stylesInicioSesion.colorLetraActive ]}>
                    Enviar invitaciones</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

