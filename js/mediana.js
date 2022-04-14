function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// const lista1 = [100, 200, 500, 400000000];

// const lista2 = lista1.sort(function(a, b){return a - b});


// const mitadLista1 = parseInt(lista2.length / 2);

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}




function onClickButtonMediana(){
  const dato1 = document.getElementById("InputDato1");
  const dato1Value =parseInt(dato1.value) ;

  const dato2 = document.getElementById("InputDato2");
  const dato2Value = parseInt(dato2.value);

  const dato3 = document.getElementById("InputDato3");
  const dato3Value = parseInt(dato3.value) ;

  const dato4 = document.getElementById("InputDato4");
  const dato4Value = parseInt(dato4.value) ;

  // ORganizamos en una lista

  const lista1 = [dato1Value,dato2Value,dato3Value,dato4Value];
  const lista2 = lista1.sort(function(a, b){return a - b});   

  // calculamos la mitad de la lista

  const mitadLista1 = parseInt(lista2.length / 2);

  // Calculamos la mediana

  // let mediana;

  if (esPar(lista1.length)) {
    const elemento1 = lista2[mitadLista1 -1];
    const elemento2 = lista2[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    medianaf = promedioElemento1y2;

  }else{
      medianaf = lista2[mitadLista1]; 
  }

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "La mediana de los valores ingresados es : " + medianaf;




}