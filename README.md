# Application Name
TransBetxi Ubication Scrapper

## Description
This program tracks and stores the location of registered users in a database. It is ideal for applications that need to monitor or maintain a log of user locations efficiently and securely.

## Features
- Real-time location tracking.
- Secure storage of location data in a database.

## Environment Setup
To ensure the application functions correctly, you need to configure the environment variables. Copy the `.env.example` file to a new file named `.env` and fill in the variables with appropriate values for your environment.

### Environment Variables
- `DB_HOST` - The database host.
- `DB_NAME` - The name of the database.
- `DB_USER` - The database user.
- `DB_PASSWORD` - The password for the database user.
- `BASE_URL_LOGIN` - URL for the login endpoint.
- `BASE_URL_UBICACION` - URL for the location endpoint.

## Usage
To use this program, you will need to make HTTP requests to the provided endpoints. Ensure to include `Content-Type: application/json` in the request headers.

### Test User
To test the application without storing real data, you can use the following test user credentials:
- **Username:** test_user
- **Password:** test_password

This user is configured not to perform operations that permanently alter the database, making it ideal for testing purposes.

---

# Nombre de la Aplicación
TransBetxi Ubication Scrapper

## Descripción
Este programa rastrea y guarda la ubicación de un usuario registrado en una base de datos. Es ideal para aplicaciones que necesitan monitorear o mantener un registro de la ubicación de sus usuarios de manera eficiente y segura.

## Funcionalidades
- Rastreo de ubicación en tiempo real.
- Almacenamiento seguro de datos de ubicación en una base de datos.

## Configuración del entorno
Para que la aplicación funcione correctamente, necesitas configurar las variables de entorno. Copia el archivo `.env.example` a un nuevo archivo llamado `.env` y completa las variables con los valores adecuados para tu entorno.

### Variables de entorno
- `DB_HOST` - El host de la base de datos.
- `DB_NAME` - El nombre de la base de datos.
- `DB_USER` - El usuario de la base de datos.
- `DB_PASSWORD` - La contraseña para el usuario de la base de datos.
- `BASE_URL_LOGIN` - URL para el endpoint de inicio de sesión.
- `BASE_URL_UBICACION` - URL para el endpoint de ubicación.

## Uso
Para utilizar este programa, deberás realizar solicitudes HTTP a los endpoints proporcionados. Asegúrate de incluir en el encabezado de la solicitud el `Content-Type` como `application/json`.

### Usuario de prueba
Para probar la aplicación sin guardar datos reales, puedes usar el siguiente usuario de prueba:
- **Username:** test_user
- **Password:** test_password

Este usuario está configurado para no realizar operaciones que alteren la base de datos de manera permanente, ideal para realizar pruebas.
