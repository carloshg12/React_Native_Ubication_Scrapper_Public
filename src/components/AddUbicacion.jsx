import axios from 'axios';
import { BASE_URL_UBICACION } from '@env';


export const añadirUbicacion = async ({ equipo, latitud, longitud }) => {
    try {
        const requestBody = {
            nombreEquipo: equipo, // Asegúrate de usar el nombre de campo correcto esperado por el backend
            lat: latitud, // Asume 'lat' como el nombre del campo para latitud
            lon: longitud, // Asume 'lon' como el nombre del campo para longitud
        };

        const response = await axios.post(BASE_URL_UBICACION, requestBody, {
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate', // Evita la caché
                'Pragma': 'no-cache', // Para compatibilidad con HTTP/1.0
                'Expires': '0', // Expira inmediatamente
                'Content-Type': 'application/json',
                'code': 'pass23sd2aASED6',
            },
        });

        if (response.status === 200) {
            console.log('Ubi guardado con éxito');
            return response.data;
        } else {
            console.error('Error al guardar el Ubi', response.data.message);
            throw new Error(response.data.message);
        }
    } catch (error) {
        console.error('Error al guardar el Ubi', error);
        throw error;
    }
};
