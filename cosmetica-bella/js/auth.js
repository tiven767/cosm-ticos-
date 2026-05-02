function login(e) {
  e.preventDefault();

  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  const encontrado = usuarios.find(u => 
    u.usuario === user && u.contraseña === pass
  );

  if (encontrado) {
    localStorage.setItem("usuario", JSON.stringify(encontrado));

    if (encontrado.rol === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "paginas/cejas.html";
    }

  } else {
    alert("Datos incorrectos");
  }
}


if (encontrado.rol === "admin") {
  window.location.href = "admin.html";
} else {
  window.location.href = "usuario.html"; // 👈 NO agendar directo
}


function login(e) {
  e.preventDefault();

  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  const encontrado = usuarios.find(u => 
    u.usuario === user && u.contraseña === pass
  );

  if (encontrado) {
    localStorage.setItem("usuario", JSON.stringify(encontrado));

    if (encontrado.rol === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "agendar.html"; // 👈 AQUÍ VA
    }

  } else {
    alert("Datos incorrectos");
  }
}