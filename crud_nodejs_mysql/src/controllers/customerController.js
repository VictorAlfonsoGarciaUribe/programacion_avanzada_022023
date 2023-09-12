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
            console.log(results)
            // Si no se encuentra ningún usuario con el nombre de usuario proporcionado, muestra un mensaje de error
            if (results.length === 0) {
                res.send('<script>alert("Usuario incorrecto"); window.location.href = "/";</script>');
                return;
            }

            // Verifica si la contraseña coincide
            const userRecord = results[0];
            if (password === userRecord.password) {
                // Si la contraseña es correcta, redirecciona a '/list'
                res.redirect('/list');
            } else {
                // Si la contraseña es incorrecta, muestra un mensaje de error
                res.send('<script>alert("Contraseña incorrecta"); window.location.href = "/";</script>');
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





//req y res
controller.list = (req,res)=>{
    //requerimos la conexion, podemos obtener un error err o la la conexion conn
    req.getConnection((err ,conn) => {
        //si obtenemos la conexion podemos generar un query
        //podemos obtener un error err o el resultado customer
        conn.query('SELECT * FROM customer', (err , customers) =>{
           //si err responde con un .json con el error 
            if (err){
                res.json(err);
            }
            console.log(customers)
            //si no respuesta renderiza
            res.render('customers',{
                data:customers
            });
        });
    });
};

controller.save = (req, res) => {
    // Obtén los datos enviados desde el formulario en el cuerpo de la solicitud
    const { name, address, phone } = req.body;

    // Requerir la conexión a la base de datos utilizando req.getConnection
    req.getConnection((err, conn) => {
        // Si hay un error al obtener la conexión, responde con un JSON que contiene el error
        if (err) {
            res.json(err);
        }

        // Crea un objeto con los datos del nuevo cliente
        const newCustomer = { name, address, phone };

        // Ejecuta una consulta SQL para insertar el nuevo cliente en la tabla 'customer'
        conn.query('INSERT INTO customer SET ?', newCustomer, (err, result) => {
            // Si hay un error al ejecutar la consulta, responde con un JSON que contiene el error
            if (err) {
                res.json(err);
            }

            // Redirecciona a la página principal después de agregar el cliente con éxito
            res.redirect('/list');
        });
    });
};


controller.edit = (req , res ) =>{
    const { id } = req.params;
    req.getConnection((err , conn) => {
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err , customer ) => {
            res.render('customer_edit', {
                data: customer[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const { name, address, phone } = req.body;

    req.getConnection((err, conn) => {
        if (err) {
            res.json(err);
        }

        const updatedCustomer = { name, address, phone };

        conn.query('UPDATE customer SET ? WHERE id = ?', [updatedCustomer, id], (err, result) => {
            if (err) {
                res.json(err);
            }

            // Después de actualizar, redirige a la página principal
            res.redirect('/list');
        });
    });
};


controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/list');
        });
    });
};
module.exports = controller;