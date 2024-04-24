import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    contentContainer: {
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    tittle: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 35,
        textAlign: 'center',
        color: '#353147'
    },
    body: {
        padding: 20,
        fontSize: 30,
        lineHeight: 35,
        marginBottom: 20,
        fontWeight: '400',
        textAlign: 'center',
        color: '#353147'
    },
    buttonsText: {
        fontWeight: '500',
        color: '#353147'
    },
    button1: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff70',
        padding: 16,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 16,
        marginHorizontal: 10,
    },
    button2: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#DFE3E630',
        marginTop: 40,
    },
    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        minWidth: '90%',
        alignSelf: 'center',

    },
    signInButton: {
        backgroundColor: '#FD6D6A',
        padding: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#FD6D6A',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        minWidth: '90%',
        alignSelf: 'center',
    },
    signInButtonText: {
        fontWeight: 'bold',
        color: '#FFF',
    },
    signUpButton: {
        backgroundColor: '#4E9F3D',
        padding: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#4E9F3D',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        minWidth: '90%',
        alignSelf: 'center',
    },
    signUpButtonText: {
        fontWeight: 'bold',
        color: '#FFF',
    },
    recoveryPasswordText: {
        textAlign: 'center',
        color: '#353147',
        paddingBottom: 10,
        minWidth: '85%',
        alignSelf: 'center',
    },
    continueText: {
        textAlign: 'center',
        marginVertical: 10,
    },
    registerTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    registerQuestionText: {
        color: '#353147', // ajusta este color según tu diseño
    },
    registerLinkText: {
        color: '#007bff', // un tono de azul
        fontWeight: 'bold',
    },
    profileImageContainer: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#ddd', // Un color de fondo en caso de que no haya imagen
        overflow: 'hidden', // Asegura que la imagen sea circular
        alignSelf: 'center', // Asegura que el contenedor de la imagen esté centrado dentro de su contenedor padre
    },
    profileImage: {
        height: '100%',
        width: '100%',
    },
    profileImagePlaceholder: {
        color: '#666',
    },
})