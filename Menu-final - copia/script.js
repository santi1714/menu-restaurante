document.addEventListener('DOMContentLoaded', () => {
    // 1. Cambio dinámico de secciones del menú (Alimentos, Mixología, etc.)
    const botonesFiltro = document.querySelectorAll('.filtro-btn');
    const seccionesMenu = document.querySelectorAll('.seccion-menu');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault();

            // Desmarcar todos los botones y marcar el seleccionado
            botonesFiltro.forEach(b => b.classList.remove('activo'));
            this.classList.add('activo');

            // Obtener la sección seleccionada
            const idSeleccionado = this.getAttribute('href').substring(1);

            // Ocultar todas las secciones y mostrar solo la elegida
            seccionesMenu.forEach(seccion => {
                if (seccion.id === idSeleccionado) {
                    seccion.classList.remove('seccion-oculta');
                } else {
                    seccion.classList.add('seccion-oculta');
                }
            });
        });
    });

    // 2. Manejo de la encuesta (Tal como lo tenías)
    const formulario = document.getElementById('form-encuesta');
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por su encuesta! 😊');
            formulario.reset();
        });
    }
});