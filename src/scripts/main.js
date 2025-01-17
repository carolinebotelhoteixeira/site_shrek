document.addEventListener('DOMContentLoaded', () => {
    // Menu fixo ao rolar
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  
    // Rolagem suave para as seções
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Efeito de hover em personagens
    document.querySelectorAll('.character').forEach(character => {
      character.addEventListener('mouseenter', () => {
        character.style.transform = 'scale(1.1)';
        character.style.transition = 'transform 0.3s';
      });
  
      character.addEventListener('mouseleave', () => {
        character.style.transform = 'scale(1)';
      });
    });
  
    // Mensagem no rodapé
    const footer = document.querySelector('footer p');
    footer.addEventListener('click', () => {
      alert('Obrigado por visitar a página do Shrek!');
    });
  });
  