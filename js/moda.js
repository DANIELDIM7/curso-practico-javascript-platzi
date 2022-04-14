// const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

// Promerp hay que contar cuantas veces aparece cada número en la lista

function calcularModa() {
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

  const dato6 = document.getElementById("InputDato6");
  const dato6Value = parseInt(dato6.value);

  // CREAMOS LISTAS

  const lista1 = [
    dato1Value,
    dato2Value,
    dato3Value,
    dato4Value,
    dato5Value,
    dato6Value,
  ];
  const lista1Count = {};

  lista1.map(function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  });

  // para crear un array con un objeto
  const lista1Array = Object.entries(lista1Count).sort(function (
    elementoA,
    elementoB
  ) {
    return elementoA[1] - elementoB[1];
  });

  const moda = lista1Array[lista1Array.length - 1];

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El promedio de los valores ingresados es  : " + moda[0];
}
