function customScrollTo(target, duration) {
   const startPosition = window.pageYOffset;
   const targetPosition = target.getBoundingClientRect().top;
   const startTime = performance.now();

   function easeOutQuad(t) {
       return t * (2 - t);
   }

   function scrollAnimation(currentTime) {
       const timeElapsed = currentTime - startTime;
       const run = easeOutQuad(Math.min(timeElapsed / duration, 1)) * targetPosition;
       window.scrollTo(0, startPosition + run);

       if (timeElapsed < duration) {
           requestAnimationFrame(scrollAnimation);
       }
   }

   requestAnimationFrame(scrollAnimation);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function(e) {
       e.preventDefault();

       const targetId = this.getAttribute('href').substring(1);
       const targetElement = document.getElementById(targetId);

       if (targetElement) {
           customScrollTo(targetElement, 1000); // 1000 ms = 1 segundo
       }
   });
});
