import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    whiteBackground: {
        backgroundColor: '#F3F1F1',
        width: '100%',
        height: '75%',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        zIndex: -1
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingTop: 30,
    },
    title: {
        fontSize: 20,
        color: '#C84734',
        marginLeft: 20,
        fontWeight: 'bold',
    },
    user: {
        width: 30,
        height: 30,
    },
    container2: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingTop: 30,
    },
    campo1: {
        flexDirection: 'column', // alterado para coluna
        elevation: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        borderColor: '#8A8585',
        height: 80, // aumente a altura para acomodar os textos
        width: '100%',
        alignItems: 'flex-start', // alinhe à esquerda
        justifyContent: 'center',
        backgroundColor: '#FFF',
        marginBottom: 10,
    },
    texto1: {
        fontSize: 20, // ajuste de tamanho
        fontWeight: 'bold',
    },
    texto2: {
        fontSize: 15, // ajuste de tamanho
    },
    campo2: {
        flexDirection: 'column', // alterado para coluna
        elevation: 2,
        borderRadius: 10,
        paddingHorizontal: 20,
        borderColor: '#8A8585',
        height: 80, // aumente a altura para acomodar os textos
        width: '100%',
        alignItems: 'flex-start', // alinhe à esquerda
        justifyContent: 'center',
        backgroundColor: '#FFF',
        marginTop: 10,
        marginBottom: 10,
    },
    campo3: {
        flexDirection: 'column',
        elevation: 2,
        borderRadius: 10,
        paddingHorizontal: 20,
        borderColor: '#8A8585',
        height: 80, 
        width: '100%',
        alignItems: 'flex-start', // alinhe à esquerda
        justifyContent: 'center',
        backgroundColor: '#FFF',
        marginTop: 10,
        marginBottom: 10,
    },
    arrow:{
        width: 20,
        height: 20,
        marginBottom: '5%',
    }
});

export default styles;