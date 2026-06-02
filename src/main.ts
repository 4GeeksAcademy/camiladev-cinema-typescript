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


