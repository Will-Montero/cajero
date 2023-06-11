class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-', 
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    };
};

const cerrarSesion = document.getElementById("cerrarSesion");
const accesoUsu = document.getElementById("accesoUsu");
const btnCerrarSesion = document.getElementById("btnCerrarSesion");
const btnIngreso = document.getElementById("btnIngreso")

const guardarUsu = localStorage.getItem("numUser");
const savePassword = localStorage.getItem("passwwordUser");



if (guardarUsu !== null) {
    btnIngreso.classList.add("d-none")
    btnCerrarSesion.classList.remove("d-none")
} else {
    btnCerrarSesion.classList.add("d-none")
    btnIngreso.classList.remove("d-none")
};

btnCerrarSesion.addEventListener("click", function (e) {
    e.preventDefault()
    window.location.href = "./index.html"
    // localStorage.clear() //lo vamos a dejar opcional
});

accesoUsu.innerText = guardarUsu
console.log(accesoUsu.innerText)


btnIngreso.addEventListener("click", function () {
    window.location = "./index.html"
})

