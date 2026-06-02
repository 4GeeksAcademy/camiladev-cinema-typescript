// Crear la matriz

let asientosCine: number[][] = [];
const filas = 8;
const asientosPorFila = 10;

// Inicializar la matriz con asientos vacios

for (let i = 0; i < filas; i++){ 
  const fila: number[] = [];
   for (let j = 0; j < asientosPorFila; j++){
      fila.push(0);
   }

      asientosCine.push(fila);

} 

// Reservar asientos

asientosCine [2][3] = 1;
asientosCine [3][3] = 1;
asientosCine [4][3] = 1;
asientosCine [5][3] = 1;
asientosCine [6][3] = 1;
asientosCine [7][3] = 1;
asientosCine [2][4] = 1;
asientosCine [3][4] = 1;
asientosCine [4][4] = 1;
asientosCine [5][4] = 1;
asientosCine [6][4] = 1;
asientosCine [7][4] = 1;
asientosCine [2][5] = 1;
asientosCine [3][5] = 1;
asientosCine [4][5] = 1;
asientosCine [5][5] = 1;
asientosCine [6][5] = 1;
asientosCine [7][5] = 1;
asientosCine [2][3] = 0;


// Visualizar la matriz y convertir los numeros a letras

console.log("MAPA DE LA SALA");

asientosCine.forEach((fila,i) => {
  const cambiarNumeroPorLetra: string[] =  fila.map(asiento => {
    return asiento === 0 ? "L" : "X";
  })
    console.log(`Fila ${i + 1}: ${cambiarNumeroPorLetra.join(" ")}`);
 }); 

//  Función que valida las reservas

function validarReserva(fila:number, asiento: number): void{
  if (fila < 1 || fila > filas || asiento < 1 || asiento > asientosPorFila) {
    console.log("❌Número de fila o asiento inválido.");
    return;
  } 
  if (asientosCine[fila - 1][asiento - 1] === 1) {
    console.log("❌El asiento ya está reservado.");
    return;
  } 
asientosCine[fila - 1][asiento - 1] = 1;
console.log(`✅Reserva confirmada para la fila ${fila}, asiento ${asiento}`);
}

// Contar el número de asientos reservados
let asientosReservados = 0;

for (let fila of asientosCine) {
  for (let asiento of fila) {
    if (asiento === 1) {
      asientosReservados++;
    }
  }
}
console.log(`Número total de asientos reservados: ${asientosReservados}`);

// Contar el número de asientos disponibles

let asientosDisponibles = 0;

for (let fila of asientosCine) {
  for (let asiento of fila) {
    if (asiento === 0) {
      asientosDisponibles++;
    }
  }
}
console.log(`Número total de asientos disponibles: ${asientosDisponibles}`);