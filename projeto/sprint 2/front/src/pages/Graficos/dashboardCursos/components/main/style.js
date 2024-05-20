import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    body: {
        marginTop: '10%',
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        
    },

    bodyText: {
        color: '#313131',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: '-15%',
        marginBottom: '5%'
    },  
    fundo: {
        backgroundColor: '#F3F1F1',
        alignItems: 'center',
        marginTop: '10%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 'auto',
    },
    container: {
        backgroundColor: '#F3F1F1',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 'auto',
        marginBottom: 100
    },
    scrollViewContent: {
        justifyContent: "center",
        alignItems: "center",
       
    },

    buttonMenu: {
        borderRadius: 10,
        width: '92%',
        height: 130,
        marginTop: '5%',
        backgroundColor: '#FFFFFF',
        elevation: 2,
        alignContent: 'center',
        justifyContent: 'center',
    },



    buttonContainer: {
        width: '90%',
        height: 100,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },

    buttonGraph: {
        width: '40%',
        height: '100%',
        position: 'relative',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },

    buttonGraph2: {
        width: '40%',
        height: '100%',
        position: 'relative',
        alignContent: 'center',
        justifyContent: 'center',
        // backgroundColor: 'blue',
    },

    progressCircle: {
        height: '70%',
    },

    progressCircle2: {
        height: '65%',
    },

    progressTextCircle: {
        width: '100%',
        position: 'absolute', // Posição absoluta para sobrepor
        top: '41%', // Ajuste para centralizar verticalmente
        left: '0', // Ajuste para centralizar horizontalmente
        // backgroundColor: 'blue',
    },

    textCircle: {
        marginLeft: '40%',
        color: '#313131',
        fontSize: 16,
        fontWeight: 'bold',
    },

    buttonText: {
        width: '60%',
        height: '100%',
        flexDirection: 'column',
        marginTop: '-8%',
        marginLeft: '10%'

    },

    buttonTitle: {
        marginTop: '12%',
        marginLeft: '5%',
    },

    buttonSubTitle: {
        marginLeft: '5%',
    },

    textTitle: {
        fontSize: 18,
        color: '#313131',
        fontWeight: 'bold',
    },

    textSubTitle: {
        fontSize: 14,
        color: '#313131',
    },


    buttonDescription: {
        marginLeft: '5%',
        marginTop: '30%',
        height: '100%'
    },


    textDescription: {
        fontSize: 11,
        color: '#313131',
    },








});

export default styles;