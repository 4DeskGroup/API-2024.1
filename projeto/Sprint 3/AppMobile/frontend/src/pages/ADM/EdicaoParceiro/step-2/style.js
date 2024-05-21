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
        marginLeft: 20,
        color: '#C84734',
        fontWeight: 'bold',
    },
    title2:{
        fontSize: 20,
        color: 'black',
        alignSelf: 'flex-start',
        marginLeft: 15,
        width: '90%',
        marginTop: 20,
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingTop: 20,
        justifyContent: 'space-between',
        paddingBottom: 3,
    },
    campo1: {
        width: '100%', // Certifique-se de que o campo ocupa toda a largura disponível
        marginBottom: 30,
    },
    arrow:{
        width: 20,
        height: 20,
        marginBottom: '5%',
    },
    input: {
        backgroundColor: '#F5F5F5',
        width: '100%',
        fontSize: 17,
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    button: {
        backgroundColor: '#C61900',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 15,
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});


export default styles