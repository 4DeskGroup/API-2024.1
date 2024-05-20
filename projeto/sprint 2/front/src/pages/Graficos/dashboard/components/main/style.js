import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollViewContent: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F3F1F1',
        alignItems: 'center',
        marginTop: '10%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    body: {
        width: '100%',
        height: '100%',
        marginTop: '10%',
        marginLeft:'20%',
        paddingEnd:'20%',

    },

    bodyText: {
        color: '#313131',
        fontSize: 16,
        fontWeight: 'bold',
    },

    buttonMenu: {
        borderRadius: 10,
        width: '100%',
        height: '20%',
        marginTop: '5%',
        backgroundColor: '#FFFFFF',
        elevation: 2,
        alignContent: 'center',
        justifyContent: 'center',
    },

    buttonMenu2: {
        borderRadius: 10,
        width: '100%',
        height: '23%',
        marginTop: '5%',
        backgroundColor: '#FFFFFF',
        elevation: 2,
        alignContent: 'center',
        justifyContent: 'center',
    },


    buttonContainer: {
        width: '100%',
        height: '100%',
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
        // backgroundColor: 'blue',
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
        // backgroundColor: 'red',

    },

    buttonTitle: {
        marginTop: '8%',
        marginLeft: '5%',
        // backgroundColor: 'yellow',
    },

    buttonSubTitle: {
        marginLeft: '5%',
        // backgroundColor: 'green',
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
        top: '20%',
        // backgroundColor: 'pink',
    },


    textDescription: {
        fontSize: 11,
        color: '#313131',
    },








});

export default styles;