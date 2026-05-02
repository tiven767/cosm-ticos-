const usuario = JSON.parse(localStorage.getItem("usuario"));

if (!usuario || usuario.rol !== "admin") {
  alert("No tienes acceso");
  window.location.href = "index.html";
}


if (usuario.rol !== "admin") {
  alert("No tienes acceso");
  window.location.href = "index.html";
}