// <--- TAREA 3 (SPRINT 2): ESTÁNDARES DE DESARROLLO --->
// Fecha límite: jueves 8 de octubre, 23:59
//
// Este código FUNCIONA, pero no cumple los estándares.
// Instrucción: reescríbelo entre las marcas de abajo aplicando las 4 reglas:
//   1. Nomenclatura: nombres claros en camelCase. El booleano se llama esMayorDeEdad
//      y la función tiene nombre de acción (ej. revisarAcceso).
//   2. DRY: guarda a las personas en un arreglo y usa una sola función para todas.
//   3. Cero números mágicos: el 18 va en la constante MAYORIA_DE_EDAD.
//   4. Formateo: guarda con Prettier para que quede bien indentado.
// Debe imprimir exactamente lo mismo. Cuando funcione, borra el código sucio.


// <--- AQUÍ TU CÓDIGO --->
const MAYORIA_DE_EDAD = 18;

const personas = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 20 },
  { nombre: "Sofía", edad: 22 },
];

function revisarAcceso(persona) {
  const esMayorDeEdad = persona.edad >= MAYORIA_DE_EDAD;

  if (esMayorDeEdad) {
    console.log(persona.nombre + " puede entrar");
  } else {
    console.log(persona.nombre + " no puede entrar");
  }
}

personas.forEach(revisarAcceso);
// <--- FIN DE TU CÓDIGO --->
