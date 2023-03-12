// Función para calcular la nota final de la evaluación
function calcularNota() {
  // Obtenemos los valores introducidos por el usuario
  const cuestionariosInput = document.getElementById("cuestionarios");
  const parcial1Input = document.getElementById("parcial1");
  const parcial2Input = document.getElementById("parcial2");
  const finalInput = document.getElementById("final");

  // Convertimos los valores a números
  let cuestionarios = parseFloat(cuestionariosInput.value);
  let parcial1 = parseFloat(parcial1Input.value);
  let parcial2 = parseFloat(parcial2Input.value);
  let final = parseFloat(finalInput.value);

  // Convertimos los valores si no están en el formato indicado
  if (cuestionarios > 15) {
    cuestionarios = cuestionarios / 15;
  }
  if (parcial1 > 1.75) {
    parcial1 = parcial1 / 1.75;
  }
  if (parcial2 > 2.25) {
    parcial2 = parcial2 / 2.25;
  }
  if (final > 1) {
    final = final / 10;
  }

  // Calculamos la nota final
  const notaFinal = 10 * final + (cuestionarios + parcial1 + parcial2) * (1 - final);

  // Mostramos la nota final
  const notaFinalOutput = document.getElementById("nota");
  notaFinalOutput.innerText = notaFinal.toFixed(2);

  // Cambiamos el color de fondo en función de la nota
  if (notaFinal < 5) {
    notaFinalOutput.style.backgroundColor = "red";
  } else if (notaFinal < 6) {
    notaFinalOutput.style.backgroundColor = "green";
  } else if (notaFinal < 8) {
    notaFinalOutput.style.backgroundColor = "orange";
  } else {
    notaFinalOutput.style.backgroundColor = "blue";
  }
}

// Obtenemos el botón de calcular nota
const calcularButton = document.getElementById("calculate-btn");

// Añadimos un event listener al botón
calcularButton.addEventListener("click", calcularNota);