import React from 'react'
import {  ScrollView, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { stylesHeaderInicioSesion } from '../../login/themeLogin/loginTheme';
import { stylesMyRounds } from '../themeMyrounds/myroundsStyles';

interface Props {
    title : String
}



export const MisPagosTableComponent = ({ title }: Props) =>  {
    const navigation = useNavigation(); 
    console.log('mispagos');
    const detalleActivo = (id,titlePage)=>{
        console.log(id,title);
        navigation.navigate('DetalleRonda', { 'id':id,'title':titlePage },);
    }

    return(
        <View style={{flex:1, backgroundColor:'black'}}>
            <View style={stylesMyRounds.ContentTableAH}>
                <ScrollView nestedScrollEnabled={true}>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                        <View style={{width:'33%'}}>
                            <Text style={stylesMyRounds.textTituloTable}>Turno</Text>
                        </View>
                        <View style={{width:'33%'}}>
                            <Text style={stylesMyRounds.textTituloTable}>Límite</Text>
                        </View>
                        <View >
                            <Text style={stylesMyRounds.textTituloTable}>Acción</Text>
                        </View>
                    </View>
                    <View style={{height:1,width:'100%',backgroundColor: '#B5B5B5', marginTop:12}}></View>

                    
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row',marginTop:16, marginBottom:16}}>
                            <View style={{width:'33%',alignItems:'center'}}>
                                <Text style={[stylesMyRounds.textitemTableMisPag, stylesMyRounds.textColorPagado]}>1</Text>
                            </View>
                            <View style={{width:'33%',alignItems:'center'}}>
                                <Text style={[stylesMyRounds.textitemTableMisPag, stylesMyRounds.textColorPagado]}>09-Apr-2022</Text>
                            </View>
                            <View style={{width:'33%', alignItems:'center'}}>
                                <Text style={[stylesMyRounds.textitemTableMisPag, stylesMyRounds.textColorNoPagado]}>No pagado</Text>
                            </View>
                        </View>
                        <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                    </View>

                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row',marginTop:16, marginBottom:16}}>
                            <View style={{width:'33%',alignItems:'center'}}>
                                <Text style={[stylesMyRounds.textitemTableMisPag, stylesMyRounds.textColorPagado]}>2</Text>
                            </View>
                            <View style={{width:'33%',alignItems:'center'}}>
                                <Text style={[stylesMyRounds.textitemTableMisPag, stylesMyRounds.textColorPagado]}>09-Apr-2022</Text>
                            </View>
                            <View style={{width:'33%', alignItems:'center'}}>
                                <Text style={[stylesMyRounds.textitemTableMisPag, stylesMyRounds.textColorPagado]}>Pagado</Text>
                            </View>
                        </View>
                        <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                    </View>

                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row',marginTop:16, marginBottom:16}}>
                            <View style={{width:'33%',alignItems:'center'}}>
                                <Text style={[stylesMyRounds.textitemTableMisPag, stylesMyRounds.textColorPagado]}>3</Text>
                            </View>
                            <View style={{width:'33%',alignItems:'center'}}>
                                <Text style={[stylesMyRounds.textitemTableMisPag, stylesMyRounds.textColorPagado]}>09-Apr-2022</Text>
                            </View>
                            <View style={{width:'33%', alignItems:'center'}}>
                                <Text style={[stylesMyRounds.textitemTableMisPag, stylesMyRounds.textColorCobro]}>Cobro</Text>
                            </View>
                        </View>
                        <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                    </View>

                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row',marginTop:16, marginBottom:16}}>
                            <View style={{width:'33%',alignItems:'center'}}>
                                <Text style={[stylesMyRounds.textitemTableMisPag, stylesMyRounds.textColorPagado]}>4</Text>
                            </View>
                            <View style={{width:'33%',alignItems:'center'}}>
                                <Text style={[stylesMyRounds.textitemTableMisPag, stylesMyRounds.textColorPagado]}>09-Apr-2022</Text>
                            </View>
                            <View style={{width:'33%', alignItems:'center'}}>
                                <Text style={[stylesMyRounds.textitemTableMisPag, stylesMyRounds.textColorPendiente]}>Pendiente</Text>
                            </View>
                        </View>
                        <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
