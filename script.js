document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  if (usuario && password) {
    alert(`Bienvenido, ${usuario}`);
  } else {
    alert("Por favor, completa todos los campos.");
  }
});
