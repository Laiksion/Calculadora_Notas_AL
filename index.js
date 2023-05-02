// Función para calcular la nota final de la evaluación
function calcularNota() {
  // Obtenemos los valores introducidos por el usuario
  const cuestionariosInput = document.getElementById("cuestionarios");
  const parcial1Input = document.getElementById("parcial1");
  const parcial2Input = document.getElementById("parcial2");
  const finalInput = document.getElementById("final");
  // Seleccionar el elemento <select> por su ID
  const cuestionariosTipo = document.getElementById('cuestionarios-units');
  const parcial1Tipo = document.getElementById('parcial1-units');
  const parcial2Tipo = document.getElementById('parcial2-units');
  const finalTipo = document.getElementById('final-units');
  const err = document.getElementById("err");
 err.innerText = "VÁLIDO";
  // Convertimos los valores a números
  let cuestionarios;
  let parcial1 = parseFloat(parcial1Input.value);
  let parcial2 = parseFloat(parcial2Input.value);
  let final = parseFloat(finalInput.value);

  // Convertimos los valores si no están en el formato indicado
  if (cuestionariosTipo.value === '15') {
    cuestionarios = parseFloat(cuestionariosInput.value) / 15;
  } else if (cuestionariosTipo.value === '11') {
    const cuestionariosValue = cuestionariosInput.value;
    const cuestionariosArray = cuestionariosValue.split(' ').map(parseFloat);
    cuestionariosArray.sort((a, b) => b - a);
    const mejoresCuestionarios = cuestionariosArray.slice(0, 10);
    const sumaCuestionarios = mejoresCuestionarios.reduce((acumulador, valor) => acumulador + valor, 0);
    const mediaCuestionarios = sumaCuestionarios / 10;
    cuestionarios = mediaCuestionarios / 15;
  } else { //cuestionariosTipo.value === '1'
    cuestionarios = parseFloat(cuestionariosInput.value);
  }
  if (parcial1Tipo.value === '1.75') {
    if (parcial1 > 1.75) {
      err.innerText = "COMPRUEBA LOS RANGOS";
    }
  } else {//=== '10'
      if (parcial1 > 10) {
      err.innerText = "COMPRUEBA LOS RANGOS";
    }
    parcial1 = parcial1 / 10 * 1.75;
  }
  if (parcial2Tipo.value === '2.25') {
    if (parcial1 > 2.25) {
      err.innerText = "COMPRUEBA LOS RANGOS";
    }
  } else { // === '10
    if (parcial2 > 10) {
      err.innerText = "COMPRUEBA LOS RANGOS";
    }
    parcial2 = parcial2 / 10 * 2.25;
  }
  if (finalTipo.value === '10') {
        if (final > 10) {
      err.innerText = "COMPRUEBA LOS RANGOS";
    }
    final = final / 10 * 1;
  } else { // === '1'
       if (final > 1) {
     err.innerText = "COMPRUEBA LOS RANGOS";
    }
  }

  // Calculamos la nota final
  const notaFinal = 10 * final + (cuestionarios + parcial1 + parcial2) * (1 - final);

  // Mostramos la nota final
  const notaFinalOutput = document.getElementById("nota");
  notaFinalOutput.innerText = notaFinal.toFixed(2) + " EXACTA: " + notaFinal;

  // Cambiamos el color de fondo en función de la nota
  if (notaFinal.toFixed(2) < 5.00) {
    notaFinalOutput.style.backgroundColor = "red";
  } else if (notaFinal.toFixed(2) < 6.00) {
    notaFinalOutput.style.backgroundColor = "green";
  } else if (notaFinal.toFixed(2) < 8.00) {
    notaFinalOutput.style.backgroundColor = "orange";
  } else if (notaFinal.toFixed(2) < 9.00) {
    notaFinalOutput.style.backgroundColor = "blue";
  } else {
    notaFinalOutput.style.backgroundColor = "yellow";
  }
}

