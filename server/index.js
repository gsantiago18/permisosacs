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
app.post("/create", (req,res)=>{
  const rol = req.body.rol;
  const descripcion = req.body.descripcion

  db.query('INSERT INTO roles(nombre_rol, descripcion_rol) VALUES(?,?)',[rol,descripcion],
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
