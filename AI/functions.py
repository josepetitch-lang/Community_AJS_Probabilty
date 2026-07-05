from work import ProyectoAjedrezChatbot

chatbot_core = ProyectoAjedrezChatbot()

def procesar_mensaje_usuario(mensaje: str) -> str:
    msg = mensaje.lower()
    
    if "poblacion" in msg or "comunidad" in msg or "sector" in msg:
        return f"El estudio se realizó en la {chatbot_core.comunidad}. El problema central es: {chatbot_core.problema}"
    elif "muestra" in msg or "encuesta" in msg or "cuantos" in msg:
        return f"La muestra es de {chatbot_core.muestra} habitantes del sector."
    elif "porcentaje" in msg or "aprobacion" in msg or "aceptacion" in msg:
        return f"El análisis arrojó un contundente {chatbot_core.aprobacion} de aceptación."
    elif "profesora" in msg or "tutor" in msg or "marianyella" in msg:
        return f"Nuestra tutora académica es la {chatbot_core.tutora}."
    elif "autores" in msg or "creadores" in msg:
        return f"El equipo está compuesto por: {chatbot_core.autores}."
    elif "viabilidad" in msg or "porque" in msg:
        return chatbot_core.viabilidad
    elif "hola" in msg or "saludos" in msg:
        return "¡Hola! Soy el asistente IA del proyecto. Pregúntame sobre la muestra, población o viabilidad."
        
    return "No logré procesar la variable. Intenta con: 'población', 'muestra', 'aprobación' o 'viabilidad'."