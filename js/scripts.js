document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  // Define o estilo inicial do cabeçalho como transparente
  header.style.backgroundColor = "transparent";
  header.style.boxShadow = "none";

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      header.style.backgroundColor = "transparent";
      header.style.boxShadow = "none";
    } else {
      header.style.backgroundColor = "var(--secondary-color)";
      header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    }
  });
});
