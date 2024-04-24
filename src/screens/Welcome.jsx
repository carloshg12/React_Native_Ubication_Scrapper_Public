import React, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import Login from './LogIn';
import { setAuthState } from '../features/auth/auth';
import { useNavigation } from '@react-navigation/native';
import { iniciarSesion } from '../components/InicarSesion';
import { styles } from '../styles/Welcome';

export const Welcome = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { height } = Dimensions.get('window');
    const { authState } = useSelector(state => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = () => {
        const errorEmail = false;
        const errorPassword = false;
        if (errorEmail || errorPassword) {
            Alert.alert('Validation Error', `${errorEmail} ${errorPassword}`);
        } else {
            iniciarSesion(email, password, navigation)
                .then(data => {
                    dispatch(setAuthState('signedIn'));
                    navigation.navigate('Principal');
                })
                .catch(error => {
                    Alert.alert('Login Error', error.message);
                });
        }
    };

    if (authState === 'signIn') {
        return (
            <Login
                onLogin={onLogin}
                setEmail={setEmail}
                setPassword={setPassword}
            />
        );
    }

    // if (authState === 'signUp') {
    //     return (
    //         <SignUp
    //             onSignUp={onSignUp}
    //             setName={setName}
    //             setEmail={setEmail}
    //             setPassword={setPassword}
    //         />
    //     );
    // }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.tittle}>¡Bienvenido a TransBetxi Runners!</Text>
                    <Text style={styles.body}>Comparte tu ubicación con la organización y con el resto de usuarios.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button2} onPress={() => dispatch(setAuthState('signIn'))}>
                        <Text style={styles.buttonsText}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
};