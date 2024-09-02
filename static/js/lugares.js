document.querySelectorAll('.tab input').forEach((input) => {
    input.addEventListener('change', function() {
        if (this.checked) {
            const tabContent = this.nextElementSibling;
            const offset = tabContent.getBoundingClientRect().top + window.scrollY - 20; // Ajusta el -100 según el espacio que quieras dejar arriba
            window.scrollTo({
                top: offset,
                behavior: 'smooth' // Desplazamiento suave
            });
        }
    });
}); 