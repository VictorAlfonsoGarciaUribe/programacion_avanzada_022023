//Metodos para CRUD
const controller = {}

//login
controller.inventario = (req, res) => {



    // Requerimos la conexión, podemos obtener un error (err) o la conexión (conn)
    req.getConnection((err, conn) => {
        // Renderizar la página principal de React en lugar de 'login'
        res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
    });
};


//funcion de consulta a la base de datos 

 controller.productos =  (req, res) => {
    // Realiza la consulta a la base de datos y envía los datos como respuesta
    const sql = 'SELECT * FROM productos';
    req.getConnection((err, conn) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener productos' });
      } else {
        conn.query(sql, (err, rows) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al obtener productos' });
          } else {
            res.json(rows);
          }
        });
      }
    });
  };







module.exports = controller;

