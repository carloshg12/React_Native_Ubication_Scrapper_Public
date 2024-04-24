<?php
$hostBd = getenv('DB_HOST');
$nombreBd = getenv('DB_NAME');
$usuarioBd = getenv('DB_USER');
$passwordBd = getenv('DB_PASSWORD');

try {
    $pdo = new PDO("mysql:host=$hostBd;dbname=$nombreBd;charset=utf8", $usuarioBd, $passwordBd);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die(json_encode(['success' => false, 'message' => 'Error de conexión a la base de datos: ' . $e->getMessage()]));
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);

    $usuario = $data['username'];
    $contrasena = $data['password']; // Asumiendo que la contraseña viene ya encriptada o se maneja encriptación en el cliente

    // Preparamos la consulta para recuperar también el nombreEquipo
    $sql = $pdo->prepare("SELECT usuario, dorsal FROM usuarios WHERE usuario = :usuario AND contrasena = :contrasena LIMIT 1");

    if (!$sql) {
        die(json_encode(['success' => false, 'message' => 'Error en la preparación de la consulta']));
    }

    if (!$sql->execute(['usuario' => $usuario, 'contrasena' => $contrasena])) {
        die(json_encode(['success' => false, 'message' => 'Error al ejecutar la consulta']));
    }

    $user = $sql->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        // Si el usuario existe y la contraseña coincide, utilizamos el nombreEquipo como 'token'
echo json_encode(['success' => true, 'message' => 'Inicio de sesión exitoso', 'token' => strval($user['dorsal'])]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Usuario o contraseña incorrectos']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método HTTP no permitido']);
}
?>
