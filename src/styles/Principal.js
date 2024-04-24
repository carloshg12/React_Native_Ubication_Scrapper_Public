import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        padding: 20,
        width: '100%',
    },
    input: {
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333',
    },
    statusContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    statusText: {
        fontSize: 18,
        color: '#333',
        marginTop: 10,
        marginBottom: 20,
    }
});
