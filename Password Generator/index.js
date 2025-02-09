document.addEventListener("DOMContentLoaded", function () {
  const modeChanger = document.getElementById("modeChanger");
  const body = document.body;
  const passwordBoxes = document.querySelectorAll(".pass-box");
  const loadingElements = document.querySelectorAll(".loading");
  const passwordTexts = document.querySelectorAll(".Password1, .Password2");
  const btn = document.getElementById("btn");

  // Cambiar entre modo oscuro y claro
  modeChanger.addEventListener("change", function () {
      body.classList.toggle("light-mode");
  });

  // Generar contraseña
  btn.addEventListener("click", function () {
      passwordTexts.forEach(text => text.style.opacity = "0");
      loadingElements.forEach(loading => loading.style.display = "flex");

      setTimeout(() => {
          loadingElements.forEach(loading => loading.style.display = "none");
          passwordTexts[0].textContent = generatePassword();
          passwordTexts[1].textContent = generatePassword();
          passwordTexts.forEach(text => text.style.opacity = "1");
      }, 1500); // Simula carga de 1.5 segundos
  });

  function generatePassword() {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
      let password = "";
      for (let i = 0; i < 12; i++) {
          password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return password;
  }
});