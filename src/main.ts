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

// Estilos del body

document.body.className = "bg-[#1a1a1a] text-white font-sans text-center min-h-screen py-10";


const titulo = document.querySelector("h1");
if (titulo) {
  titulo.className = "text-4xl medium: text-5xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-[#2ec4b6] to-[#e71d36] bg-clip-text text-transparent drop-shadow-md";
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

// corroborar si el asiento está reservado o no

// console.log("El asiento de la fila 6, asiento 4 está reservado?", asientosCine [7][5]);

// MEJOR FORMA DE CORROBORAR SI EL ASIENTO ESTÁ RESERVADO O NO

validarReserva(6, 4);
validarReserva(2, 3);

 
  // console.log("El asiento de la fila 1, asiento 2 está reservado?", asientosCine [1][2]);

  // Validar si hay dos asientos contiguos disponibles

  function buscarAsientosContiguos(): void{
    for (let i = 0; i < filas; i++) {
      for (let j = 0; j < asientosPorFila -1; j++){
        const asientoActual = asientosCine[i][j];
        const asientoSiguiente = asientosCine[i][j + 1];

        if (asientoActual === 0  && asientoSiguiente === 0){
          console.log(`✨ ¡Asientos encontrados! Fila ${i + 1}, Asientos contiguos: ${j + 1} y ${j + 2}`);
          return;
        }
      } 
   } 
   
   console.log("❌ Lo sentimos, no hay dos asientos contiguos disponibles en toda la sala.");

  }

  // Probando la función de buscar asientos contiguos

  buscarAsientosContiguos();

  // Cancelar reserva de un asiento

  function cancelarReserva(fila:number, asiento: number): void{
     if (fila < 1 || fila > filas || asiento < 1 || asiento > asientosPorFila) {
    console.log("❌Número de fila o asiento inválido.");
    return;
   }
    if (asientosCine[fila - 1][asiento - 1] === 0) {
    console.log("❌El asiento seleccionado ya está libre.");
    return;
  } 
    asientosCine[fila - 1][asiento - 1] = 0;
     console.log(`✅Cancelación confirmada para la fila ${fila}, asiento ${asiento}`);
}


  // Dibujar la sala de cine en el html

  function dibujarCineEnPantalla(): void {
  const contenedor = document.getElementById("sala-cine");
  if (!contenedor) return;
  
  contenedor.innerHTML = "";
  contenedor.className = "flex flex-col items-center justify-center p-6 gap-2 w-full max-w-xs sm:max-w-xl  mx-auto py-4";

  asientosCine.forEach((fila, i) => {
    const divFila = document.createElement("div");
    divFila.className = "flex flex-row flex-wrap justify-center w-full";

    fila.forEach((valorNumerico, j) => {
      const boton = document.createElement("button");
      const clasesBase = "w-9 h-9 sm:w-11 sm:h-11 m-0.5 sm:m-1 rounded-md font-bold text-sm sm:text-base transition-colors duration-200 cursor-pointer text-white flex items-center justify-center";
      if (valorNumerico === 0) {
        boton.innerText = "L";
        boton.className = `${clasesBase} bg-[#2ec4b6] hover:bg-[#25a195]`;
      } else {
        boton.innerText = "X";
        boton.className = `${clasesBase} bg-[#e71d36] cursor-not-allowed`;
      }

  boton.onclick = () => {
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
}

      divFila.appendChild(boton);
    });

    contenedor.appendChild(divFila);
  });
}

// Disparamos el dibujo por primera vez
dibujarCineEnPantalla();