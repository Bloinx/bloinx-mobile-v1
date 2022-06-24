import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import {  ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { HeaderRegIni } from '../components/headerRegistroSesion';
import { stylesInicioSesion } from '../themeLogin/loginTheme';

interface Props extends StackScreenProps<any, any>{};

export const Registro = ({ navigation }: Props) =>  {
    const [correoForm, onChangeCorreo] = React.useState("");
    const [aliasForm, onChangeAlias] = React.useState("");
    const [password, onChangePassowrd] = React.useState("");
    const [passwordRep, onChangePassowrdRep] = React.useState("");
    const countries = ["Mexico", "Canada", "Australia", "Irlanda"]
    const [btnDisabled, /*statebtnDisabled*/] = useState(false);

    const registroWallet = () => {
        console.log('hola');
        navigation.navigate('RegistroConWallet');
    }
    
    return(
        <View style={{flex:1}}> 
            <ScrollView style={{flex:1}}>
                <HeaderRegIni title="Registro"/>
                <View style= {{padding:24}}>
                    <View>
                        <Text style= {stylesInicioSesion.textoInput}>Correo electrónico</Text>
                        <TextInput
                            style={stylesInicioSesion.input}
                            onChangeText={onChangeCorreo}
                            value={correoForm}
                        />
                    </View>

                    <View>
                        <Text style= {stylesInicioSesion.textoInput}>Alias</Text>
                        <TextInput
                            style={stylesInicioSesion.input}
                            onChangeText={onChangeAlias}
                            value={aliasForm}
                        />
                    </View>

                    <View>
                        <Text style= {stylesInicioSesion.textoInput}>Contraseña</Text>
                        <TextInput
                            secureTextEntry={true}
                            style={stylesInicioSesion.input}
                            onChangeText={onChangePassowrd}
                            value={password}
                        />
                    </View>

                    <View>
                        <Text style= {stylesInicioSesion.textoInput}>Repetir contraseña</Text>
                        <TextInput
                            secureTextEntry={true}
                            style={stylesInicioSesion.input}
                            onChangeText={onChangePassowrdRep}
                            value={passwordRep}
                        />
                    </View>
                    <View>
                        <Text style= {stylesInicioSesion.textoInput}>País</Text>
                        <SelectDropdown
                            defaultButtonText='País'
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
                </View>
                <View style={stylesInicioSesion.contenedorButton}>
                    <TouchableOpacity
                            disabled= {btnDisabled}
                            style={[stylesInicioSesion.button, 
                                ( btnDisabled === true) ? stylesInicioSesion.colorButtonDisabled : stylesInicioSesion.colorButtonActive]}
                            onPress={registroWallet}
                    >
                        <Text style= {[stylesInicioSesion.textoButton,
                                    ( btnDisabled === true) ? stylesInicioSesion.colorButtonDisabled : stylesInicioSesion.colorLetraActive ]}>
                        Siguiente</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

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