import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { stylesMyRounds } from '../themeMyrounds/myroundsStyles';
import { TableActiHistoComponent } from '../components/tableActivasHistorial';
import { useNavigation } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();

export const MisRondas = () =>  {
    const navigation = useNavigation();

    return (
        <View style={[styles.fondo, stylesMyRounds.ContainerRounds]}>    
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.textTitlePage}>Mis Rondas</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('CrearRondas')}}>
                    <Image style={styles.iconoItem} source={require('../../../images/botonMasRondas.png')} />
                </TouchableOpacity>

            </View>
            <View style={{backgroundColor:'black', width:'100%',height:'85%', marginTop:24}}>
                <Tab.Navigator
                screenOptions={{ 
                    tabBarInactiveTintColor:'#646464',
                    tabBarActiveTintColor:'#F58F98' ,
                    tabBarIndicatorStyle: {                        
                        backgroundColor: '#F58F98',
                      },
                    tabBarStyle:{
                    backgroundColor:'black',
                    borderTopColor: 'black',
                    borderTopWidth:2,
                    elevation:0,
                    
                }} }
                >
                    <Tab.Screen name="activas" children={()=><TableActiHistoComponent title={'activas'}/>} options={{tabBarLabel:'Activas (6)'}} />
                    <Tab.Screen name="historial" children={()=><TableActiHistoComponent title={'historial'}/>} options={{tabBarLabel:'Historial'}}/>
                </Tab.Navigator>
            </View>
        </View>
    );
};
