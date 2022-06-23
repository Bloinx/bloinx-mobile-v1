import React, { useEffect, useState } from 'react';
import {  Alert, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { PersonalizarRondas } from '../screens/personalizarRonda';
import { useRoute, useNavigation } from '@react-navigation/native';
import ProgressSteps from '../../../components/ProgressSteps/ProgressSteps';
import ProgressStep from '../../../components/ProgressSteps/ProgressStep';
import { ApruebaDeposito } from '../screens/apruebaDeposito';
import { PagaDeposito } from '../screens/pagaDeposito';

import { stylesMyRounds } from '../themeMyrounds/myroundsStyles';
import { styles } from '../../../theme/appTheme';
import { amigosArray } from '../../../constant/arregloAmigos';
import { stylesInicioSesion } from '../../login/themeLogin/loginTheme';


interface parametros  {
    numParticipantes: string,
    nombreRonda?: string,
    motivoRonda?: string,
    turno?: string
}

interface array {
        "userId": number,
        "imagenPerfil": string,
        "Nombre": string
}

export const StepperPersonalizarRondas = () =>  {
    const navigation = useNavigation();
    const route = useRoute();
    const [checkValue, statecheckValue] = useState(false);
    const [nombreRonda, outstatenombreRonda] = useState("");
    const [motivoRonda, outstatemotivoRonda]= useState("");
    const [pantalla, setStatepantalla]= useState("invita");
    const [arrayItems, setStatearrayItems]= useState<array[]>([]);
    const [contador, statecontador] = useState(1);
    var arrayInicial:array[]= [];
    const [turno, outstateturno]= useState("");
    const jsonParams = JSON.stringify(route.params);
    const parametros: parametros = {
        numParticipantes: JSON.parse(jsonParams).numParticipantes,
        nombreRonda: JSON.parse(jsonParams).nombreRonda,
        motivoRonda: JSON.parse(jsonParams).motivoRonda,
        turno: JSON.parse(jsonParams).turno,
    }

    //SEARCH COMPONENT
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([{}]);
    const [masterDataSource, setMasterDataSource] = useState([{}]);

    useEffect(() => {
        console.log(amigosArray);
        setFilteredDataSource(amigosArray);
        setMasterDataSource(amigosArray);
    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource and update FilteredDataSource
          const newData = masterDataSource.filter(function (item:any) {
            // Applying filter for the inserted text in search bar
            const itemData = item.Nombre
              ? item.Nombre.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
    };

    const ItemView = ({ item }) => {
        return (
          // Flat List Item
        <View style={{flexDirection:'row'}}>
            <Image
                source={require('../../../images/fotoP.png')} //Change your icon image here
                style={stylesSearch.ImageItemIcon}
            />
            <Text style={stylesSearch.itemStyle} onPress={() => getItem(item)}>
                {item.Nombre.toUpperCase()}
            </Text>
        </View>
        );
      };

    const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
      };

    const getItem = (item) => {
        // Function for click on an item
        if(contador>Number(parametros.numParticipantes)) {
            Alert.alert("Numero limite de amigos seleccionados");
        }else {
            if(arrayItems.filter((e:any) => e.userId === item.userId).length > 0)  {
                Alert.alert("Ya seleccionaste a este amigo (a).");
            } else {
                arrayInicial.push(item);
                setStatearrayItems(arrayInicial => [...arrayInicial, item]);
                statecontador(contador+1);
            }
        }
    };

    const seleccionaAmigos = () =>  {
        setStatepantalla('SeleccionaAmigos');
    }

    const eliminaTooltip = (id) => {
        for (let index = 0; index < arrayItems.length; index++) {
            console.log(arrayItems[index].userId, id);
            if(arrayItems[index].userId === id){
                arrayItems.splice(index, 1);
                statecontador(contador-1);
            }  
        }
        setStatearrayItems(arrayItems => [...arrayItems]);
    }

    const tooltip = () => {
        return(
        <View style={stylesSearch.contentPadreTool}>
            {
                arrayItems.map((buttonInfo:any) => (
                <View key={buttonInfo.userId} style={stylesSearch.contentTooltip}>
                    <View style={{alignItems:'center'}}>
                        <Text style={stylesSearch.textTooltip}>{buttonInfo.Nombre}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {eliminaTooltip(buttonInfo.userId)}}>
                            <Image
                                source={require('../../../images/iconEquisTooltip.png')} //Change your icon image here
                                style={stylesSearch.iconEquis}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
        );
    }

    const enviarInvitaciones = () => {
        console.log('listp',arrayItems,parametros.numParticipantes);
        navigation.navigate('InvitaAmigos',{
            amigosArray: arrayItems,
            numParticipantes: parametros.numParticipantes,
            nombreRonda:nombreRonda,
        });
    }

    return (
        <View style={{flex:1, marginTop:61, width:'100%'}}>
           {pantalla !== 'SeleccionaAmigos' ?
           <ProgressSteps
                activeStepIconBorderColor="#F58F98"  activeLabelColor="#FFFFFF" completedLabelColor="#FFFFFF"
                activeStepNumColor= "#F58F98" completedStepIconColor="#F58F98" completedCheckColor="#F58F98"
                progressBarColor="#B5B5B5" completedProgressBarColor="#F58F98" activeStepIconColor="#F58F98">
                <ProgressStep label="Turno" nextBtnText="Continuar" > 
                    <PersonalizarRondas numParticipantes={parametros.numParticipantes} 
                    nombreRonda={nombreRonda} outstatenombreRonda={outstatenombreRonda} 
                    outstatemotivoRonda={outstatemotivoRonda} outstateturno={outstateturno} 
                    />
                </ProgressStep>
                <ProgressStep label="Aprobar" nextBtnText="Aprobar" nextBtnDisabled={checkValue ? false : true} 
                     previousBtnText="">
                    <ApruebaDeposito checkValue={checkValue} statecheckValue={statecheckValue}/>
                </ProgressStep>
                <ProgressStep label="Pagar" nextBtnText="Pagar" previousBtnDisabled={true} previousBtnText="">
                    <PagaDeposito nombreRonda={nombreRonda} motivoRonda={motivoRonda} turno={turno} numParticipantes={parametros.numParticipantes}/>
                </ProgressStep>
                <ProgressStep label="Invita"  finishBtnText="Añadir amigos"  previousBtnDisabled={true} previousBtnText=""
                                onSubmit={pantalla === 'SeleccionaAmigos' ? enviaInvitaciones : seleccionaAmigos}>
                    <View style={{flex:1}}>
                        <View style={[styles.fondo, stylesMyRounds.ContainerRoundsStepper]}>    
                            <Text style={styles.textTitlePage}>Invita a tus amigos</Text>
                            <Text style={[stylesMyRounds.textitemTableMisPag, {color:'white',marginTop:8}]}>{parametros.numParticipantes} participantes</Text>
                        </View>
                    </View>
                </ProgressStep>
            </ProgressSteps> :
            
            <View style={{flex:1}}>
                <View style={[styles.fondo, stylesMyRounds.ContainerRoundsStepper]}>    
                    <View style={{width:'100%',height:'100%',backgroundColor:'white', marginTop:24, borderRadius:8, padding:16}}>
                        <Image
                            source={require('../../../images/searchIcon.png')} //Change your icon image here
                            style={stylesSearch.ImageStyle}
                        />
                        <TextInput
                            style={stylesSearch.textInputStyle}
                            onChangeText={(text) => searchFilterFunction(text)}
                            value={search}
                            underlineColorAndroid="transparent"
                            placeholder=""
                        />
                        <View style={{ height:arrayItems.length >0 ? 100:0}}>
                            <FlatList
                            style={{height:'100%'}}
                            data={[{}]}
                            renderItem={tooltip}
                            />
                        </View>

                        <View style={{top:10,marginBottom:10,height:arrayItems.length > 0 ? 400: 500}}>
                            <Text style={stylesSearch.txtTituloSug}>Sugerencias</Text>
                            <FlatList
                            style={{height:'100%'}}
                            data={filteredDataSource}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={ItemSeparatorView}
                            renderItem={ItemView}
                            />
                        </View>
                    
                    </View>
                </View>
                <View style={[stylesInicioSesion.contenedorButton, stylesInicioSesion.contenedorButtonPositionAB]}>
                    <TouchableOpacity
                            style={[stylesInicioSesion.button,stylesInicioSesion.colorButtonActive]}
                            onPress={enviarInvitaciones}>
                        <Text style= {[stylesInicioSesion.textoButton,stylesInicioSesion.colorLetraActive ]}>
                        Siguiente</Text>
                    </TouchableOpacity>
                </View>
            </View>
            }
        </View> 
    );
};

const stylesSearch = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    itemStyle: {
      height:66,
      width:'100%',
      padding: 10,
      color:'#121212',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.1,
    },
    textInputStyle: {
      height: 76,
      paddingLeft: 70,
      margin: 5,
      color:'white',
      backgroundColor: '#2B2D33',
      borderRadius:8,
      zIndex:1,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 20,
      letterSpacing: 0.1,

    },
    txtTituloSug:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 26,
        letterSpacing: 0.18,
        color:'#121212',
        marginLeft:10
    },
    ImageStyle: {
        padding: 10,
        top: 40,
        left:40,
        position:'absolute',
        zIndex:10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    ImageItemIcon: {
        marginLeft:10,
        marginTop:7
    },
    contentPadreTool:{
        paddingLeft:16,
        paddingRight:16,
        width:'100%', 
        flex:1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom:48,
    },
    contentTooltip: {
        maxWidth:'auto',
        height:32,
        borderRadius:28,
        backgroundColor:'#DEDEDE',
        padding:8,
        flexDirection:'row',
        marginTop:10
    },
    textTooltip: {
        color:'#2B2D33',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4,
        marginLeft:8,
        marginRight:8
    },
    iconEquis: {
        marginLeft:8,
        marginRight:8,
        marginTop:2,
        width:12,
        height:12,
        position:'relative',
    }
  });