class ProyectoAjedrezChatbot:
    def __init__(self):
        # Datos extraídos directamente del informe de la UNEFA
        self.comunidad = "Antonio José de Sucre – Sector I (Punto Fijo, Falcón)"
        self.muestra = 50 
        self.aprobacion = "94%" 
        self.media_recreacion = "2.8 días al mes promedio por habitante"
        self.tutora = "Profesora Marianyella Rodríguez"
        self.autores = "G. García, J. Guanipa, J. Guerra, J. Petit"
        self.problema = "Limitación de espacios públicos óptimos y falta de una casa comunal física."
        self.viabilidad = "El ajedrez es la opción más económica y viable por su facilidad de traslado y bajo costo estructural ante la falta de una casa comunal."

    def obtener_resumen_global(self):
        return f"Proyecto de Probabilidad y Estadística en la comunidad {self.comunidad} por los bachilleres {self.autores} bajo la tutela de la {self.tutora}."