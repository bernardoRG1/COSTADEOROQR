document.querySelectorAll('.mapa-elemento input[type="checkbox"]').forEach((input) => {
    input.addEventListener('change', function() {
        if (this.checked) {
            const mapaContent = this.closest('.mapa-linea').nextElementSibling;
            const offset = mapaContent.getBoundingClientRect().top + window.scrollY - 60; // Ajusta el -20 según el espacio que quieras dejar arriba
            window.scrollTo({
                top: offset,
                behavior: 'smooth' // Desplazamiento suave
            });
        }
    });
});