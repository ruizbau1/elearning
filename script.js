document.addEventListener('DOMContentLoaded', () => {
  const screens = document.querySelectorAll('.screen');
  const continueButtons = document.querySelectorAll('.btn.continue');
  let current = 0;

  function showScreen(index) {
    screens.forEach((screen, i) => {
      screen.classList.toggle('active', i === index);

      // Actualizar la barra de progreso solo si existe
      const progressBar = screen.querySelector('.progress');
      if (progressBar) {
        const value = progressBar.getAttribute('data-progress') || "0";
        progressBar.style.width = value + '%';
      }
    });
  }

  continueButtons.forEach((button) => {
    button.addEventListener('click', () => {
      current++;
      if (current < screens.length) {
        showScreen(current);
      }
    });
  });

  showScreen(current); // Mostrar el primer módulo al iniciar
});
