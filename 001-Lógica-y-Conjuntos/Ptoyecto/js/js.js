let filas = document.querySelectorAll('table tr');
let filascabecera = document.querySelectorAll('tr:nth-child(1) th');
let filascuerpo1 = document.querySelectorAll('tr:nth-child(2) td');
let filascuerpo2 = document.querySelectorAll('tr:nth-child(3) td');
let filascuerpo3 = document.querySelectorAll('tr:nth-child(4) td');
let filascuerpo4 = document.querySelectorAll('tr:nth-child(5) td');
let filascuerpo5 = document.querySelectorAll('tr:nth-child(6) td');
let filascuerpo6 = document.querySelectorAll('tr:nth-child(7) td');
let filascuerpo7 = document.querySelectorAll('tr:nth-child(8) td');

for (var i = filas.length - 1; i >= 0; i--) {
    console.log(filas[i]);
}

// =======================================================
//  Cabecera 
for (var i = filascabecera.length - 1; i >= 0; i--) {

    if (i == 0) {
        filascabecera[i].innerHTML = "A";
    }
    if (i == 2) {
        filascabecera[i].innerHTML = "A";
    }
    if (i == 3) {
        filascabecera[i].innerHTML = "B";
    }
    if (i == 5) {
        filascabecera[i].innerHTML = "A";
    }
    if (i == 6) {
        filascabecera[i].innerHTML = "B";
    }
    if (i == 7) {
        filascabecera[i].innerHTML = "C";
    }

    console.log(filascabecera[i]);
}
// =======================================================

// =====================================================
// #1
for (var i = filascuerpo1.length - 1; i >= 0; i--) {
    if (i == 0) {
        filascuerpo1[i].innerHTML = 0;
    }
    if (i == 2) {
        filascuerpo1[i].innerHTML = 0;
    }
    if (i == 3) {
        filascuerpo1[i].innerHTML = 0;
    }
    if (i == 5) {
        filascuerpo1[i].innerHTML = 0;
    }
    if (i == 6) {
        filascuerpo1[i].innerHTML = 0;
    }
    if (i == 7) {
        filascuerpo1[i].innerHTML = 0;
    }

}
// =====================================================

// =====================================================
// #2
for (var i = filascuerpo2.length - 1; i >= 0; i--) {
    if (i == 0) {
        filascuerpo2[i].innerHTML = 1;
    }
    if (i == 2) {
        filascuerpo2[i].innerHTML = 0;
    }
    if (i == 3) {
        filascuerpo2[i].innerHTML = 1;
    }
    if (i == 5) {
        filascuerpo2[i].innerHTML = 0;
    }
    if (i == 6) {
        filascuerpo2[i].innerHTML = 0;
    }
    if (i == 7) {
        filascuerpo2[i].innerHTML = 1;
    }
}
// =====================================================

// =====================================================
// #3
for (var i = filascuerpo3.length - 1; i >= 0; i--) {

    if (i == 2) {
        filascuerpo3[i].innerHTML = 1;
    }
    if (i == 3) {
        filascuerpo3[i].innerHTML = 0;
    }
    if (i == 5) {
        filascuerpo3[i].innerHTML = 0;
    }
    if (i == 6) {
        filascuerpo3[i].innerHTML = 1;
    }
    if (i == 7) {
        filascuerpo3[i].innerHTML = 0;
    }
}
// =====================================================

// =====================================================
// #4
for (var i = filascuerpo4.length - 1; i >= 0; i--) {

    if (i == 2) {
        filascuerpo4[i].innerHTML = 1;
    }
    if (i == 3) {
        filascuerpo4[i].innerHTML = 1;
    }
    if (i == 5) {
        filascuerpo4[i].innerHTML = 0;
    }
    if (i == 6) {
        filascuerpo4[i].innerHTML = 1;
    }
    if (i == 7) {
        filascuerpo4[i].innerHTML = 1;
    }
}
// =====================================================

// =====================================================
// #5
for (var i = filascuerpo5.length - 1; i >= 0; i--) {

    if (i == 5) {
        filascuerpo5[i].innerHTML = 1;
    }
    if (i == 6) {
        filascuerpo5[i].innerHTML = 0;
    }
    if (i == 7) {
        filascuerpo5[i].innerHTML = 0;
    }
}
// =====================================================

// =====================================================
// #6
for (var i = filascuerpo6.length - 1; i >= 0; i--) {
    if (i == 5) {
        filascuerpo6[i].innerHTML = 1;
    }
    if (i == 6) {
        filascuerpo6[i].innerHTML = 1;
    }
    if (i == 7) {
        filascuerpo6[i].innerHTML = 0;
    }
}
// =====================================================

// =====================================================
// #7
for (var i = filascuerpo7.length - 1; i >= 0; i--) {
    if (i == 5) {
        filascuerpo7[i].innerHTML = 1;
    }
    if (i == 6) {
        filascuerpo7[i].innerHTML = 1;
    }
    if (i == 7) {
        filascuerpo7[i].innerHTML = 1;
    }
}
// =====================================================
// =====================================================

// const filasCuerpo = Array(8).map((_, i) => document.querySelectorAll(`tr:nth-child${i + 2} td`));
// filasCuerpo.forEach((columna, index, fila) => columna.innerHtml = fila.length - index - 1);

// map es una funcion disponible en Array, la utilizas para convertir un listado de valores a otro por ejemplo: [1,2,3].map(i => i * i) devuelve [1,4,9]

// no, la funcion de map recive 3 parametros usualmente solo se usa el primero, que es el valor que estas trasnformando, el segundo es el indice dentro de la coleccion y el tercero la coleccion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?fbclid=IwAR0c5XXPL5wm31Zi-ur-FOqGg_bsgM9k7Udqs-cLJglX78yxpc8GVANvQ00

// https://www.techiediaries.com/javascript-queryselectorall-nodelist-foreach/