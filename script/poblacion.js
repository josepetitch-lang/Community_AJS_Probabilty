const poblacionData = {
    totalHabitantes: 1500,
    rangoEdad: "15 a 65 años",
    segmentos: [
        { nombre: "Estudiantes", porcentaje: 40 },
        { nombre: "Trabajadores", porcentaje: 35 },
        { nombre: "Adultos Mayores", porcentaje: 25 }
    ]
};

function renderPoblacion() {
    const container = document.getElementById('poblacion-content');
    if (!container) return;

    container.innerHTML = `
        <div class="calc-box">
            <h3>Análisis de Población</h3>
            <p><strong>Población Objetivo:</strong> ${poblacionData.totalHabitantes} habitantes.</p>
            <p><strong>Rango de Edad:</strong> ${poblacionData.rangoEdad}</p>
            <div class="segmentos">
                ${poblacionData.segmentos.map(seg => `
                    <div style="margin-top: 10px;">
                        <span>${seg.nombre}: ${seg.porcentaje}%</span>
                        <div style="background: #eee; height: 10px; border-radius: 5px;">
                            <div style="background: #2c3e50; width: ${seg.porcentaje}%; height: 100%; border-radius: 5px;"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', renderPoblacion);