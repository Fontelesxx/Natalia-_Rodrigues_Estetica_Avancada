AOS.init(); // framework




window.addEventListener('scroll', () => {
  const header = document.getElementById('barra_navegacao');
  if(!header)return;
  if (window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
})// Animação nav


// Carrosel dos feedbacks
        let index = 0;
        const items = document.querySelectorAll(".feedback-item");
        const dots = document.querySelectorAll(".dot");

        function showSlide(i) {
            items.forEach(item => item.classList.remove("active"));
            dots.forEach(dot => dot.classList.remove("active"));

            items[i].classList.add("active");
            dots[i].classList.add("active");
        }

        function nextSlide() {
            index = (index + 1) % items.length;
            showSlide(index);
        }

        showSlide(index);
        setInterval(nextSlide, 5000); // troca a cada 5 segundos