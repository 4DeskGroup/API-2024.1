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
        fontSize: 18,
        marginLeft: 20,
    },
    user: {
        width: 30,
        height: 30,
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingTop: 30,
    },
    campo1: {
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
    },
    texto1: {
        fontSize: 25,
        marginRight: 15,
        fontWeight: 'bold',
    },
    texto2: {
        fontSize: 20,
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
    container3: {
        paddingTop: '20%',
        paddingHorizontal: '10%',
    },
    texto3: {
        fontSize: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'black',
        // paddingHorizontal: '10%',
        // marginLeft: '10%',
        // marginRight: '10%',
        marginTop: '5%',
        margin: '9%',
        borderRadius: 10,
        borderColor: '#8A8585',
        height: 80,
        backgroundColor: 'white',
        elevation: 2,
    },
    buttonTextContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    buttonText1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 3,
        paddingHorizontal: 20,
    },
    buttonText2: {
        marginBottom: 3,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,

    },
    buttonImage: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10%',
    },
    icon: {
        width: 20,
        height: 15,
    },
    texto4: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    texto5: {
        fontSize: 16,
    },
    book: {
        width: 20,
        height: 20,
        marginRight: 5,
    }
});


export default styles