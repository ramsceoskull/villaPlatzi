var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverLobo);

var c1, c2, c3;
c1 = 0;
c2 = 0;
c3 = 0;

var xLobo = 150;
var yLobo = 100;

var xVaca = new Array();
var yVaca = new Array();
var xCerdo = new Array();
var yCerdo = new Array();
var xPollo = new Array();
var yPollo = new Array();

var fondo = {
	url: "tile.png",
	carga: false
}

var lobo = {
	url: "lobo.png",
	carga: false
}

var vaca = {
	url: "vaca.png",
	carga: false
}
var cerdo = {
	url: "cerdo.png",
	carga: false
}
var pollo = {
	url: "pollo.png",
	carga: false
}

function moverLobo(e) {
	var movimiento = 50;
	var teclas = {
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	}
	switch(e.keyCode) {
		case teclas.LEFT:
			xLobo = xLobo - movimiento;
			dibujar(xLobo, yLobo);
      break;
		case teclas.UP:
			yLobo = yLobo - movimiento;
			dibujar(xLobo, yLobo);
	    break;
		case teclas.RIGHT:
			xLobo = xLobo + movimiento;
			dibujar(xLobo, yLobo);
	    break;
		case teclas.DOWN:
			yLobo = yLobo + movimiento;
			dibujar(xLobo, yLobo);
	    break;
    default:
	}
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargaFondo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargaLobo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargaVacas);
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargaCerdos);
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargaPollos);

function cargaFondo() {
	fondo.carga = true;
	dibujar();
}

function cargaLobo() {
	lobo.carga = true;
	dibujar();
}

function cargaVacas() {
	vaca.carga = true;
	mantenerPosicion();
}
function cargaCerdos() {
	cerdo.carga = true;
	mantenerPosicion();
}
function cargaPollos() {
	pollo.carga = true;
	mantenerPosicion();
}

function mantenerPosicion() {
	if(vaca.carga) {
		var cantidad = aleatorio(1, 5);
		for(var v = 0; v < cantidad; v++) {
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x * 70;
			y = y * 70;
			xVaca[v] = x;
			yVaca[v] = y;
		}
    while (c1 < 1) {
      console.log("Vacas: " + cantidad);
      c1++;
    }
	}
	if(cerdo.carga) {
		var cantidadC = aleatorio(1, 5);
		for(var c = 0; c < cantidadC; c++) {
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x * 70;
			y = y * 70;
			xCerdo[c] = x;
			yCerdo[c] = y;
		}
    while (c2 < 1) {
      console.log("Cerdos: " + cantidadC);
      c2++;
    }
	}
	if(pollo.carga) {
		var cantidadP = aleatorio(1, 5);
		for(var p = 0; p < cantidadP; p++) {
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x * 70;
			y = y * 70;
			xPollo[p] = x;
			yPollo[p] = y;
		}
    while (c3 < 1) {
      console.log("Pollos: " + cantidadP);
      c3++;
    }
	}
	dibujar();
}

function dibujar() {
	if(fondo.carga) {
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.carga) {
		for(var i = 0; i < 10; i++) {
			papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
		}
	}
	if(cerdo.carga) {
		for(var i = 0; i < 10; i++) {
			papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);
		}
	}
	if(pollo.carga) {
		for(var i = 0; i < 10; i++) {
			papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
		}
	}
	if(lobo.carga) {
		papel.drawImage(lobo.imagen, xLobo, yLobo)
	}
}

function aleatorio(max, min) {
  var resultado
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
}
