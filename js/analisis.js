// Funciones helpers
function esPar(numerito) {
  return numerito % 2 === 0;
}

// Calculadora de mediana

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);

    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}

// Mediana general

const salariosCol = colombia.map(
  // Creamos un nuevo array con los salariosCol
  function (personita) {
    return personita.salary;
  }
);
 
// ordenamos los valores para calcular la mediana

const salariosColSorted = salariosCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

  




const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana top 10%


const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length - spliceStart;


const salariosColtop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalarios(salariosColtop10);




console.log({
  medianaGeneralCol,medianaTop10Col
});