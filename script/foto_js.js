document.addEventListener("DOMContentLoaded", () => {
  
    const tarjetasEvidencia = document.querySelectorAll('.evidence-card');

    
    const observerOptions = {
        root: null,
        threshold: 0.15 
    };

    const animarEvidencias = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tarjeta = entry.target;
                const indice = tarjeta.getAttribute('data-index');

                
                setTimeout(() => {
                    tarjeta.classList.add('evidence-visible');
                }, indice * 150);

                
                observer.unobserve(tarjeta);
            }
        });
    };

    const fotoObserver = new IntersectionObserver(animarEvidencias, observerOptions);

    tarjetasEvidencia.forEach(card => {
       
        card.classList.add('evidence-animated-base');
        fotoObserver.observe(card);
    });
});