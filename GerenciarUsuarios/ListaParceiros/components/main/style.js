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
    editar: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    excluir: {
        width: 20,
        height: 20,
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
        flexDirection: 'row',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: '#8A8585',
        height: 40,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'start',
        justifyContent: 'space-between',
        
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        elevation: 2,
        backgroundColor: '#FFF',
    },
    texto1: {
        fontSize: 25,
        marginRight: 15,
        fontWeight: 'bold',
    },
    texto2: {
        fontSize: 18,
        flex: 1,
    },
    campo2: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: '#8A8585',
        height: 40,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrow:{
        width: 20,
        height: 20,
        marginBottom: '5%',
    }
});


export default styles