import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {  Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { styles } from '../../../theme/appTheme';
import { stylesMyRounds } from '../../myrounds/themeMyrounds/myroundsStyles';
import { stylesInicioSesion } from '../../login/themeLogin/loginTheme';
import SelectDropdown from 'react-native-select-dropdown';

interface Image {
    cropRect:         CropRect;
    data:             string;
    height:           number;
    mime:             string;
    modificationDate: string;
    path:             string;
    size:             number;
    width:            number;
}

interface CropRect {
    height: number;
    width:  number;
    x:      number;
    y:      number;
}


export const EditarPerfil = () =>  {
    const navigation = useNavigation(); 
    const [image, stateimage] = useState<Image>(); 
    const [Alias, onChangeAlias] = React.useState('Alias1909');
    const [text, onChangeText] = React.useState('correogrande@gmail.com');
    const countries = ["Mexico", "Canada", "Australia", "Irlanda"]
    const catInvitaciones = ["Todos","Solo amigos","Nadie"]
    console.log('guardar',image);

    const guardarImagen = () => {
        console.log('guardar',image);
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64:true
          }).then((image:any) => {
            console.log(image);
            stateimage(image);
        });
    }

    const guardar = () => {
        navigation.navigate('VistaPerfil');
    }

    return (
        <View style={{flex:1}}>
                <View style={[styles.fondo, stylesMyRounds.ContainerRounds]}>
                    <ScrollView >
                    <Text style={styles.textTitlePage}>Editar perfil</Text> 
                    <View  style={{width:'100%', alignItems:'center', marginTop:30, marginBottom:10}}>
                        {
                            image !== undefined ? 
                            <Image style={{width:130,height:130, borderRadius:75, borderWidth:3, borderColor:'white'}} source={{uri: `data:${image?.mime};base64,${image?.data}`}} />
                            : <View style={{width:130,height:130, borderRadius:75, borderWidth:3, borderColor:'white', backgroundColor:'black'}}></View>
                        }
                        <TouchableOpacity  onPress={guardarImagen}>
                            <Image
                                style={{width:30,height:30, top:-30, right:-60, position:'absolute'}}
                                source={require('../../../images/iconoCamara.png')} //Change your icon image here
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style= {stylesInicioSesion.textoInput}>Alias</Text>
                        <TextInput
                            style={stylesInicioSesion.input}
                            onChangeText={onChangeAlias}
                            value={Alias}
                        />
                    </View>
                    <View>
                        <Text style= {stylesInicioSesion.textoInput}>Correo electrónico</Text>
                        <TextInput
                            style={stylesInicioSesion.input}
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </View>
                    <View>
                        <Text style= {stylesInicioSesion.textoInput}>País</Text>
                        <SelectDropdown
                            defaultButtonText='País'
                            defaultValue={'Mexico'}
                            buttonStyle= {stylesSelect.inputSelect}
                            buttonTextStyle = {stylesSelect.letraSelect}
                            data={countries}
                            search={true}
                            dropdownIconPosition= 'right'
                            disableAutoScroll={false}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }} 
                            buttonTextAfterSelection={(selectedItem, index) => {
                                console.log(selectedItem,index);
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem;
                            }}
                            rowTextForSelection={(item, index) => {
                                console.log('itemss',item,index);
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item;
                            }}
                        />
                    </View>
                    <View>
                        <SelectDropdown
                            defaultButtonText='Invitaciones'
                            buttonStyle= {stylesSelect.inputSelect}
                            buttonTextStyle = {stylesSelect.letraSelect}
                            data={catInvitaciones}
                            search={true}
                            dropdownIconPosition= 'right'
                            disableAutoScroll={false}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }} 
                            buttonTextAfterSelection={(selectedItem, index) => {
                                console.log(selectedItem,index);
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem;
                            }}
                            rowTextForSelection={(item, index) => {
                                console.log('itemss',item,index);
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item;
                            }}
                        />
                    </View>
                    <View style={{marginBottom:70}}></View>
                    </ScrollView>
                </View>
                <View style={[stylesInicioSesion.contenedorButton, stylesInicioSesion.contenedorButtonPositionAB]}>
                    <TouchableOpacity
                            style={[stylesInicioSesion.button,stylesInicioSesion.colorButtonActive]}
                            onPress={guardar}>
                        <Text style= {[stylesInicioSesion.textoButton,stylesInicioSesion.colorLetraActive ]}>
                        Siguiente</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
};

const stylesSelect = StyleSheet.create({
    inputSelect: {
        padding: 12,
        marginTop: 8,
        width: '100%',
        height: 56,
        backgroundColor:'#2B2D33',
        marginBottom:20,
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#646464',
    },
    letraSelect: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.15,
        color:'white',
        textAlign: 'left'
    },
});
