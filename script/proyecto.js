const impactoProyecto = {
    vision: "Transformar la dinámica social de la comunidad Antonio José de Sucre mediante el ajedrez como herramienta de desarrollo intelectual.",
    impactoDirecto: [
        { area: "Cognitiva", detalle: "Mejora sustancial en la capacidad de concentración y resolución de problemas complejos." },
        { area: "Social", detalle: "Fomento de la interacción intergeneracional, uniendo a jóvenes y adultos mayores en un entorno común." },
        { area: "Educativa", detalle: "Implementación de estrategias de pensamiento lógico aplicables al rendimiento académico escolar." }
    ],
    proyeccion: "Más allá de las piezas en el tablero, este proyecto busca sentar las bases para un club deportivo comunitario sostenible que trascienda el periodo de investigación."
};

function renderImpacto() {
    const container = document.getElementById('proyecto-content');
    if (!container) return;

    container.innerHTML = `
        <div class="calc-box">
            <h2>Impacto y Visión del Proyecto</h2>
            <p style="font-style: italic;">"${impactoProyecto.vision}"</p>
            
            <h3 style="margin-top: 20px;">Áreas de Influencia:</h3>
            <div style="display: grid; gap: 15px;">
                ${impactoProyecto.impactoDirecto.map(item => `
                    <div>
                        <strong>${item.area}:</strong> ${item.detalle}
                    </div>
                `).join('')}
            </div>

            <div style="margin-top: 25px; padding: 15px; background: #f0f4f8; border-radius: 5px;">
                <strong>Proyección a largo plazo:</strong> ${impactoProyecto.proyeccion}
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', renderImpacto);

function cargarImpacto() {
    const target = document.getElementById('impacto-dinamico');
    target.innerHTML = `<div class="calc-box"><h3>Impacto en la Comunidad</h3><p>El proyecto reduce el sedentarismo mental y fomenta la integración social mediante el ajedrez.</p></div>`;
}

// extra

document.addEventListener("DOMContentLoaded", () => {
    const barras = document.querySelectorAll('.bar-fill');

    
    const observerOptions = {
        root: null,
        threshold: 0.2 
    };

    const animarGraficos = (entries, observer) => {
        entries.forEach(entry => {
            // Si el contenedor entró en pantalla
            if (entry.isIntersecting) {
                const elementoBarra = entry.target;
                
                const porcentajeObjetivo = elementoBarra.getAttribute('data-target');
                
               
                elementoBarra.style.width = `${porcentajeObjetivo}%`;
                
                
                observer.unobserve(elementoBarra);
            }
        });
    };

    const targetObserver = new IntersectionObserver(animarGraficos, observerOptions);

  
    barras.forEach(bar => {
        targetObserver.observe(bar);
    });
});

