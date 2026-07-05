# CARPETA IN: Sistema de registro y comentario del usuario

//Developed by: J4ZYLN2

Hola, ahora si en Español, yo soy j4zlyn2, creador de este apartado (y de todos verdaderamente xd)

En este apartado encontramos las funciones tanto de registro como de comentariom en la carpeta functions, se registran dentro de la database en SQLITE para no perder el registro debido al espacio "vacío" que existió en la primera prueba

*¿Cómo funciona cada archivo?*

-- Regis.php: Sistema de registro, recibe tanto el username como el password del registrado, mientras, al mismo tiempo, lo guarda en la base de datos
--Worked.php: Sistema de comentarios, recibe el comentario del usuario y lo hace público para todos, mientras, al mismo tiempo, lo guarda en la base de datos

*¿Por qué PHP?*

-- Facilidad para el programador, no consideré a Javascript el lenguaje más adaptable

*¿Cómo funciona el algoritmo de este sistema?*

-- El usuario se registra, de ahí, se guarda en la tabla usuarios dentro de nuestra base de datos, después de registrarse, escribe su comentario, se guarda también ese comentario dentro de la base de datos solo que con otro nombre (comentarios), y posteriormente se pública ese comentario, donde cualquier persona puede leer y opinar a su vez.

*¿Qué queremos con este sistema?*

-- Poder recibir comentarios acerca de la ágina web, proyecto, y ayudar a gente que lo necesite