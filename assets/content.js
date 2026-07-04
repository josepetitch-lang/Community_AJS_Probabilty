const assetManager = {
    paths: {
        logo: 'images/unefa.png',
        estadistica: 'images/poblacion_y_muestra.png',
        grafico: 'images/icongrafic.png',
        dados: 'images/dados.png'
    },
    
   
    init: function() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.style.opacity = '0';
            img.style.transition = 'opacity 1s ease-in-out';
            
            img.onload = () => {
                img.style.opacity = '1';
            };
        });
    }
};

document.addEventListener('DOMContentLoaded', assetManager.init);