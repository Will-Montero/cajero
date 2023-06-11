var imagenes = [];
imagenes["100"] = "https://www.pngegg.com/es/png-bknxa";
imagenes["50"] = "https://www.pngegg.com/es/png-bknxa";
imagenes["20"] = "https://www.pngegg.com/es/png-bknxa";
imagenes["10"] = "https://www.pngegg.com/es/png-bknxa";

class Billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

var caja = [];
caja.push(new Billete(100, 3));
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 5));

contar();

var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

var boton_saldo = document.getElementById("ver_saldo");
boton_saldo.addEventListener("click", saldo);

var boton_depositar = document.getElementById("deposito");
boton_depositar.addEventListener("click", deposito);

function deposito() {
  var monto = prompt(
    "Indica el valor a depositar: Billetes 100, 50, 20 y 10",
    "100"
  );
  if (monto == 100 || monto == 50 || monto == 20 || monto == 10) {
    if (monto == 100) {
      var cant_cien = prompt("Indica la cantidad", 1);
      while (isNaN(cant_cien)) {
        cant_cien = prompt(
          cant_cien + "No es un valor correcto, Por Favor Verifique"
        );
      }
      caja[0].cantidad = caja[0].cantidad + parseInt(cant_cien);
      resultado.innerHTML +=
        "Se ha depositado " + cant_cien + " Billetes de: $" + monto + "<hr />";
    }

    if (monto == 50) {
      var cant_cincuenta = prompt("Indica la cantidad", 1);
      while (isNaN(cant_cincuenta)) {
        cant_cincuenta = prompt(
          cant_cincuenta + "No es un valor correcto, Por Favor Verifique"
        );
      }
      caja[1].cantidad = caja[1].cantidad + parseInt(cant_cincuenta);
      resultado.innerHTML +=
        "Se ha depositado " +
        cant_cincuenta +
        " Billetes de: $" +
        monto +
        "<hr />";
    }

    if (monto == 20) {
      var cant_veinte = prompt("Indica la cantidad", 1);
      while (isNaN(cant_veinte)) {
        cant_veinte = prompt(
          cant_veinte + "No es un valor correcto, Por Favor Verifique"
        );
      }
      caja[2].cantidad = caja[2].cantidad + parseInt(cant_veinte);
      resultado.innerHTML +=
        "Se ha depositado " +
        cant_veinte +
        " Billetes de: $" +
        monto +
        "<hr />";
    }

    if (monto == 10) {
      var cant_diez = prompt("Indica la cantidad", 1);
      while (isNaN(cant_diez)) {
        cant_diez = prompt(
          cant_diez + "No es un valor correcto, Por Favor Verifique"
        );
      }
      caja[3].cantidad = caja[3].cantidad + parseInt(cant_diez);
      resultado.innerHTML +=
        "Se ha depositado " + cant_diez + " Billetes de: $" + monto + "<hr />";
    }
  } else {
    resultado.innerHTML = "Por favor ingrese valores correctos" + "<hr />";
  }
}

function saldo() {
  var monto = 0;
  for (var v of caja) {
    monto = monto + v.valor * v.cantidad;
    total = monto;
    resultado.innerHTML = "Su saldo actual es: " + monto + "<hr />";
  }
}

function entregarDinero() {
  var dibujado = [];
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  if (total >= dinero) {
    for (bi of caja) {
      if (dinero > 0) {
        div = Math.floor(dinero / bi.valor);
        if (div > bi.cantidad) {
          papeles = bi.cantidad;
        } else {
          papeles = div;
        }
        bi.cantidad = bi.cantidad - papeles;
        for (var i = 0; i < papeles; i++) {
          dibujado.push(new Billete(bi.valor, 1));
        }
        dinero -= bi.valor * papeles;
      }
    }
    if (dinero == 0) {
      resultado.innerHTML += "Se ha retirado: <br />";
      for (var e of dibujado) {
        resultado.innerHTML += "<img src=" + e.imagen.src + " />";
      }
      resultado.innerHTML += "<hr />";
      contar();
    } else {
      resultado.innerHTML += "No tengo los billetes para esa suma <hr />";
    }
  } else {
    resultado.innerHTML += "No Tiene Fondos Suficientes <hr />";
  }
}

// advence reviewing

function avance() {
  total = 0;
  for (var tot of caja) {
    total = total + tot.avance * tot.cantidad + valor;
  }
}
console.log(avance);

function contar() {
  total = 0;
  for (var tot of caja) {
    total = total + tot.valor * tot.cantidad;
  }
  console.log(total);
}

document
  .getElementById("avanceForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var monto = document.getElementById("monto").value;
    var cuenta = document.getElementById("cuenta").value;

    if (monto <= 0) {
      document.getElementById("resultado").innerHTML =
        "El monto del avance debe ser mayor a cero.";
      return;
    }

    document.getElementById("resultado").innerHTML =
      " Avance realizado. Monto : " + monto + ", Cuenta: " + cuenta;
  });