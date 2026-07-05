<?php

header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, true);

    if (isset($input['message']) && !empty(trim($input['message']))) {
        
      
        $url_python = 'http://127.0.0.1:5000/api/chat';

        
        $ch = curl_init($url_python);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $inputJSON);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        
        $response = curl_exec($ch);
        $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($http_code === 200) {
            echo $response;
        } else {
            
            echo json_encode([
                "response" => "El módulo de IA se encuentra en modo de espera local. Recuerda iniciar el servicio de Python en la terminal para habilitar el procesamiento en tiempo real."
            ]);
        }
    } else {
        echo json_encode(["response" => "Por favor, escribe un mensaje válido."]);
    }
} else {
    echo json_encode(["response" => "Método no permitido."]);
}
?>