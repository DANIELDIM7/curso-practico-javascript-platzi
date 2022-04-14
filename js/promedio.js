// CALCULAR MEDIANA
function calcularMediaAritmetica() {
  const dato1 = document.getElementById("InputDato1");
  const dato1Value = parseInt(dato1.value);

  const dato2 = document.getElementById("InputDato2");
  const dato2Value = parseInt(dato2.value);

  const dato3 = document.getElementById("InputDato3");
  const dato3Value = parseInt(dato3.value);

  const dato4 = document.getElementById("InputDato4");
  const dato4Value = parseInt(dato4.value);

  const dato5 = document.getElementById("InputDato5");
  const dato5Value = parseInt(dato5.value);

  const lista = [dato1Value, dato2Value, dato3Value, dato4Value];

  // El método reduce permite ir sumando cada uno de los elementos
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  const resultP = document.getElementById("ResultP");
  resultP.innerText =
    "El promedio de los valores ingresados es  : " + promedioLista;
}
