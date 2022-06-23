import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { stylesMyRounds } from '../../myrounds/themeMyrounds/myroundsStyles';
import { amigosArray } from '../../../constant/arregloAmigos';
import { useNavigation } from '@react-navigation/native';


export const BuscadorAmigos = () =>  {
    const [search, setSearch] = useState('');
    const [muestraAmigosPrueba, setmuestraAmigosPrueba] = useState(false);

    const searchFilterFunction = (text:string) => {
        if(text!==''){
            setmuestraAmigosPrueba(true);    
        }else {
            setmuestraAmigosPrueba(false);
        }
    }
    const navigation = useNavigation(); 

   /* const [filteredDataSource, setFilteredDataSource] = useState<array[]>([]);
    const [masterDataSource, setMasterDataSource] = useState<array[]>([]);
    const [arrayItems, setStatearrayItems]= useState<array[]>([]);
    var arrayInicial:any;

    useEffect(() => {
        console.log(amigosArray);
        setFilteredDataSource(amigosArray);
        setMasterDataSource(amigosArray);
    }, []);
    
    const searchFilterFunction = (text) => {
        console.log(text);
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
          //arrayInicial.push(newData);
          setStatearrayItems(arrayItems => [...arrayItems, newData]);
          console.log('arrayItems',arrayItems);
          setSearch(text); 
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
    };*/

    const verPerfil = (id:any) => {
        console.log(id);
        navigation.navigate('VistaPerfil', {
            amigo:true,
            estrellas:"",
            totalRecibido: "",
            topCincuenta:false
        });
    }

    return (
        <ScrollView >
            <View style={[styles.fondo, stylesMyRounds.ContainerRounds]}>
                <Text style={styles.textTitlePage}>Tus amigos</Text>
                <View style={{width:'100%',height:'100%',backgroundColor:'black',borderRadius:8, paddingTop:16}}>
                        <TouchableOpacity style={stylesSearch.ImageStyle} onPress={()=>{searchFilterFunction(search)}}>
                            <Image source={require('../../../images/searchIcon.png')} />
                        </TouchableOpacity>
                        <TextInput style={stylesSearch.textInputStyle} value={search} onChangeText={setSearch}
                            underlineColorAndroid="transparent" placeholder=""/>

                    {muestraAmigosPrueba ?
                        <View style={stylesSearch.contentPadreTool}>
                            <View style={{width:'100%', marginTop:32,}} >
                                {amigosArray.map((buttonInfo:any) => (
                                <View key={buttonInfo.userId}>
                                    <TouchableOpacity onPress={() => {verPerfil(buttonInfo.userId)}}>
                                        <View  style={[stylesMyRounds.contentTooltipInvita,{flexDirection:'row', justifyContent:'space-between'}]}>
                                            <View style={{width:'95%', flexDirection:'row'}}>
                                                <Image style={{}}
                                                        source={require('../../../images/fotoP.png')} />
                                                <View style={{alignItems:'center', marginLeft:12,marginTop:3}}>
                                                    <Text style={stylesMyRounds.textitemTable}>{buttonInfo.Nombre}</Text>
                                                </View>
                                            </View>
                                            <View>
                                                {/*<TouchableOpacity onPress={() => {eliminaTooltip(buttonInfo.userId)}}>
                                                    <Image
                                                        style={{marginTop:10,marginRight:10}}
                                                        source={require('../../../images/masIcono.png')} //Change your icon image here
                                                
                                                    />
                                    </TouchableOpacity>*/}
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style= {{marginTop:0, marginBottom:15, width:'100%', height:1, backgroundColor:'#2E2E2E'}}></View>
                                </View>))}
                            </View>
                        </View> : null}
                </View>
            </View>
        </ScrollView>
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
        top: 30,
        left:25,
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