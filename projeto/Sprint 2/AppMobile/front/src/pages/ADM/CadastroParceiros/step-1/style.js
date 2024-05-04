import {StyleSheet} from  "react-native";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    containerP: {
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginTop: '10%',
        marginBottom: '10%',
    },
    headerText: {
        fontSize: 25,
        color: 'black',
    },
    headerText2: {
        fontSize: 18,
        color: '#8A8585',
    },
    containerLogo: {
        flex: 1,
        alignSelf: 'center',
        marginTop: '2%',
    },
    logo: {
        width: 100,
        height: 50,
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        width: '90%',
        marginTop: '2%', // Ajuste a margem superior aqui
    },
    input: {
        backgroundColor: '#F5F5F5',
        width: '100%',
        marginBottom: 15,
        fontSize: 17,
        borderRadius: 10,
        padding: 10,
        color: 'black',
    },
    button: {
        backgroundColor: '#C61900',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 15,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    textSenha: {
        marginTop: 10,
        flexDirection: 'row',
        marginLeft: 25,
        alignItems: 'center',
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },
    linkText: {
        color: '#C61900'
    },
    title: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'flex-start',
        marginLeft: 25,
        fontFamily: 'Verdana',
        width: '90%',
    },
    arrow: {
        width: 20,
        height: 20,
        marginBottom: '5%',
    }
});

export default styles