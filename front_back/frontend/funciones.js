const d= document;
let tabla = d.querySelector(".table tbody");

//evento al navegador para que recargando el navegador ejecute una funcion anonima y esta funcion ejecute mostrar datos 
d.addEventListener("DOMContentLoaded", function(){
    mostrarDatos();
})

//function para mostrar los datos de la BD
// function para mostrar los datos de la BD
function mostrarDatos() {
    fetch("http://localhost:3000/productos") // Cambié el puerto a 3000 para que coincida con tu servidor Express
      .then(response => response.json())
      .then(data => {
        // Aquí debes procesar los datos y mostrarlos en tu tabla HTML
        const tbody = d.querySelector(".table tbody");
        tbody.innerHTML = ""; // Limpia el contenido actual de la tabla
  
        data.forEach((producto, index) => {
          const row = `
            <tr>
              <td>${producto.id_producto}</td>
              <td>${producto.nombre}</td>
              <td>${producto.presentacion}</td>
              <td>${producto.precio}</td>
              <td><img src="${producto.imagen}" alt="Imagen del producto"></td>
              <td>Acciones</td>
            </tr>
          `;
          tbody.innerHTML += row; // Agrega la fila a la tabla
        });
      })
      .catch(error => console.error(error));
  }
 
  
  
  
  