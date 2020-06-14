// =============================================================
//  Código para la tabla numero #1

// let filas = document.querySelectorAll('.table1 tr');
let filascabecera = document.querySelectorAll('.table1 tr:nth-child(1) th');
let filascuerpo1 = document.querySelectorAll('.table1 tr:nth-child(2) td');
let filascuerpo2 = document.querySelectorAll('.table1 tr:nth-child(3) td');
let filascuerpo3 = document.querySelectorAll('.table1 tr:nth-child(4) td');
let filascuerpo4 = document.querySelectorAll('.table1 tr:nth-child(5) td');
let filascuerpo5 = document.querySelectorAll('.table1 tr:nth-child(6) td');
let filascuerpo6 = document.querySelectorAll('.table1 tr:nth-child(7) td');
let filascuerpo7 = document.querySelectorAll('.table1 tr:nth-child(8) td');

// for (var i = filas.length - 1; i >= 0; i--) {
//     console.log(filas[i]);
// }

// =======================================================
//  Cabecera 
for (var i = filascabecera.length - 1; i >= 0; i--) {

    if (i == 0) {
        filascabecera[i].innerHTML = "a";
    }
    if (i == 2) {
        filascabecera[i].innerHTML = "a";
    }
    if (i == 3) {
        filascabecera[i].innerHTML = "b";
    }
    if (i == 5) {
        filascabecera[i].innerHTML = "a";
    }
    if (i == 6) {
        filascabecera[i].innerHTML = "b";
    }
    if (i == 7) {
        filascabecera[i].innerHTML = "c";
    }
    // filascabecera[i].innerHTML = i;

    // console.log(filascabecera[i]);
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
    // filascuerpo1[i].innerHTML = i;

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
    // filascuerpo2[i].innerHTML = i;
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
    // filascuerpo3[i].innerHTML = i;
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
    // filascuerpo4[i].innerHTML = i;
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
    // filascuerpo5[i].innerHTML = i;
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
    // filascuerpo6[i].innerHTML = i;
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
    // filascuerpo7[i].innerHTML = i;
}
// =====================================================
// =====================================================

// const filasCuerpo = Array(8).map((_, i) => document.querySelectorAll(`.table1 tr:nth-child${i + 2} td`));
// filasCuerpo.forEach((columna, index, fila) => columna.innerHtml = fila.length - index - 1);

// map es una funcion disponible en Array, la utilizas para convertir un listado de valores a otro por ejemplo: [1,2,3].map(i => i * i) devuelve [1,4,9]

// no, la funcion de map recive 3 parametros usualmente solo se usa el primero, que es el valor que estas trasnformando, el segundo es el indice dentro de la coleccion y el tercero la coleccion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?fbclid=IwAR0c5XXPL5wm31Zi-ur-FOqGg_bsgM9k7Udqs-cLJglX78yxpc8GVANvQ00

// https://www.techiediaries.com/javascript-queryselectorall-nodelist-foreach/

// =======================================================================

//  Código para la tabla numero #2

// ========================================================================
//  Codigo de practica 
// --------------------

// var filasx = [];
// for (var i = 0; i <= tablefila2.length - 1; i++) {

//     var n;
//     n = i + 1;
//     var fila = "fila" + n;
//     fila = document.querySelectorAll(".table2 tr:nth-child(" + (n) + ") td");
//     filasx[i] = fila;
//     console.log(fila);
// }
// console.log(' Table 2=========================');
// for (var i = filasx.length - 1; i >= 0; i--) {

//     if (i == 0) {
//         filasx[i].innerHTML = "A";
//     } else if (i == 1) {
//         filasx[i].innerHTML = "B";
//     }
//     console.log(filasx[i]);
// }
// ========================================================================

var table2filas = document.querySelectorAll(".table2 tr");
var table2fila1campos = document.querySelectorAll(".table2 tr:nth-child(1) th");
var table2fila2campos = document.querySelectorAll(".table2 tr:nth-child(2) td");
var table2fila3campos = document.querySelectorAll(".table2 tr:nth-child(3) td");

// =============================================================
for (var i = table2fila1campos.length - 1; i >= 0; i--) {

    if (i == 0) {

        table2fila1campos[i].innerHTML = "a";

    } else if (i == 1) {

        table2fila1campos[i].innerHTML = "~a";
    }

}
// =============================================================

// =============================================================
for (var i = table2fila2campos.length - 1; i >= 0; i--) {

    if (i == 0) {

        table2fila2campos[i].innerHTML = 0;

    } else if (i == 1) {

        table2fila2campos[i].innerHTML = 1;

    }

}
// =============================================================

// =============================================================
for (var i = table2fila3campos.length - 1; i >= 0; i--) {

    if (i == 0) {

        table2fila3campos[i].innerHTML = 1;

    } else if (i == 1) {

        table2fila3campos[i].innerHTML = 0;
    }

}
// =============================================================

