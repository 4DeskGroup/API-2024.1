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
        //paddingHorizontal: 40,
        paddingTop: 30,
    },
    title: {
        color: '#C84734',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 40,
        paddingBottom: 20,
        //paddingTop: 10, 
    },
    icon2: {
        width: 22,
        height: 25,
        marginRight: 10 
    },
    container2: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingTop: 10,
    },
    campo1: {
        flexDirection: 'row',
        borderRadius: 10,
        paddingHorizontal: 20,
        borderColor: '#8A8585',
        height: 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFF',
        marginBottom: 10,
        elevation: 2,
    },
    texto1: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10
    },
    arrow:{
        width: 20,
        height: 20,
        marginBottom: '5%',
    }
});

export default styles;