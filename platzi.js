var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};
var pollo = {
  url: "pollo.png",
  cargaOK: false
};

var cantidad = aleatorio(1, 5);
var cantidad1 = aleatorio(1, 5);
var cantidad2 = aleatorio(1, 5);

fondo.imagen = new Image();
  // Es la definición completa de un objeto y es por eso que empieza con mayuscula
    // Y hace referencia a las clases (Image es una clase)
    // y imagen es una instancia de la clase
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}
function cargarCerdos() {
  cerdo.cargaOK = true;
  dibujar();
}
function cargarPollos() {
  pollo.cargaOK = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOK == true) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK) {
    console.log("Vacas: " + cantidad);
    for (var v = 0; v < cantidad; v++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      x = x * 60;
      y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if (cerdo.cargaOK) {
    console.log("Cerdos: " + cantidad1);
    for (var c = 0; c < cantidad1; c++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      x = x * 60;
      y = y * 60;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
  if (pollo.cargaOK) {
    console.log("Pollos: " + cantidad2);
    for (var p = 0; p < cantidad2; p++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      x = x * 60;
      y = y * 60;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
}

function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
