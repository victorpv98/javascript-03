function calcularSalario() {
  var horasTrabajadas = document.getElementById("horasTrabajadas").value;
  var tarifaPorHora = document.getElementById("tarifaPorHora").value;

  var salario;
  if (horasTrabajadas > 40) {
    salario = 40 * tarifaPorHora + (horasTrabajadas - 40) * tarifaPorHora * 1.5;
  } else {
    salario = horasTrabajadas * tarifaPorHora;
  }

  document.getElementById("salario").innerHTML = salario.toFixed(2);
}

function calcularPerimetro() {
  var radio = document.getElementById("radio").value;

  var perimetro = 2 * Math.PI * radio;

  document.getElementById("resultado01").innerHTML =
    "El perímetro de la circunferencia es: " + perimetro;
}
function calcularPerimetroReducido01() {
  var radio = document.getElementById("radio").value;

  var radioReducido = radio / 2;

  var perimetro = 2 * Math.PI * radioReducido;

  document.getElementById("resultado02").innerHTML =
    "El perímetro de la circunferencia reducido al 50% es: " + perimetro;
}
function calcularPerimetroReducido02() {
  var radio = document.getElementById("radio").value;

  var radioReducido = radio / 2;

  var radioReducido = radioReducido / 4;

  var perimetro = 2 * Math.PI * radioReducido;

  document.getElementById("resultado03").innerHTML =
    "El perímetro de la circunferencia reducido al 25% es: " + perimetro;
}

function calcularSalarioPorcentaje() {
  var horasTrabajadas = document.getElementById("horasLaborales").value;
  var tarifaPago = document.getElementById("tarifaPago").value;
  var salario = horasTrabajadas * tarifaPago;
  document.getElementById("salario").innerHTML = salario;
  document.getElementById("porcentaje10").innerHTML = salario * 0.1;
  document.getElementById("porcentaje30").innerHTML = salario * 0.3;
  document.getElementById("porcentaje60").innerHTML = salario * 0.6;
  document.getElementById("porcentaje80").innerHTML = salario * 0.8;
}

function calcularCalificacionFinal() {
  var calificacionParcial1 = document.getElementById(
    "calificacionParcial1"
  ).value;
  var calificacionParcial2 = document.getElementById(
    "calificacionParcial2"
  ).value;
  var calificacionParcial3 = document.getElementById(
    "calificacionParcial3"
  ).value;
  var calificacionExamenFinal = document.getElementById(
    "calificacionExamenFinal"
  ).value;
  var calificacionTrabajoFinal = document.getElementById(
    "calificacionTrabajoFinal"
  ).value;
  var promedioParciales =
    (calificacionParcial1 + calificacionParcial2 + calificacionParcial3) / 3;
  var calificacionFinal =
    promedioParciales * 0.55 +
    calificacionExamenFinal * 0.3 +
    calificacionTrabajoFinal * 0.15;
  document.getElementById("calificacionFinal").innerHTML = calificacionFinal;
}

function calcularPresupuesto() {
  var presupuesto = document.getElementById("presupuesto").value;

  var ginecologia = presupuesto * 0.4;
  var traumatologia = presupuesto * 0.3;
  var pediatria = presupuesto * 0.3;

  document.getElementById("ginecologia").value = ginecologia;
  document.getElementById("traumatologia").value = traumatologia;
  document.getElementById("pediatria").value = pediatria;
}
