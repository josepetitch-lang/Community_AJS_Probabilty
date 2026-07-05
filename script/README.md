# SCRIPT: Carpeta contenedor de URLS para AI, controlador de autenticación, e información a mostrar en la pagina xd

//DEVELOPED BY: J4ZYLN2

Markdown
#  Módulo de Scripts y Controladores de Servidor — UNEFA

Este directorio contiene la lógica de negocio basada en web, scripts de interacción en tiempo real y componentes de persistencia para el proyecto **"Interacción con el Ajedrez en la Comunidad Antonio José de Sucre – Sector I"** correspondiente a la asignatura *Probabilidad y Estadística* (3er Semestre, Sección D1 - Ingeniería de Sistemas).

## Arquitectura de Archivos

El ecosistema dentro de esta carpeta se divide en controladores de Base de Datos relacional, sincronización asíncrona mediante peticiones HTTP y componentes de cálculo matemático:

## Funcionamiento de la Carpeta y Responsabilidades Mapeadas:

script/
├── AI.php          # Proxy/Puente cURL HTTP para redirigir consultas del Chatbot hacia la API de Python.
├── regis.php       # Controlador de autenticación/registro que inserta/valida credenciales en Ajedrez.db.
├── worked.php      # Manejador de persistencia para registrar e inyectar comentarios de la comunidad.
├── foto_js.js      # Motór lógico para la animación de las evidencias de trabajo
├── calculate.js    # Motor lógico matemático para procesar fórmulas de estadística descriptiva.
├── poblacion.js    # Script encargado del renderizado de la estructura demográfica de datos.
├── muestra.js      # Lógica para delimitar y calcular los rangos de la muestra de 50 habitantes.
├── proyecto.js     # Script de control de efectos, eventos DOM y animaciones de IntersectionObserver.
├── community.js    # Interfaz e interacciones de la zona comunitaria de mensajería y UI.
