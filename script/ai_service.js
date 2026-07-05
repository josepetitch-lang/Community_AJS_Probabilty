function toggleChatWindow() {
    const chatWindow = document.getElementById('ai-chat-window');
    chatWindow.classList.toggle('chat-window-hidden');
    
   
    const dot = document.querySelector('.chat-notification-dot');
    if (dot) dot.style.display = 'none';
}

function enviarMensajeIA(event) {
    event.preventDefault();
    
  
    let contadorMensajes = localStorage.getItem('ai_chat_count') ? parseInt(localStorage.getItem('ai_chat_count')) : 0;
    
    
    if (contadorMensajes >= 5) {
        alert("¡Has alcanzado el límite de 5 consultas gratuitas! Para continuar interactuando con la IA del proyecto, por favor regístrate o inicia sesión en el sistema.");
        window.location.href = "#inicio"; 
        return;
    }

    const inputElement = document.getElementById('chat-user-input');
    const mensajeUsuario = inputElement.value.trim();
    if (!mensajeUsuario) return;
    
    const bodyChat = document.getElementById('chat-messages-body');
    
  
    const userDiv = document.createElement('div');
    userDiv.className = 'message msg-user';
    userDiv.textContent = mensajeUsuario;
    bodyChat.appendChild(userDiv);
    
    inputElement.value = ''; 
    bodyChat.scrollTop = bodyChat.scrollHeight; 
    
    os
    contadorMensajes++;
    localStorage.setItem('ai_chat_count', contadorMensajes);
    
   
    const botDiv = document.createElement('div');
    botDiv.className = 'message msg-bot';
    botDiv.textContent = 'Pensando...';
    bodyChat.appendChild(botDiv);
    
    
    fetch('script/AI.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: mensajeUsuario })
    })
    .then(response => response.json())
    .then(data => {
       n
        botDiv.textContent = data.response;
        bodyChat.scrollTop = bodyChat.scrollHeight;

        
        if (contadorMensajes === 5) {
            const bloqueoDiv = document.createElement('div');
            bloqueoDiv.className = 'message msg-bot';
            bloqueoDiv.style.borderLeft = '3px solid var(--accent)';
            bloqueoDiv.innerHTML = "<strong>Acceso limitado:</strong> Has completado tus 5 consultas. Sincroniza tu cuenta registrándote en el formulario principal para desbloquear el módulo completo.";
            bodyChat.appendChild(bloqueoDiv);
            bodyChat.scrollTop = bodyChat.scrollHeight;
            inputElement.disabled = true; // Deshabilita el input visualmente
            document.getElementById('btn-send-chat').disabled = true;
        }
    })
    .catch(error => {
        botDiv.textContent = "Error al intentar enlazar con script/AI.php.";
        bodyChat.scrollTop = bodyChat.scrollHeight;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contadorMensajes = localStorage.getItem('ai_chat_count') ? parseInt(localStorage.getItem('ai_chat_count')) : 0;
    const inputElement = document.getElementById('chat-user-input');
    const btnElement = document.getElementById('btn-send-chat');
    
    if (contadorMensajes >= 5 && inputElement && btnElement) {
        inputElement.disabled = true;
        inputElement.placeholder = "Regístrate para continuar consultando...";
        btnElement.disabled = true;
    }
});

function obtenerRespuestaLocalDeEmergencia(msg) {
    const texto = msg.toLowerCase();
    if (texto.includes('poblacion') || texto.includes('comunidad')) {
        return "La población evaluada corresponde a los habitantes de la Comunidad Antonio José de Sucre, Sector I. Se determinó una alarmante inactividad recreativa promedio de 2.8 días al mes.";
    }
    if (texto.includes('muestra') || texto.includes('encuestados')) {
        return "Para el estudio matemático de Probabilidad se tomó una muestra representativa de 50 habitantes (Estudiantes, Trabajadores y Adultos Mayores).";
    }
    if (texto.includes('porcentaje') || texto.includes('aprobacion') || texto.includes('aceptacion')) {
        return "El resultado estadístico más relevante de las encuestas es que un 94% de la muestra apoya activamente la creación del Club de Ajedrez.";
    }
    if (texto.includes('profesora') || texto.includes('marianyella')) {
        return "La tutora académica del proyecto es la profesora Marianyella Rodríguez, encargada de la cátedra de Probabilidad y Estadística del 3er Semestre.";
    }
    return "Interesante pregunta sobre el proyecto. Como modelo entrenado para la UNEFA, te confirmo que el Club de Ajedrez es viable gracias a que no requiere de infraestructura costosa y fomenta el desarrollo cognitivo frente a la escasez de una casa comunal.";
}