// Función para calcular la que necesitas en el final
function calcularNotaFin() {
  // Obtenemos los valores introducidos por el usuario
  const cuestionariosInput = document.getElementById("cuestionarios");
  const parcial1Input = document.getElementById("parcial1");
  const parcial2Input = document.getElementById("parcial2");
  const finalInput = document.getElementById("final");
  // Seleccionar el elemento <select> por su ID
  const cuestionariosTipo = document.getElementById('cuestionarios-units');
  const parcial1Tipo = document.getElementById('parcial1-units');
  const parcial2Tipo = document.getElementById('parcial2-units');
  const finalTipo = document.getElementById('final-units');
  const err = document.getElementById("err");
 err.innerText = "VÁLIDO";
  // Convertimos los valores a números
  let cuestionarios;
  let parcial1 = parseFloat(parcial1Input.value);
  let parcial2 = parseFloat(parcial2Input.value);
  let final = parseFloat(finalInput.value);

  // Convertimos los valores si no están en el formato indicado
  if (cuestionariosTipo.value === '15') {
    cuestionarios = parseFloat(cuestionariosInput.value) / 15;
  } else if (cuestionariosTipo.value === '11') {
    const cuestionariosValue = cuestionariosInput.value;
    const cuestionariosArray = cuestionariosValue.split(' ').map(parseFloat);
    cuestionariosArray.sort((a, b) => b - a);
    const mejoresCuestionarios = cuestionariosArray.slice(0, 10);
    const sumaCuestionarios = mejoresCuestionarios.reduce((acumulador, valor) => acumulador + valor, 0);
    const mediaCuestionarios = sumaCuestionarios / 10;
    cuestionarios = mediaCuestionarios / 15;
  } else { //cuestionariosTipo.value === '1'
    cuestionarios = parseFloat(cuestionariosInput.value);
  }
  if (parcial1Tipo.value === '1.75') {
    if (parcial1 > 1.75) {
      err.innerText = "COMPRUEBA LOS RANGOS";
    }
  } else {//=== '10'
      if (parcial1 > 10) {
      err.innerText = "COMPRUEBA LOS RANGOS";
    }
    parcial1 = parcial1 / 10 * 1.75;
  }
  if (parcial2Tipo.value === '2.25') {
    if (parcial1 > 2.25) {
      err.innerText = "COMPRUEBA LOS RANGOS";
    }
  } else { // === '10
    if (parcial2 > 10) {
      err.innerText = "COMPRUEBA LOS RANGOS";
    }
    parcial2 = parcial2 / 10 * 2.25;
  }

  // Calculamos la nota final
  //const notaFinal = 10 * final + (cuestionarios + parcial1 + parcial2) * (1 - final);
  const notaFinal = (5 - (cuestionarios + parcial1 + parcial2)) / (10 - (cuestionarios + parcial1 + parcial2))

  // Mostramos la nota final
  const notaFinalOutput = document.getElementById("nota");
  notaFinalOutput.innerText = "Necesitas en el final: " + notaFinal.toFixed(2) + " EXACTA: " + notaFinal;

  // Cambiamos el color de fondo en función de la nota
  if (notaFinal.toFixed(2) < 5.00) {
    notaFinalOutput.style.backgroundColor = "red";
  } else if (notaFinal.toFixed(2) < 6.00) {
    notaFinalOutput.style.backgroundColor = "green";
  } else if (notaFinal.toFixed(2) < 8.00) {
    notaFinalOutput.style.backgroundColor = "orange";
  } else if (notaFinal.toFixed(2) < 9.00) {
    notaFinalOutput.style.backgroundColor = "blue";
  } else {
    notaFinalOutput.style.backgroundColor = "yellow";
  }
}
// Obtenemos el botón de calcular nota
const calcularButton = document.getElementById("calculate-btn");
const notaButton = document.getElementById("calculate-fin");

// Añadimos un event listener al botón
calcularButton.addEventListener("click", calcularNota);
notaButton.addEventListener("click", calcularNotaFin);
