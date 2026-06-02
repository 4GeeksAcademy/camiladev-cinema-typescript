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

// Visualizar la matriz y convertir los numeros a letras

console.log("MAPA DE LA SALA");

asientosCine.forEach((fila,i) => {
  const cambiarNumeroPorLetra: string[] =  fila.map(asiento => {
    return asiento === 0 ? "L" : "X";
  })
    console.log(`Fila ${i + 1}: ${cambiarNumeroPorLetra.join(" ")}`);
 }); 
