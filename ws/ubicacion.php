<?php

$hostBd = getenv('DB_HOST');
$nombreBd = getenv('DB_NAME');
$usuarioBd = getenv('DB_USER');
$passwordBd = getenv('DB_PASSWORD');

try {
    $pdo = new PDO("mysql:host=$hostBd;dbname=$nombreBd;charset=utf8", $usuarioBd, $passwordBd);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Error: ' . $e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] == "OPTIONS") {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!empty($data['nombreEquipo']) && isset($data['lat']) && isset($data['lon'])) {
        $nombreEquipo = $data['nombreEquipo'];
        $latitud = $data['lat'];
        $longitud = $data['lon'];

        try {
            $sql = $pdo->prepare("INSERT INTO ubicacion (nombreEquipo, latitud, longitud) VALUES (:nombreEquipo, :latitud, :longitud) ON DUPLICATE KEY UPDATE latitud = VALUES(latitud), longitud = VALUES(longitud)");
            $sql->bindParam(':nombreEquipo', $nombreEquipo);
            $sql->bindParam(':latitud', $latitud);
            $sql->bindParam(':longitud', $longitud);
            $sql->execute();

            header("HTTP/1.1 200 OK");
            echo json_encode(['mensaje' => 'Ubicación añadida o actualizada con éxito']);
        } catch (PDOException $e) {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(['mensaje' => 'Error al añadir o actualizar la ubicación: ' . $e->getMessage()]);
        }
    } else {
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(['mensaje' => 'Todos los campos son requeridos.']);
    }
} else {
    header("HTTP/1.1 405 Method Not Allowed");
    echo json_encode(['mensaje' => 'Método no permitido.']);
}

?>
