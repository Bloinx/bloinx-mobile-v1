import React from "react"
import { Image, Text, View } from "react-native"
import { stylesHeaderInicioSesion } from "../themeLogin/loginTheme"

interface Props {
    title : String
}

export const HeaderRegIni = ( { title }: Props) =>  {
    return(
        <View>
            <View style={stylesHeaderInicioSesion.headerSesion}>
                <View style={{width:'30%'}}>
                    <Image style={stylesHeaderInicioSesion.imageLogo} source={require('../../../images/logo_bloinx.png')} />
                </View>
                <View style={{width:'20%', alignItems:"center"}}>
                    <View style= {stylesHeaderInicioSesion.lineaVertical}></View>
                </View>
                <View style= {{paddingTop:25,width:'50%', alignItems:'center'}}>
                    <Text style= {stylesHeaderInicioSesion.textoIS}>{title}</Text>
                </View>
            </View>
            <View style= {stylesHeaderInicioSesion.contenedorLineHori}>
                <View style= {stylesHeaderInicioSesion.lineaHorizontal}></View>
            </View>
        </View>
    );
}