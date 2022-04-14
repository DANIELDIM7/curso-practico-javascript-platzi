// ESTE ES EL CÓDIGO DEL CUADRADO
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

// ESTE ES EL CÓDIGO DEL TRIÁNGULO
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// ESTE ES EL CÓDIGO DEL CITCUNFERENCIA

console.group("Círculos");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}
// Pi

const PI = Math.PI;
console.log("PI es: " + PI + "cm^2");
// Circunferencia

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// ÁREA DEL CÍRCULO

function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

//  AQUÍ INTERACTUAMOS CON EL HTML

// C

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

// CALCULAMOS TRIANGULO

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("inputLado1Triangulo");
  const value1 = parseInt(input1.value);

  const input2 = document.getElementById("inputLado2Triangulo");
  const value2 = parseInt(input2.value);

  const input3 = document.getElementById("inputBaseTriangulo");
  const value3 = parseInt(input3.value);

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input = document.getElementById("inputAlturaTriangulo");
  const value = parseInt(input.value);

  const input2 = document.getElementById("inputBaseTriangulo");
  const value2 = parseInt(input2.value);

  const area = areaTriangulo(value, value2);
  alert(area);
}

// CALCULAMOS EL CIRCULO

// Diámetro

function calcularDiametroCirculo() {
  const input = document.getElementById("inputRadioCirculo");
  const value = parseInt(input.value);

  const diametro = diametroCirculo(value);
  alert(diametro);
}

// Perímetro

function calcularPerimetroCirculo() {
  const input = document.getElementById("inputRadioCirculo");
  const value = parseInt(input.value);

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

// Área 

function calcularAreaCirculo() {
  const input = document.getElementById("inputRadioCirculo");
  const value = parseInt(input.value);

  const area = areaCirculo(value);
  alert(area);
}

