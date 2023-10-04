//const { response } = require("express");

const d= document;
let tabla = d.querySelector(".table tbody");

//variables que vienen del formulario 

let nombrePro = d.querySelector(".nombre-pro");
let precioPro = d.querySelector(".precio-pro");
let presenPro = d.querySelector(".presen-pro");
let imagenPro = d.querySelector(".imagen-pro");

let btnGuardar = d.querySelector(".btn-guardar");



//evento al navegador para que recargando el navegador ejecute una funcion anonima y esta funcion ejecute mostrar datos 
d.addEventListener("DOMContentLoaded", function(){
    mostrarDatos();
})


//Funcion para agregar evento al botn 
btnGuardar.addEventListener("click", function(){
  ObtenerDatos();
  
})

//funcion para obtener los datos del formulario 
function ObtenerDatos(){
  if(nombrePro.value == "" || presenPro.value == "" || precioPro.value =="" || imagenPro.value == ""){
    alert("Debes escribir en el formulario")
  }
  //Recoger los datos
  let datosForm = {
    nombre : nombrePro.value,
    presentacion : presenPro.value,
    precio : precioPro.value,
    imagen : imagenPro.value
  }
  console.log(datosForm);
  //pasar los datos a la funcion 
  enviarDatos(datosForm);
  alert("Producto guardado")
}

//funcion para enviar los datos recogidos en datosForm a la db
function enviarDatos(datosForm){
  url= "http://localhost:3000/productos"
  fetch(url,{
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify( datosForm )
  })
  .then( respuesta => respuesta.text())
  .then(mensaje=> console.log(mensaje))
  .catch(error => console.log("Error guardar producto"+error))
}


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
 
  
  
  
  