// 🔥 MENSAJE DE BIENVENIDA
window.addEventListener("load", function() {
    console.log("Cosmética Bella lista 💄✨");
});


// 🔥 BOTÓN VOLVER ARRIBA
const btnArriba = document.createElement("button");
btnArriba.innerText = "↑";
btnArriba.id = "btnArriba";
document.body.appendChild(btnArriba);

btnArriba.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        btnArriba.style.display = "block";
    } else {
        btnArriba.style.display = "none";
    }
});


// 🔥 ANIMACIÓN DE TARJETAS AL HACER SCROLL
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", function() {
    cards.forEach(function(card) {
        const posicion = card.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});


// 🔥 FORMULARIO DE RESERVA (SI LO TIENES)
const form = document.getElementById("formReserva");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const servicio = document.getElementById("servicio").value;

        alert("Gracias " + nombre + " 💖 Tu reserva para " + servicio + " fue enviada.");

        form.reset();
    });
}


// 🔥 GALERÍA QUE SE ABRE GRANDE
function abrirImagen(img) {
    const modal = document.getElementById("modal");
    const imagenGrande = document.getElementById("imagenGrande");

    modal.style.display = "flex";
    imagenGrande.src = img.src;
}

function cerrarImagen() {
    document.getElementById("modal").style.display = "none";
}




const usuarios = [
  { usuario: "admin", contraseña: "1234", rol: "admin" },
  { usuario: "estiven", contraseña: "1234", rol: "user" }
];






function login(e) {
  e.preventDefault();

  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  const encontrado = usuarios.find(u => u.usuario === user && u.contraseña === pass);

  if (encontrado) {
    localStorage.setItem("usuario", JSON.stringify(encontrado));

    if (encontrado.rol === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "index.html";
    }

window.location.href = "agendar.html";

  } else {
    alert("Datos incorrectos");
  }
}