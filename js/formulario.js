const numberCedula1 = document.getElementById("numberCedula1");
const Contraseña1 = document.getElementById("Contraseña1");

const numberCedula2 = document.getElementById("numberCedula2");
const Contraseña2 = document.getElementById("Contraseña2");

const ContIngreso = document.getElementById("ContIngreso");
const ContRegistro = document.getElementById("ContRegistro");

const formIngreso = document.getElementById("formIngreso");
const formRegistro = document.getElementById("formRegistro");

const btnIngreso = document.getElementById("btnIngreso");
const btnRegistro = document.getElementById("btnRegistro");

formIngreso.addEventListener("submit", function (e){
  e.preventDefault()

  const saveUser = localStorage.getItem('numUser');
  const savePassword = localStorage.getItem('passwwordUser');

  let numUser = numberCedula1.value
  let passwwordUser = Contraseña1.value

  if(saveUser !== null) {
    localStorage.setItem("numUser", numUser)
    localStorage.setItem("passwwordUser", passwwordUser)
console.log(numUser, passwwordUser)
    if ((saveUser === numUser) && (savePassword === passwwordUser)){
      window.location.href = "./Databank.html"
    } else {
      alert("El usuario o la contraseña no coinciden");
    }
  } else {
    alert("El usuario al parecer aun no esta registrado, Te recomendamos Registrarte");
  }
});

formRegistro.addEventListener("submit", function (e) {
  e.preventDefault()

  let numUser = numberCedula2.value;
  let passwwordUser = Contraseña2.value;

  localStorage.setItem("numUser", numUser)
  localStorage.setItem("passwwordUser", passwwordUser)

  window.location.href = "./index.html"
  // bucar la pagina a la cual tengo que dirigirme 
});

btnRegistro.addEventListener("click", function () {
  ContRegistro.classList.remove("d-none")
  ContIngreso.classList.add("d-none")
});

btnIngreso.addEventListener("click", function () {
  ContRegistro.classList.add("d-none")
  ContIngreso.classList.remove("d-none")
});