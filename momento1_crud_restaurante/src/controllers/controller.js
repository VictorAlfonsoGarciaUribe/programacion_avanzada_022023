//Metodos para CRUD
const controller = {}

//index 

controller.index = (req,res)=>{
    //requerimos la conexion, podemos obtener un error err o la la conexion conn
    req.getConnection((err ,conn) => {
        res.render('index');
    });
};

module.exports = controller;