document.getElementById("avanceForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario y se refresque la página
  
    // Obtiene los valores de los campos de entrada
    var monto = document.getElementById("monto").value;
    var cuenta = document.getElementById("cuenta").value;
  
    // Realiza las validaciones necesarias
    if (monto <= 0) {
      document.getElementById("resultado").innerHTML = "El monto del avance debe ser mayor a cero.";
      return;
    }
  
    // Realiza la lógica del avance bancario (aquí puedes agregar tu propia implementación)
    // ...
    
    // Muestra el resultado del avance
    document.getElementById("resultado").innerHTML = " Avance realizado. Monto : " + monto + ", Cuenta: " + cuenta;
  });