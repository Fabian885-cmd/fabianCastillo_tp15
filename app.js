const peliculas = require('./peliculas');

console.log("Listado de películas favoritas:\n");

peliculas.forEach((pelicula) => {
    console.log(`Título: ${pelicula.title}`);
    console.log(`  - ID: ${pelicula.id}`);
    console.log(`  - Calificación: ${pelicula.rating}`);
    console.log(`  - Premios: ${pelicula.awards}`);
    console.log(`  - Duración: ${pelicula.length}`);
    console.log(`  - Precio: $${pelicula.price}`);
    console.log(`  - Género: ${pelicula.genre}`);
    console.log('-----------------------------');
});