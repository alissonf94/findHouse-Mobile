import {StyleSheet} from 'react-native'


const Styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    sectionImage:{
        width:'100%',
        height: '50%'
    },
    background:{
        flex: 1,
        alignItems: 'flex-end',
        padding: 10,
    },
    icon: {
        marginRight: 20,
        marginTop: 40
    },
    title: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 26,
        marginTop: 10,
        marginLeft: 15,
        color:'#404F4C'
    },
    price:{
        fontFamily: 'Montserrat_700Bold',
        fontSize: 26,
        marginTop: 5,
        marginLeft: 15,
        color:'#404F4C'
    },
    sectionDescription:{
        marginTop: 25,
        marginLeft: 15,
        width: '90%'
    },
    textDescription:{
        fontSize: 16,
        fontFamily: 'Montserrat_100Thin',
        color: 'black',
        lineHeight: 25
    },
    sectionButton:{
        marginTop: 45,
        width: '100%',
        height: 65,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        width: '85%',
        height: '100%',
        borderRadius: 35,
        backgroundColor: '#ABC4AA',
        justifyContent: 'center'
    },
    textButton:{
        fontSize: 18,
        textAlign:'center',
        color: '#FFFFFF',
        fontFamily: 'Montserrat_700Bold',
    }
})

export default Styles