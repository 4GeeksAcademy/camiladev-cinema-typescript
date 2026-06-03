// Crear la matriz
var asientosCine = [];
var filas = 8;
var asientosPorFila = 10;
// Inicializar la matriz con asientos vacios
for (var i = 0; i < filas; i++) {
    var fila = [];
    for (var j = 0; j < asientosPorFila; j++) {
        fila.push(0);
    }
    asientosCine.push(fila);
}
// Estilos del body
document.body.className = "bg-[#1a1a1a] text-white font-sans text-center min-h-screen py-10";
var titulo = document.querySelector("h1");
if (titulo) {
    titulo.className = "text-4xl medium: text-5xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-[#2ec4b6] to-[#e71d36] bg-clip-text text-transparent drop-shadow-md";
}
// Reservar asientos
asientosCine[2][3] = 1;
asientosCine[3][3] = 1;
asientosCine[4][3] = 1;
asientosCine[5][3] = 1;
asientosCine[6][3] = 1;
asientosCine[7][3] = 1;
asientosCine[2][4] = 1;
asientosCine[3][4] = 1;
asientosCine[4][4] = 1;
asientosCine[5][4] = 1;
asientosCine[6][4] = 1;
asientosCine[7][4] = 1;
asientosCine[2][5] = 1;
asientosCine[3][5] = 1;
asientosCine[4][5] = 1;
asientosCine[5][5] = 1;
asientosCine[6][5] = 1;
asientosCine[7][5] = 1;
asientosCine[2][3] = 0;
// Visualizar la matriz y convertir los numeros a letras
console.log("MAPA DE LA SALA");
asientosCine.forEach(function (fila, i) {
    var cambiarNumeroPorLetra = fila.map(function (asiento) {
        return asiento === 0 ? "L" : "X";
    });
    console.log("Fila ".concat(i + 1, ": ").concat(cambiarNumeroPorLetra.join(" ")));
});
//  Función que valida las reservas
function validarReserva(fila, asiento) {
    if (fila < 1 || fila > filas || asiento < 1 || asiento > asientosPorFila) {
        console.log("❌Número de fila o asiento inválido.");
        return;
    }
    if (asientosCine[fila - 1][asiento - 1] === 1) {
        console.log("❌El asiento ya está reservado.");
        return;
    }
    asientosCine[fila - 1][asiento - 1] = 1;
    console.log("\u2705Reserva confirmada para la fila ".concat(fila, ", asiento ").concat(asiento));
}
// Contar el número de asientos reservados
var asientosReservados = 0;
for (var _i = 0, asientosCine_1 = asientosCine; _i < asientosCine_1.length; _i++) {
    var fila = asientosCine_1[_i];
    for (var _a = 0, fila_1 = fila; _a < fila_1.length; _a++) {
        var asiento = fila_1[_a];
        if (asiento === 1) {
            asientosReservados++;
        }
    }
}
console.log("N\u00FAmero total de asientos reservados: ".concat(asientosReservados));
// Contar el número de asientos disponibles
var asientosDisponibles = 0;
for (var _b = 0, asientosCine_2 = asientosCine; _b < asientosCine_2.length; _b++) {
    var fila = asientosCine_2[_b];
    for (var _c = 0, fila_2 = fila; _c < fila_2.length; _c++) {
        var asiento = fila_2[_c];
        if (asiento === 0) {
            asientosDisponibles++;
        }
    }
}
console.log("N\u00FAmero total de asientos disponibles: ".concat(asientosDisponibles));
// corroborar si el asiento está reservado o no
// console.log("El asiento de la fila 6, asiento 4 está reservado?", asientosCine [7][5]);
// MEJOR FORMA DE CORROBORAR SI EL ASIENTO ESTÁ RESERVADO O NO
validarReserva(6, 4);
validarReserva(2, 3);
// console.log("El asiento de la fila 1, asiento 2 está reservado?", asientosCine [1][2]);
// Validar si hay dos asientos contiguos disponibles
function buscarAsientosContiguos() {
    for (var i = 0; i < filas; i++) {
        for (var j = 0; j < asientosPorFila - 1; j++) {
            var asientoActual = asientosCine[i][j];
            var asientoSiguiente = asientosCine[i][j + 1];
            if (asientoActual === 0 && asientoSiguiente === 0) {
                console.log("\u2728 \u00A1Asientos encontrados! Fila ".concat(i + 1, ", Asientos contiguos: ").concat(j + 1, " y ").concat(j + 2));
                return;
            }
        }
    }
    console.log("❌ Lo sentimos, no hay dos asientos contiguos disponibles en toda la sala.");
}
// Probando la función de buscar asientos contiguos
buscarAsientosContiguos();
// Cancelar reserva de un asiento
function cancelarReserva(fila, asiento) {
    if (fila < 1 || fila > filas || asiento < 1 || asiento > asientosPorFila) {
        console.log("❌Número de fila o asiento inválido.");
        return;
    }
    if (asientosCine[fila - 1][asiento - 1] === 0) {
        console.log("❌El asiento seleccionado ya está libre.");
        return;
    }
    asientosCine[fila - 1][asiento - 1] = 0;
    console.log("\u2705Cancelaci\u00F3n confirmada para la fila ".concat(fila, ", asiento ").concat(asiento));
}
// Dibujar la sala de cine en el html
function dibujarCineEnPantalla() {
    var contenedor = document.getElementById("sala-cine");
    if (!contenedor)
        return;
    contenedor.innerHTML = "";
    contenedor.className = "flex flex-col items-center justify-center p-6 gap-2 w-full max-w-xs sm:max-w-xl  mx-auto py-4";
    asientosCine.forEach(function (fila, i) {
        var divFila = document.createElement("div");
        divFila.className = "flex flex-row flex-wrap justify-center w-full";
        fila.forEach(function (valorNumerico, j) {
            var boton = document.createElement("button");
            var clasesBase = "w-9 h-9 sm:w-11 sm:h-11 m-0.5 sm:m-1 rounded-md font-bold text-sm sm:text-base transition-colors duration-200 cursor-pointer text-white flex items-center justify-center";
            if (valorNumerico === 0) {
                boton.innerText = "L";
                boton.className = "".concat(clasesBase, " bg-[#2ec4b6] hover:bg-[#25a195]");
            }
            else {
                boton.innerText = "X";
                boton.className = "".concat(clasesBase, " bg-[#e71d36] cursor-not-allowed");
            }
            boton.onclick = function () {
                // Si el asiento está libre, lo reservamos
                if (valorNumerico === 0) {
                    validarReserva(i + 1, j + 1);
                }
                // Si el asiento está ocupado, lo cancelamos al hacer clic
                else {
                    alert("❌ Este asiento ya está reservado. No puedes seleccionarlo.");
                }
                // Refrescamos la pantalla para ver el cambio de color al instante
                dibujarCineEnPantalla();
            };
            divFila.appendChild(boton);
        });
        contenedor.appendChild(divFila);
    });
}
// Disparamos el dibujo por primera vez
dibujarCineEnPantalla();
