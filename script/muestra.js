const muestraData = {
    nivelConfianza: "95%",
    margenError: "5%",
    calculoMuestra: function(n) {
        // Fórmula simplificada para el ejemplo
        return Math.round(n * 0.10); 
    }
};

function renderMuestra() {
    const container = document.getElementById('muestra-content');
    if (!container) return;

    const n = 1500; // Total de población
    const tamanoMuestra = muestraData.calculoMuestra(n);

    container.innerHTML = `
        <div class="calc-box">
            <h3> Determinación de la Muestra</h3>
            <p>Para un nivel de confianza del <strong>${muestraData.nivelConfianza}</strong> y un margen de error del <strong>${muestraData.margenError}</strong>:</p>
            <div style="text-align: center; padding: 20px; font-size: 1.2rem; color: #2c3e50;">
                <strong>Tamaño de Muestra Calculado: ${tamanoMuestra} personas.</strong>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', renderMuestra);