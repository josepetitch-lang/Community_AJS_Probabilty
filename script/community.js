//main archive

const communityData = {
    titulo: "Comunidad Antonio José de Sucre",
    problematica: "Limitada oferta de actividades recreativas-intelectuales para jóvenes y adultos mayores",
    definiciones: {
        poblacion: "Conjunto total de habitantes de la Comunidad Antonio José de Sucre",
        muestra: "Subconjunto representativo de los habitantes  seleccionados para el análisis detallado sobre el interés en el ajedrez."
    },
    efecto: "Disminuye la interacción social y el ejercicio cognitivo",
    justificacion: "El ajedrez es una herramienta pedagógica que mejora el razonamiento lógico, la memoria y la toma de decisiones. Implementarlo en la comunidad fomenta la integración y una actividad de ocio saludable",
    objetivos: [
        "Estimular el pensamiento crítico en los habitantes",
        "Promover la actividad a través de un club",
        "Reducir el sedentarismo mental mediante la práctica de este juego"
    ]
};

const infoCommunity = {
    infoGeneral: {
        titulo: "Comunidad Antonio José de Sucre",
        ubicacion: "Sector principal, Área de influencia directa",
        demografia: "Diversidad generacional con predominio de señores y adultos mayores en busca de actividad recreativa" //subjetivo
    },
    factoresSociales: [
        {punto: "Nivel de Participación", descripción: "Bajo en actividades deportivas y de mesa."}, 
        {punto: "Infraestructura", descripción: "Una comunidad relativamente humilde, sin espacio fisico para ek Consejo Comunal"}, 
        {punto: "Interés cognitivo", descripción: "Alta demanda de actiidades recreativas y cógnitivas, que estimulen a memoria y concentración"}
    ],
    analisisRiesgos: {}
};

function loadCommunitySection() {
    const container = document.getElementById('community-content');
    containet.innerHTML =  `
        <div class="calc-box">
            <h2>${communityData.titulo}</h2>
            <p><strong>Problemática:</strong> ${communityData.problematica}</p>
            <br>
            <p><strong>Justificación:</strong> ${communityData.justificacion}</p>
            <h3>Objetivos del Proyecto:</h3>
            <ul>
                ${communityData.objetivos.map(obj => `<li>✅ ${obj}</li>`).join('')}
            </ul>
        </div>     
    `;
}

function getCommunityStats(){
    const totalHabitantes = 1200; //example
    console.log(`Población objetivo estimada: ${totalHabitantes} habitantes.`)
}

document.addEventListener('DOMContentLoaded', () => { l
    oadCommunitySection ();
    getCommunityStats();
});



