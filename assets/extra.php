<?php

function registrarInteraccion($usuario, $accion) {
    $db = new PDO('sqlite:../database/Ajedrez.db');
    $stmt = $db->prepare("INSERT INTO logs (usuario, accion) VALUES (?, ?)");
    return $stmt->execute([$usuario, $accion]);
}
?>