// =============================================================
for (var i = 0; i <= table2fila1campos.length - 1; i++) {

    console.log(table2fila1campos[i].childNodes[0].nodeValue);
    // console.log('=================');
}
// =============================================================

// ===========================================================================================================
// --------------------------------
//  Código para la tabla numero #3
// --------------------------------

var table3filas = document.querySelectorAll(".table3 tr");
var table3fila1campos = document.querySelectorAll(".table3 tr:nth-child(1) th");
var table3fila2campos = document.querySelectorAll(".table3 tr:nth-child(2) td");
var table3fila3campos = document.querySelectorAll(".table3 tr:nth-child(3) td");
var table3fila4campos = document.querySelectorAll(".table3 tr:nth-child(4) td");
var table3fila5campos = document.querySelectorAll(".table3 tr:nth-child(5) td");
// ========================================================
// Cabecera
for (var i = 0; i < table3fila1campos.length; i++) {

    if (i == table3fila1campos.length - 1) {

        table3fila1campos[i].innerHTML = "a ^ b";

    } else {

        if (i == 0) {

            table3fila1campos[i].innerHTML = "a";

        } else {

            table3fila1campos[i].innerHTML = "b";
        }

    }

    console.log(table3fila1campos[i].childNodes[0].nodeValue);
}
// ========================================================

// ========================================================
// #2
for (var i = 0; i < table3fila2campos.length; i++) {

    if (i == table3fila2campos.length) {
        // la proposición resultante será verdadera solamente cuando 
        // el valor de verdad de ambas proposiciones es verdadero

        // table3fila2campos[i].innerHTML = 0;

    } else {

        if (i == 0) {

            table3fila2campos[i].innerHTML = 0;

        } else if (i == 1) {

            table3fila2campos[i].innerHTML = 0;
        }
    }
    if (parseInt(table3fila2campos[0].childNodes[0].nodeValue) == 1 && parseInt(table3fila2campos[1].childNodes[0].nodeValue) == 1) {
        table3fila2campos[table3fila2campos.length - 1].innerHTML = "Verdadero";
    } else {
        table3fila2campos[table3fila2campos.length - 1].innerHTML = "Falso";
    }
    // table3fila2campos[i].innerHTML = i;
    console.log(parseInt(table3fila2campos[i].childNodes[0].nodeValue));
}
// ========================================================

// =======================================================\
// #3
for (var i = 0; i < table3fila3campos.length; i++) {

    if (i == table3fila3campos.length) {

    } else {

        if (i == 0) {

            table3fila3campos[i].innerHTML = 0;

        } else if (i == 1) {

            table3fila3campos[i].innerHTML = 1;
        }
    }
    // table3fila3campos[i].innerHTML = i;

    if (parseInt(table3fila3campos[0].childNodes[0].nodeValue) == 1 && parseInt(table3fila3campos[1].childNodes[0].nodeValue) == 1) {

        table3fila3campos[table3fila3campos.length - 1].innerHTML = "Verdadero";

    } else {

        table3fila3campos[table3fila3campos.length - 1].innerHTML = "Falso";
    }
    console.log(table3fila3campos[i].childNodes[0].nodeValue);
}
// =======================================================

// ===========================================================
// #4
for (var i = 0; i < table3fila4campos.length; i++) {

    if (i == table3fila4campos.length) {

    } else {

        if (i == 0) {

            table3fila4campos[i].innerHTML = 1;

        } else if (i == 1) {

            table3fila4campos[i].innerHTML = 0;
        }
    }
    // table3fila4campos[i].innerHTML = i;

    if (parseInt(table3fila4campos[0].childNodes[0].nodeValue) == 1 && parseInt(table3fila4campos[1].childNodes[0].nodeValue) == 1) {

        table3fila4campos[table3fila4campos.length - 1].innerHTML = "Verdadero";

    } else {

        table3fila4campos[table3fila4campos.length - 1].innerHTML = "Falso";
    }
    console.log(table3fila4campos[i].childNodes[0].nodeValue);
}
// ==========================================================

// ===========================================================
// #5
for (var i = 0; i < table3fila5campos.length; i++) {

    if (i == table3fila5campos.length) {

    } else {

        if (i == 0) {

            table3fila5campos[i].innerHTML = 1;

        } else if (i == 1) {

            table3fila5campos[i].innerHTML = 1;
        }
    }
    // table3fila5campos[i].innerHTML = i;

    if (parseInt(table3fila5campos[0].childNodes[0].nodeValue) == 1 && parseInt(table3fila5campos[1].childNodes[0].nodeValue) == 1) {

        table3fila5campos[table3fila5campos.length - 1].innerHTML = "Verdadero";

    } else {

        table3fila5campos[table3fila5campos.length - 1].innerHTML = "Falso";
    }
    console.log(table3fila5campos[i].childNodes[0].nodeValue);
}