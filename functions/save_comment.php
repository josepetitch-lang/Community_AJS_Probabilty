<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $comentario = isset($_POST['comentario']) ? trim($_POST['comentario']) : '';

    if (!empty($comentario)) {
        try {
            // AJUSTE DE RUTA: Apunta a la carpeta externa "Proyectos SQLite/Probabilidad/"
            // Dependiendo de dónde esté este script, puedes necesitar "../" para retroceder niveles
            $ruta_db = __DIR__ . '/../Proyectos SQLite/Probabilidad/Ajedrez.db';
            
            $db = new PDO("sqlite:$ruta_db");
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $db->exec("CREATE TABLE IF NOT EXISTS comentarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                contenido TEXT NOT NULL,
                fecha DATETIME DEFAULT CURRENT_TIMESTAMP
            )");

            $stmt = $db->prepare("INSERT INTO comentarios (contenido) VALUES (:contenido)");
            $stmt->bindParam(':contenido', $comentario);
            $stmt->execute();

            header("Location: index.html?status=comment_saved");
            exit();

        } catch (PDOException $e) {
            echo "Error de conexión con la DB del proyecto: " . $e->getMessage();
        }
    } else {
        echo "El comentario está vacío.";
    }
} else {
    header("Location: index.html");
    exit();
}
?>