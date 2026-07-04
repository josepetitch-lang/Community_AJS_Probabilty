<?php
session_start();
try {
    $db = new PDO('sqlite:../database/Ajedrez.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $username = $_POST['username'];
        $password = $_POST['password'];

        
        $stmt = $db->prepare("SELECT * FROM usuarios WHERE username = :username AND password = :password");
        $stmt->execute([':username' => $username, ':password' => $password]);
        $user = $stmt->fetch();

        if ($user) {
            $_SESSION['user'] = $user['username'];
            echo json_encode(["status" => "success", "message" => "Bienvenido"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Credenciales incorrectas"]);
        }
    }
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>