import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL_LOGIN } from '@env';

export const iniciarSesion = async (username, password, navigation) => {
    try {
        const response = await axios.post(BASE_URL_LOGIN, {
            username: username,
            password: password,
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.status === 200 && response.data && response.data.success) {
            const token = response.data.token;
            if (token) {
                await AsyncStorage.setItem('userToken', token);
                console.log('Token stored:', token);
                navigation.navigate('Principal');
            } else {
                throw new Error('Token not provided in response');
            }
        } else {
            throw new Error(response.data && response.data.message ? response.data.message : 'Error al iniciar sesión');
        }

    } catch (error) {
        const errorMessage = error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message;
        console.error('Login error:', errorMessage);
        throw new Error(errorMessage || 'Error al conectar con el servidor');
    }
};
