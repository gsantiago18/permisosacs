const express  =require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password : "",
    database: "gestor_documental"
});

// Ruta para insertar datos en la tabla permisos
app.post("/insertar-permiso", (req,res)=>{
  const id_rol=req.body.id_rol
  const nombre_rol= req.body.nombre_rol
  const modulo_id= req.bodymodulo_id

  db.query('INSERT INTO permisos(id_rol, nombre_rol,modulo_id) VALUES(?,?,?)',[id_rol,nombre_rol,modulo_id],
  (err,result)=>{
      if(err){
          console.log(err);
      }else{
          res.send("rol registrado con éxito")
      }
  }
  );
});
app.listen(3001, () => {
  console.log("Servidor escuchando en el puerto 3001");
});
