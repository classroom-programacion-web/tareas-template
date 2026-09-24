const usuario = {
  nombre: "Ana",
  rol: "Product Owner",
  sprintActivo: 2,
  presentarse: function () {
    console.log(`Hola, soy ${this.nombre} y mi rol es ${this.rol}`);
  },
};

//[camioneta, sedan]

// camioneta: {
//   "clave":"llanta"
//   "clave":"volante"
//   "clave":"puerta"
//   "clave":"bal"
//   "clave":""
// }

// sedan: {
//   "clave":"llanta"
//   "clave":"volante"
//   "clave":"puerta"
//   "clave":"bal"
//   "clave":""
// }
usuario.sprintActivo;
usuario.presentarse();

const proyectos = [
  { id: 1, titulo: "E-commerce Zapatos", equipo: "Amazon", calificacion: 9 },
  { id: 2, titulo: "Sistema de Inventario", equipo: "Oxxo", calificacion: 7 },
  { id: 3, titulo: "App de Películas", equipo: "Cinépolis", calificacion: 10 },
  { id: 4, titulo: "Portal de Helados", equipo: "Michoacana", calificacion: 8 },
];

console.log("Catálogo inicial de proyectos:");

console.table(proyectos);

const nombresDeEquipos = proyectos.map(function (proyecto) {
  return proyecto.equipo;
});

//.   [1=>1]

console.log("Nombres de los equipos:", nombresDeEquipos);

const proyectosDestacados = proyectos.filter(function (proyecto) {
  return proyecto.calificacion >= 9;
});

console.log(proyectosDestacados);

console.log("Proyectos con calificación >= 9:");
console.table(proyectosDestacados);

//<--- TAREA T1-SPRING#2: OBJETOS Y ARREGLOS COMPLEJOS --->
//septiembre 22

// CREAR E imprimir OBJETO DE:
//ropa,color pelo, mascota, color zapto, gen musi fav,

// CREAR E imprimir array DE:
//ropa,color pelo, mascota, color zapto, gen musi fav,

const contenedor = document.getElementById("resultado-dom");

function pintarProyecto(lista) {
  contenedor.innerHtml = "";

  lista.forEach(function (proyecto) {
    const tarjeta = document.createElement("div");

    //css
    tarjeta.style.border = "10px solid #ccccccff";
    tarjeta.style.padding = "10px";
    tarjeta.style.margin = "10px";

    //html
    tarjeta.innerHTML = `
    
    <h3>Hola yo soy oscar  </h3>
    <h3> yo soy del equipo amazon </h3>
    <h3> a mi me gusta natación</h3>
    `;

    //javaScript

    tarjeta.onclick = function () {
      alert("Haz hecho click");
    };

    tarjeta.onmouseover = function () {
      tarjeta.style.backgroundColor = "green";
      tarjeta.style.transform = "scale(1.02)";
    };

    tarjeta.onmouseout = function () {
      tarjeta.style.background = "red";
      tarjeta.style.transform = "scale(1)";
    };

    //[fotos amarillas] -> [API] -> KERNEL

    const tarjetaHtml = `
    <div style="border: 1px solid #ccc;" >
    <h1>${proyecto.titulo} </h1>
    <p>${proyecto.equipo}</p>
    <p>${proyecto.calificacion}</p>
    
    </div>
    
    `;
    // <--- TAREA T2-SPRING#2: EVENTOS SIMPLES --->
    // Instrucción: Agrega un evento de "doble clic" (ondblclick) a la tarjeta.
    // Cuando el usuario haga doble clic, la tarjeta debe desaparecer de la pantalla.
    // (Pista: usa tarjeta.style.display = "none")

    // <--- AQUI TU CÓDIGO --->

    // <--- FIN DE TU CÓDIGO --->

    contenedor.appendChild(tarjeta);
    //contenedor.innerHTML += tarjetaHtml;
  });

  // -o-o-  => pantalon, blusa, labial, torta
  //          0.        1.    n       n       =>  doblar pantalon, blusa devilver novia , quemar torta
}
pintarProyecto(proyectos);
