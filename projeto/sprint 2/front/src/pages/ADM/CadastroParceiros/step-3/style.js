import { StyleSheet } from "react-native";

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
    buttonT: {
        backgroundColor: '#F26E5B',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginLeft: '70%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
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
    },
    pickerContainer: {
        width: '100%',
        marginBottom: 15,
        position: 'relative',
        color: 'black',
    },
    picker: {
        backgroundColor: '#F5F5F5',
        width: '100%',
        borderRadius: 10,
        color: 'black',
    },
    selectedExpertisesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        color: 'black',
    },
    selectedExpertise: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 8,
        marginRight: 10,
        marginBottom: 10,
        borderColor: 'black', // Cor da borda
        borderWidth: 1, // Largura da borda
    },
    selectedExpertiseText: {
        color: '#C84734', // Defina a cor do texto aqui
        fontWeight: 'bold',
    },
    pickerButton: {
        backgroundColor: '#C61900',
        width: '50%',
        marginBottom: 15,
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        color: 'black',

    },
    titleModal:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;
