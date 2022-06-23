import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { stylesMyRounds } from '../themeMyrounds/myroundsStyles';
import { stylesInicioSesion } from '../../login/themeLogin/loginTheme';
import SelectDropdown from 'react-native-select-dropdown';

interface parametros  {
    numParticipantes: string,
}

export const PersonalizarRondas = (
    {
    numParticipantes, 
    outstatenombreRonda,
    nombreRonda, 
    outstatemotivoRonda, 
    outstateturno,
} ) =>  {
    const tipoRonda = ["Negocio", "Negocio", "Negocio", "Negocio"];
    const arrayInicial = [];
    const arraySecuencial = [];
    const [id, stateid] = useState(0);

    console.log('jnjsdsdsdn',numParticipantes,nombreRonda);

    if(Number(numParticipantes)>0 && Number(numParticipantes)<=6){
       for (let index = 1; index <= Number(numParticipantes); index++) {
            arrayInicial.push(index);
       }
       console.log(arrayInicial);
    }else if(Number(numParticipantes)>6 && Number(numParticipantes)<=12){
        for (let index = 1; index <= 6; index++) {
            arrayInicial.push(index);
       }
        for (let index = 7; index <= Number(numParticipantes); index++) {
            arraySecuencial.push(index);
        }
        console.log(arraySecuencial);
     }


    const numeroSeleccionado = (numero:number) => {
        console.log(numero);
        stateid(numero);
        outstateturno(numero);
    }

    return (
        <View style={{flex:1}}>
            <View style={[styles.fondo, stylesMyRounds.ContainerRoundsStepper]}>
                <Text style={styles.textTitlePage}>Personaliza tu ronda</Text>
                <View style={{marginTop:24}}>
                    <Text style= {stylesInicioSesion.textoInput}>Nombre de la ronda</Text>
                    <TextInput
                        style={stylesInicioSesion.input}
                        onChangeText={(newValue) => outstatenombreRonda(newValue)}
                        value={nombreRonda}
                    />
                </View>
                <View style={{marginTop:24}}>
                        <Text style= {stylesInicioSesion.textoInput}>Motivo de la ronda</Text>
                        <SelectDropdown
                            defaultButtonText='seleciona el motivo'
                            buttonStyle= {stylesSelect.inputSelect}
                            buttonTextStyle = {stylesSelect.letraSelect}
                            data={tipoRonda}
                            dropdownIconPosition= 'right'
                            disableAutoScroll={false}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem,index,'aqui');
                            }} 
                            buttonTextAfterSelection={(selectedItem, index) => {
                                console.log(selectedItem,index);
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem;
                            }}
                            rowTextForSelection={(item, index) => {
                                console.log('itemss',item,index);
                                outstatemotivoRonda(item);
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item;
                            }}
                        />
                    </View>
                    <View style={{marginTop:24}}>
                        <Text style= {stylesInicioSesion.textoInput}>Turno para cobrar</Text>
                    </View>

                    <View style={{width:'100%', justifyContent:'space-around', flexDirection:'row', marginTop:24}}>
                       { arrayInicial.map(buttonInfo => (
                            <TouchableOpacity key={buttonInfo} style={[stylesMyRounds.btnPaginadorNumero,
                                (id === buttonInfo) ? stylesMyRounds.btnPaginadorNumeroActivo : stylesMyRounds.btnPaginadorNumeroInactivo
                                ]} onPress={() => {numeroSeleccionado(buttonInfo)}}>
                                    <Text style={stylesMyRounds.textbtnPaginador}>{buttonInfo}</Text>

                            </TouchableOpacity>
                        ))
                        } 
                    </View>
                    <View style={{width:'100%',  justifyContent:'space-around', flexDirection:'row', marginTop:25}}>
                       { arraySecuencial.map(buttonInfo => (
                            <TouchableOpacity key={buttonInfo} style={[stylesMyRounds.btnPaginadorNumero,
                                (id === buttonInfo) ? stylesMyRounds.btnPaginadorNumeroActivo : stylesMyRounds.btnPaginadorNumeroInactivo
                                ]} onPress={() => {numeroSeleccionado(buttonInfo)}}>
                                    <Text style={stylesMyRounds.textbtnPaginador}>{buttonInfo}</Text>

                            </TouchableOpacity>
                        ))
                        } 
                    </View>
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