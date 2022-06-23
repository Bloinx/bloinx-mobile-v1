import { StyleSheet } from "react-native";

//ESTILOS GENERALES
export const stylesMyRounds = StyleSheet.create({
    ContainerRounds: {
        marginTop:81,
        paddingLeft:21,
        paddingRight:21,
        width:'100%'
    },
    ContentTableAH:{
        width:'100%',
        padding:16,
        backgroundColor:'#2B2D33',
        borderRadius:10,
        marginTop:24,
        maxHeight:360
    },
    textTituloTable:{
        color:'white',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    textitemTable:{
        color:'white',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    textitemEstatus:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    estatusColorPendiente:{
        color:'white',
    },
    estatusColorAceptada:{
        color:'#8AD828',
    },
    estatusColorExpirada:{
        color:'#FFBF60',
    },
    estatusColorRechazada:{
        color:'#FF6472',
    },
    cardDetalleContainer:{
        width:'100%',
        height:354,
        borderRadius:10,
        backgroundColor:'#2B2D33',
        padding:16,
        marginTop:24
    },
    txtTituloCard:{
        color:'white',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 22,
        lineHeight: 26,
        letterSpacing: 0.18,
    },
    txtApagar:{
        color:'white',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.25,
        marginBottom:8,
    },
    txtModal:{
        color:'#000000',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.1,
        marginBottom:8,
    },
    txtPrecioCard:{
        color:'white',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21.09,
        letterSpacing: 0.1,
        marginBottom:24,
    },
    containerCardTiempo: {
        width:'100%',
        height:80,
        borderRadius:10,
        backgroundColor:'#2B2D33',
        marginTop:16,
        padding:16,
    },
    txtTiempoRestante:{
        color:'#B5B5B5',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    textitemTableMisPag:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    textColorNoPagado: {
        color:'#FF6472'
    },
    textColorPagado: {
        color:'white'
    },
    textColorPendiente: {
        color:'#FFBF60'
    },
    textColorCobro: {
        color:'#8AD828'
    },
    containerListPagoAmigos:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:72,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: 'black',
    },
    textNumParticipantes: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 16,
        letterSpacing: 0.4,
        color:'#B5B5B5',
        marginTop:18,
    },
    btnPaginadorNumero:{
        width:32,
        height:38,
        borderRadius:5,
        paddingTop:6,
        paddingBottom:6,
        marginRight:14,
        alignItems:"center",
    },
    btnPaginadorNumeroInactivo:{
        backgroundColor:'#2B2D33',
    },
    btnPaginadorNumeroActivo:{
        backgroundColor:'#F58F98',
    },
    textbtnPaginador: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0.25,
        color:'#FFFFFF',
    },
    containerTotales: {
        width:'100%',
        height:88,
        borderRadius:4,
        backgroundColor: '#2B2D33',
        padding:16,
        marginBottom:20
    },
    textTotales: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25,
        color:'#FFFFFF',
    },
    textTotalesRes: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.1,
        color:'#FFFFFF',
    },
    widthGen: {
        width:'100%'
    },
    contentResumenRonda:{
        width:'100%',
        height:'auto',
        backgroundColor: '#2B2D33',
        padding:14,
        marginTop:24,
        borderRadius:4
    },
    texteditaRonda: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: 0.25,
        color: '#F58F98',
    },
    textRondaTopCincuenta: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4,
        color: '#2B2D33',
    },
    textinfoRondaTitulo: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 24,
        letterSpacing: 0.1,
        color:'#B5B5B5',
        marginBottom:4,
    },
    textinfoApruebaDep: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: "400",
        fontSize: 13,
        lineHeight: 24,
        letterSpacing: 0.1,
        color:'#B5B5B5',
        marginBottom:4,
    },
    textinfoRonda: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 24,
        letterSpacing: 0.1,
        color:'white',
        marginBottom:4,
    },
    ContainerRoundsStepper: {
        paddingLeft:21,
        paddingRight:21,
        width:'100%'
    },
    contentApruebaDep: {
        width:'100%',
        height:270,
        backgroundColor:'#2B2D33',
        padding:16,
        marginTop:14,
        borderRadius:5
    },
    textoCheck: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 16,
        letterSpacing: 0.4,
        color: 'white',
    },
    contentTooltipInvita:{
        width:'100%',
        height:64,

    }
})