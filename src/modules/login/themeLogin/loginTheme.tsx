import { StyleSheet } from "react-native";

export const stylesHeaderInicioSesion = StyleSheet.create({
    headerSesion: {
        flexDirection:'row',
        height: 84,
        width: '100%',
        paddingLeft: 24,
        paddingTop: 15,
        paddingBottom: 12,
        paddingRight: 24,
    },
    imageLogo : {
        width: 147,
        height: 64,
    },
    lineaVertical : {
        height: 40,
        width: 1,
        backgroundColor: '#646464',
        left: '50%',
        marginTop: 15,
        marginBottom: 24,
    },
    textoIS : {
        left: '70%',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: '#FFFFFF',
    },
    contenedorLineHori:{
        width: '100%', 
        paddingTop: 14, 
        paddingLeft:24, 
        paddingRight:24, 
        paddingBottom:0,
    },
    lineaHorizontal: {
        width: '100%',
        height: 1,
        backgroundColor: '#646464',
    },
});


export const stylesInicioSesion = StyleSheet.create({
    textoInput: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25,
        color: '#FFFFFF',
    },
    input: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.15,
        color:'white',
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
    textoRegistrate: {
        
    },
    contenedorButton : {
        bottom:0 ,
        width:'100%',
        padding: 24,
    },
    contenedorButtonPositionR: {
        position:'relative',
    },
    contenedorButtonPositionAB: {
        position:"absolute",
    },
    button: {
        width: '100%',
        height: 46,
        borderRadius: 5,
        padding: 14,
        alignItems: 'center',
        marginTop:24
    },
    colorButtonModal: {
        backgroundColor: 'white',
    },
    colorButtonActive: {
        backgroundColor: '#F58F98',
    },
    colorButtonDisabled: {
        backgroundColor: '#EBEBEB',
    },
    colorLetraDisabled : {
        color: '#B5B5B5',
    },
    colorLetraModal: {
        color: '#F58F98',
    },
    colorLetraActive: {
        color: 'white',
    },
    textoButton: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.25,
    },
    textoISWallet: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.25,
        color:'white',
    },
    textoInformativo: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 16,
        letterSpacing: 0.4,
        color: '#B5B5B5',
    },
    textIconWallet: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: '#FFFFFF',
        marginLeft: 10
    },
    textIconWalletColor: {
        color: '#FFFFFF',
    },
    contenedorInfoWallet: {
        marginTop: 23,
        padding: 16,
        width: '100%',
        height: 173,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
    },
    textInfoWalletColor: {
        color:'black',
    },
    textInfoWalletTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: '#000000',
        marginLeft: 12,
        marginTop: 5
    },
    textInfoWalletLink: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: '#F58F98',
        textDecorationLine:"underline"
    },
    iconoExito: {
        width:60,
        height:60,
        marginBottom:40
    },
    textTitleExito: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 24,
        lineHeight: 26,
        letterSpacing: 0.18,
        color: '#FFFFFF',
        marginBottom:16,
    },
    contentButtonsChek: {
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        justifyContent: 'space-around',
    },
    buttonCheck: {
        marginTop: 26,
        width: 105,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        padding: 12,
    },
    buttonCheckActive: {
        backgroundColor: '#F58F98',
    },
    buttonCheckDisabled: {
        backgroundColor: '#2B2D33',
    }
});