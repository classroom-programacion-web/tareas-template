const usuario = {
  nombre: "Ana",
  rol: "Product Owner",
  sprintActivo: 2,
  presentarse: function () {
    console.log(`Hola, soy ${this.nombre} y mi rol es ${this.rol}`);
  },
};

//[camioneta,sedan]

//camioneta:{
// "clave:"llanta"
// "clave:"volante"
// "clave:"puerta"
// "clave:"bal"
// "clave:""
//}

//sedan:{
// "clave:"llanta"
// "clave:"volante"
// "clave:"puerta"
// "clave:"bal"
// "clave:""
//}


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


console.log("Nombres de los equipos:", nombresDeEquipos);

const proyectosDestacados = proyectos.filter(function (proyecto) {
  return proyecto.calificacion >= 9;
});

console.log(proyectosDestacados);

console.log("Proyectos con calificación >= 9:");
console.table(proyectosDestacados);



// ACTIVIDAD 1

function crearPerfil(ropa, ColorPelo, Mascota, colorZapato, GeneroMusical) {
  return {
    ropa: ropa,
    colorPelo: ColorPelo,
    mascota: Mascota,
    colorZapato: colorZapato,
    generoMusical: GeneroMusical,
  };
}

const miPerfil = crearPerfil("Deportivo", "Negro", "Perro salchicha", "Azul;", "Reggae");

console.log("Mi perfil:");
console.log(miPerfil);

const perfiles = [
  crearPerfil("Deportivo", "Negro", "Perro salchicha", "Azul", "Reggae"),
];

console.log("Mi perfil:");
console.table(perfiles);




//Ejercicio clase

const contenerdor = document.getElementById("resultado-dom");

function pintarpropyecto (lista){
  contenerdor.innerHtml = "";

  lista.forEach(function(proyecto){
  const tarjeta = document.createElement("div");

  //ccc
  tarjeta.style.border="10px solid #098bf6";
  tarjeta.style.padding="10px";
  tarjeta.style.margin="10px";
  
  //html
  tarjeta.innerHTML = `
  <h3> hola yo soy Geysler </h3>
  <h3> yo soy del equipo de playstation </h3>
  <h3> a mi megusta el volley </h3>
  `;

  tarjeta.onmouseover = function(){
    tarjeta.style.backgroundColor = "green";
    tarjeta.style.transform = "scale(1.02)";
  };

  tarjeta.onmouseout = function(){
    tarjeta.style.background = "red";
    tarjeta.style.transform = "scale(1)";
  };

    // <--- TAREA T2-SPRING#2: EVENTOS SIMPLES --->
    // Instrucción: Agrega un evento de "doble clic" (ondblclick) a la tarjeta.
    // Cuando el usuario haga doble clic, la tarjeta debe desaparecer.
    // <--- AQUI TU CÓDIGO --->
  tarjeta.ondblclick = function(){
    tarjeta.remove();
  };
  // <--- FIN DE TU CÓDIGO --->

   const tarjetaHtml = `
  <div style="border: 1px solid #ccc;">
  <h1>${proyecto.titulo} </h1>
  <p>${proyecto.equip}</p>
  <p>${proyecto.calificacion}</p>

  </div>

   `;

  
   
   contenerdor.appendChild(tarjeta);
   //contenerdor.innerHTML += tarjetaHtml;
  });

}

pintarpropyecto(proyectos);
