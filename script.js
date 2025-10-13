document.addEventListener("DOMContentLoaded", () => {
  // 1. Efeito de Digitação (Typing Effect)
  const typingElement = document.getElementById("typing-text");
  const textToType = typingElement.textContent;
  typingElement.textContent = ""; // Limpa o texto inicial
  let i = 0;

  function typeWriter() {
    if (i < textToType.length) {
      typingElement.textContent += textToType.charAt(i);
      i++;
      setTimeout(typeWriter, 70); // Velocidade de digitação (ms)
    } else {
      // Opcional: Efeito de cursor piscando (simulado com CSS)
    }
  }

  // Inicia o efeito
  typeWriter();

  // 2. Alternar Tema (Opcional, mas ótimo para portfólios)
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Função para aplicar o tema dark (por padrão já está, mas se for alternar...)
  // Você pode usar classes para gerenciar light/dark theme.

  themeToggle.addEventListener("click", () => {
    // Exemplo simples: Adiciona/Remove uma classe para alternar entre dark e light
    // Se a classe 'light-mode' for adicionada, o CSS deve sobrescrever as variáveis.
    body.classList.toggle("light-mode");

    // Alterna o ícone
    const icon = themeToggle.querySelector("i");
    if (body.classList.contains("light-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });

  // 3. Suavização de Scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
