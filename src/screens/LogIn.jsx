import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../styles/Auth';

export default function Login({ onLogin, setEmail, setPassword }) {
    const { authState } = useSelector(state => state.auth);

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.tittle}>¡Hola de nuevo!</Text>
                        <Text style={styles.body}>¿Listo para correr?</Text>
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder='Ingresa tu usuario'
                        autoCorrect={false}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Ingresa tu contraseña'
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity>
                        {/* <Text style={styles.recoveryPasswordText}>¿Has olvidado tu contraseña?</Text> */}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signInButton} onPress={onLogin}>
                        <Text style={styles.signInButtonText}>Iniciar Sesión</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </>
    );
};