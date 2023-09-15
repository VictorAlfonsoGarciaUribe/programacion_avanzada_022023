//Metodos para CRUD
const controller = {}

//login
controller.login = (req,res)=>{
    //requerimos la conexion, podemos obtener un error err o la la conexion conn
    req.getConnection((err ,conn) => {
        res.render('login');
    });
};


controller.login_in = (req, res) => {
    // Obtén los datos enviados desde el formulario en el cuerpo de la solicitud
    const { user, password } = req.body;

    // Requerir la conexión a la base de datos utilizando req.getConnection
    req.getConnection((err, conn) => {
        // Si hay un error al obtener la conexión, responde con un JSON que contiene el error
        if (err) {
            res.json(err);
        }

        // Ejecuta una consulta SQL para buscar el usuario por su nombre de usuario
        conn.query('SELECT * FROM users WHERE user = ?', [user], (err, results) => {
            // Si hay un error al ejecutar la consulta, responde con un JSON que contiene el error
            if (err) {
                res.json(err);
            }

            console.log([user])
            console.log(results[0])
            // Si no se encuentra ningún usuario con el nombre de usuario proporcionado, muestra un mensaje de error
            if (results.length === 0) {
                res.send('<script>alert("Usuario incorrecto"); window.location.href = "/";</script>');
                return;
            }

            // Verifica si la contraseña coincide
            const userRecord = results[0];
            
            if (password === userRecord.password && "cajero"===userRecord.rol) {
                // Si la contraseña es correcta, redirecciona a '/list'
                console.log("cajero");
                res.redirect('/cajero');
            } else if (password === userRecord.password && "chef"===userRecord.rol) {
                // Si la contraseña es incorrecta, muestra un mensaje de error
                console.log("chef");
                res.redirect('/list');
            } else {
                console.log("mesero");
                res.redirect('/listm');
            }
        });
    });
};



//register
controller.register = (req,res)=>{
    //requerimos la conexion, podemos obtener un error err o la la conexion conn
    req.getConnection((err ,conn) => {
        res.render('register');
    });
};

controller.save_register = (req, res) => {
    // Obtén los datos enviados desde el formulario en el cuerpo de la solicitud
    const { user, name, rol, password } = req.body;

    // Requerir la conexión a la base de datos utilizando req.getConnection
    req.getConnection((err, conn) => {
        // Si hay un error al obtener la conexión, responde con un JSON que contiene el error
        if (err) {
            res.json(err);
        }

        // Crea un objeto con los datos del nuevo cliente
        const newUser = { user, name, rol, password };

        // Ejecuta una consulta SQL para insertar el nuevo cliente en la tabla 'customer'
        conn.query('INSERT INTO users SET ?', newUser, (err, result) => {
            // Si hay un error al ejecutar la consulta, responde con un JSON que contiene el error
            if (err) {
                res.json(err);
            }

            // Redirecciona a la página principal después de agregar el cliente con éxito
            res.redirect('/');
        });
    });
};


//cajero

controller.cajero = (req,res)=>{
    //requerimos la conexion, podemos obtener un error err o la la conexion conn
    req.getConnection((err ,conn) => {
        res.render('cajero');
    });
};

//pedido

controller.pedido = (req, res) => {
    // Obtén los datos enviados desde el formulario en el cuerpo de la solicitud
    const { platillo, cantidad, observaciones, cliente, fecha, estado ="por preparar" } = req.body;

    // Requerir la conexión a la base de datos utilizando req.getConnection
    req.getConnection((err, conn) => {
        // Si hay un error al obtener la conexión, responde con un JSON que contiene el error
        if (err) {
            res.json(err);
        }

        // Crea un objeto con los datos del nuevo cliente
        const newPedido = { platillo, cantidad, observaciones, cliente, fecha, estado };

        // Ejecuta una consulta SQL para insertar el nuevo cliente en la tabla 'customer'
        conn.query('INSERT INTO pedido SET ?', newPedido, (err, result) => {
            // Si hay un error al ejecutar la consulta, responde con un JSON que contiene el error
            if (err) {
                res.json(err);
            }

            // Redirecciona a la página principal después de agregar el cliente con éxito
            res.redirect('/cajero');
        });
    });
};


//chef

controller.chef = (req,res)=>{
    //requerimos la conexion, podemos obtener un error err o la la conexion conn
    req.getConnection((err ,conn) => {
        res.render('/chef');
    });
};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        // Consulta para obtener los pedidos con estado "por preparar"
        conn.query('SELECT * FROM pedido WHERE estado = "por preparar"', (err, porPreparar) => {
            if (err) {
                res.json(err);
            }
            console.log(porPreparar);

            // Consulta para obtener los pedidos con estado "preparando"
            conn.query('SELECT * FROM pedido WHERE estado = "preparando"', (err, preparando) => {
                if (err) {
                    res.json(err);
                }
                console.log("preparando")
                console.log(preparando);

                // Renderiza la vista con los datos obtenidos
                res.render('chef', {
                    dataPorPreparar: porPreparar,
                    dataPreparando: preparando
                });
            });
        });
    });
};




//chef

controller.mesero = (req,res)=>{
    //requerimos la conexion, podemos obtener un error err o la la conexion conn
    req.getConnection((err ,conn) => {
        res.render('/mesero');
    });
};

controller.listm = (req, res) => {
    req.getConnection((err, conn) => {
        // Consulta para obtener los pedidos con estado "por preparar"
        conn.query('SELECT * FROM pedido WHERE estado = "por entregar"', (err, porEntregar) => {
            if (err) {
                res.json(err);
            }
            console.log(porEntregar);

            // Consulta para obtener los pedidos con estado "preparando"
            conn.query('SELECT * FROM pedido WHERE estado = "entregado"', (err, entregado) => {
                if (err) {
                    res.json(err);
                }
                console.log("entregado")
                console.log(entregado);

                // Renderiza la vista con los datos obtenidos
                res.render('mesero', {
                    dataPorEntregar: porEntregar,
                    dataEntregado: entregado
                });
            });
        });
    });
};


// CONTROLLER BOTON DE MIERDA 1
controller.preparando = (req, res) => {
    const { id } = req.params;
    console.log("ID del pedido:", id); // Verifica si se captura el ID correctamente
    
    req.getConnection((err, conn) => {
        conn.query('UPDATE pedido SET estado = ? WHERE id = ?', ['preparando', id], (err, result) => {
            if (err) {
                console.log(err);
                // Manejar el error aquí, por ejemplo, redirigir a una página de error.
                res.redirect('/error');
            } else {
                // Redirigir a la página de "por preparar" después de la actualización.
                res.redirect('/list');
            }
        });
    });
};



module.exports = controller;

