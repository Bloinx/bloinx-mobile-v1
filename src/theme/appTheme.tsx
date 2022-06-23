import { StyleSheet } from "react-native";

//ESTILOS GENERALES
export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor:'black',
    },
    textCenter: {
        textAlign:'center',
    },
    textTitlePage:{
        color:'white',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 25,
        letterSpacing: 0.18,
    },
    headerContainer: {
        width:'100%',
        height:56,
        padding:13,
        backgroundColor: '#2B2D33',
        shadowColor: '#00000024',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginBottom: 20,
    },
    imageIconHamburgesa: {
        margin:8
    },
    imageIconBloinx: {
        marginLeft:8,
        marginTop: -5
    },
    containerNumWallet: {
        width: 123,
        height: 32,
        borderRadius: 28,
        marginRight: 23,
        backgroundColor: '#F58F98',
        shadowColor: '#00000024',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        justifyContent:"center",
        alignItems: 'center'
    },
    textNumWallet: {
        color:'white',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 1.25,
    }, 
    containerAnimated: {
        top:0,
        left:0,
        height:1000,
        width: '100%',
        backgroundColor: '#2B2D33',
    },
    containerItems: {
        marginTop:47,
        width:'100%',
        marginBottom:60,
    },
    itemContainerIn: {
        paddingLeft:28,
        paddingTop:10,
        height:40,
        width:'100%',
        flexDirection: 'row',
    },
    iconoItem: {
        marginRight:18
    },
    textItem: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16, 
        lineHeight: 20,
        letterSpacing: 0.1,
    }, 
    itemContainerActive: {
        backgroundColor:'#F58F98',
    },
    itemContainerDes: {
        backgroundColor:'#2B2D33',
    },
    itemTextActive: {
        color:'white',
    },
    itemTextDes: {
        color:'#B5B5B5',
    },
    textBilletera:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18, 
        lineHeight: 22,
        letterSpacing: 0.25,
        color:'white'
    },
    containerBilletera: {
        height:132,
        width:'100%',
        backgroundColor:'#FDE9EA',
        borderRadius:10,
        marginTop:12,
    },
    txtItemBilletera: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14, 
        lineHeight: 24,
        letterSpacing: 0.15,
        color:'#121212'
    },
    txtestrellas: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14, 
        lineHeight: 24,
        letterSpacing: 0.15,
        color:'white'
    },
    ImageStyleAgregar: {
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
});

