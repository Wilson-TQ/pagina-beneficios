// Función para cerrar sesión
function logout() {
  alert("Sesión cerrada");
  window.location.href = "index.html";
}

// Datos simulados de puntos (esto en el futuro puede venir de una API o base de datos)
const puntosUsuario = 1200;
const movimientos = [
  { tipo: "Ganado", descripcion: "Encuesta completada", puntos: 200 },
  { tipo: "Canjeado", descripcion: "Vale para restaurante", puntos: -500 },
  { tipo: "Ganado", descripcion: "Puntualidad 1 mes", puntos: 300 },
  { tipo: "Ganado", descripcion: "Participación evento", puntos: 200 },
];

// Mostrar puntos totales
const puntosTotalEl = document.getElementById("puntos-total");
if (puntosTotalEl) {
  puntosTotalEl.textContent = puntosUsuario;
}

// Mostrar historial de movimientos
const historialEl = document.getElementById("historial-puntos");
if (historialEl) {
  movimientos.forEach(mov => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${mov.descripcion}</span>
      <span style="color: ${mov.puntos > 0 ? 'green' : 'red'}">${mov.puntos > 0 ? '+' : ''}${mov.puntos}</span>
    `;
    historialEl.appendChild(li);
  });
}

function login() {
  const usuario = document.getElementById('username').value;
  const clave = document.getElementById('password').value;

  if (usuario === "admin" && clave === "1234") {
    alert("¡Bienvenido!");
    window.location.href = "beneficios.html";
  } else {
    alert("Usuario o contraseña incorrecta");
  }
}

const tablaMovimientos = document.getElementById("tabla-movimientos");
if (tablaMovimientos) {
  const movimientosDetallados = [
    { fecha: "2024-01-10", desc: "Encuesta", pts: 200 },
    { fecha: "2024-02-03", desc: "Premio puntualidad", pts: 300 },
    { fecha: "2024-02-20", desc: "Vale restaurante", pts: -500 },
  ];

  movimientosDetallados.forEach(mov => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${mov.fecha}</td>
      <td>${mov.desc}</td>
      <td style="color: ${mov.pts > 0 ? 'green' : 'red'}">${mov.pts > 0 ? '+' : ''}${mov.pts}</td>
    `;
    tablaMovimientos.appendChild(fila);
  });
}

const listaEquipo = document.getElementById("lista-equipo");
if (listaEquipo) {
  const colaboradores = [
    { nombre: "Ana Torres", puntos: 1350 },
    { nombre: "Luis Pérez", puntos: 890 },
    { nombre: "Marta López", puntos: 1520 },
    { nombre: "Carlos Díaz", puntos: 700 },
  ];

  colaboradores.forEach(c => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${c.nombre}</span>
      <span><strong>${c.puntos}</strong> pts</span>
    `;
    listaEquipo.appendChild(li);
  });
}

const canvas = document.getElementById("grafico");
if (canvas) {
  const ctx = canvas.getContext("2d");

  const datos = [
    { nombre: "Ana", puntos: 1350 },
    { nombre: "Luis", puntos: 890 },
    { nombre: "Marta", puntos: 1520 },
    { nombre: "Carlos", puntos: 700 }
  ];

  const max = Math.max(...datos.map(d => d.puntos));
  const barWidth = 50;
  const spacing = 20;

  datos.forEach((d, i) => {
    const height = (d.puntos / max) * 150;
    const x = i * (barWidth + spacing) + 30;
    const y = 180 - height;

    ctx.fillStyle = "#007bff";
    ctx.fillRect(x, y, barWidth, height);

    ctx.fillStyle = "#000";
    ctx.font = "12px sans-serif";
    ctx.fillText(d.nombre, x, 195);
  });
}

