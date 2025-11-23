  AOS.init(); // framework

window.addEventListener('scroll', () => {
    const header = document.getElementById('barra_navegacao');
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
})// Animação nav


