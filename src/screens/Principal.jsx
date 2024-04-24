import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, SafeAreaView, StyleSheet, ActivityIndicator, Button } from 'react-native';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { añadirUbicacion } from '../components/AddUbicacion';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/Principal';

const LOCATION_TASK_NAME = 'background-location-task';

TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
    if (error) {
        console.error(error);
        return;
    }
    if (data) {
        const { locations } = data;
        const { latitude, longitude } = locations[0].coords;
        const equipo = await AsyncStorage.getItem('userToken');
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}, Equipo: ${equipo}`);

        if (equipo !== null && equipo.trim() !== '') {
            añadirUbicacion({
                equipo: equipo,
                latitud: latitude,
                longitud: longitude,
            }).then(response => {
                console.log('Respuesta del servidor:', response);
            }).catch(error => {
                console.error('Error al añadir ubicación:', error);
            });
        } else {
            console.log('No se envió la ubicación porque el número de equipo es null o vacío.');
        }
    }
});

export const Principal = () => {
    const [equipo, setEquipo] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const loadEquipo = async () => {
            const storedEquipo = await AsyncStorage.getItem('userToken');
            if (storedEquipo !== null) {
                setEquipo(storedEquipo);
            }
        };

        loadEquipo();
    }, []);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
            if (backgroundStatus !== 'granted') {
                console.log('Permission for background location was denied');
                return;
            }

            await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
                accuracy: Location.Accuracy.High,
                timeInterval: 1000,
                distanceInterval: 0,
                showsBackgroundLocationIndicator: true,
                foregroundService: {
                    notificationTitle: 'Localización activa',
                    notificationBody: 'Tu ubicación se está compartiendo en segundo plano',
                    notificationColor: '#4A90E2'
                }
            });
        })();
    }, []);

    const handleSignOut = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            await AsyncStorage.removeItem('equipo');
            setEquipo('');
            await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
            console.log('Session closed, token and team removed, and location updates stopped.');
            navigation.navigate('Auth');
        } catch (error) {
            console.error('Failed to sign out:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setEquipo}
                    value={equipo}
                    placeholder="Número de equipo"
                    editable={false}
                />
            </View>
            <View style={styles.statusContainer}>
                <ActivityIndicator size="large" color="#4A90E2" />
                <Text style={styles.statusText}>{"Compartiendo tu ubicación..."}</Text>
                <Button title="Cerrar Sesión" onPress={handleSignOut} color="#D9534F" />
            </View>
        </SafeAreaView>
    );
};

