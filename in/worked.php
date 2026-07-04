<?php
session_start();
try {
    $db = new PDO('sqlite:../database/Ajedrez.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['user'])) {
        $comentario = $_POST['comentario'];
        $usuario = $_SESSION['user'];

        $stmt = $db->prepare("INSERT INTO comentarios (usuario, texto, fecha) VALUES (:user, :texto, datetime('now'))");
        $stmt->execute([':user' => $usuario, ':texto' => $comentario]);
        echo json_encode(["status" => "success"]);
    } 
   
    else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $stmt = $db->query("SELECT * FROM comentarios ORDER BY id DESC LIMIT 10");
        $comentarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($comentarios);
    }

} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>