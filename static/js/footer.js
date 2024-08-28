window.addEventListener('scroll', function() {
   const hero = document.querySelector('.menu'); // Asegúrate de que `.hero` sea la clase de tu sección hero
   const footer = document.querySelector('footer');

   const heroBottom = hero.getBoundingClientRect().bottom;

   if (heroBottom < 0) {
       footer.classList.add('visible');
       footer.classList.remove('hidden');
   } else {
       footer.classList.add('hidden');
       footer.classList.remove('visible');
   }
});