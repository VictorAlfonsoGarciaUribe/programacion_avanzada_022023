import React, { useState, useEffect } from 'react';

const Inventario = () => {
  // Define un estado para almacenar los datos obtenidos de la base de datos
  const [productos, setProductos] = useState([]);

  // Define una función para cargar los datos desde la base de datos
  const cargarProductos = () => {
    fetch('http://localhost:3000/productos')
      .then(response => response.json())
      .then(data => {
        setProductos(data); // Actualiza el estado con los datos obtenidos
      })
      .catch(error => console.error(error));
  };

  // Carga los datos al montar el componente (similar a componentDidMount)
  useEffect(() => {
    cargarProductos();
  }, []); // El segundo argumento [] indica que esta acción se ejecuta solo una vez al montar

  return (
    <>
    <div className="container">
      <div className="row">
        <h1 className="text-center">Crud Productos</h1>
      </div>
  <div>
  {/*Formulario de productos*/}
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Producto</label>
    <input type="text" className="nombre-pro form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Presentacion</label>
    <input typ e="text" className="present-pro form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <label className="form-label" htmlFor="exampleCheck1">Precio</label>
    <input type="number" className="form-control precio-pro" id="exampleCheck1" />
  </div>
  <div className="mb-3 form-check">
    <label className="form-label" htmlFor="exampleCheck1">Imagen</label>
    <input type="url" className="form-control imagen-pro" id="exampleCheck1" />
  </div>
  <button type="button" className="btn-guardar btn btn-primary">Guardar producto</button>
  {/*Formulario de productos*/}
</div>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Presentacion</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(producto => (
              <tr key={producto.id_producto}>
                <td>{producto.id_producto}</td>
                <td>{producto.nombre}</td>
                <td>{producto.presentacion}</td>
                <td>{producto.precio}</td>
                <td><img src={producto.imagen} alt="Imagen del producto" /></td>
                <td>Acciones</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Inventario;
