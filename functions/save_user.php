<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = isset($_POST['username']) ? trim($_POST['username']) : '';
    $password = isset($_POST['password']) ? trim($_POST['password']) : '';

    if (!empty($username) && !empty($password)) {
        try {
            $ruta_db = __DIR__ . '/../Proyectos SQLite/Probabilidad/Ajedrez.db';
            
            $db = new PDO("sqlite:$ruta_db");
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $db->exec("CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL
            )");

            $stmt = $db->prepare("INSERT INTO usuarios (username, password) VALUES (:username, :password)");
            $stmt->bindParam(':username', $username);
            $stmt->bindParam(':password', $password);
            $stmt->execute();

            header("Location: index.html?status=user_registered");
            exit();

        } catch (PDOException $e) {
            header("Location: index.html?status=error_registration");
            exit();
        }
    }
}
?>