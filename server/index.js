const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gestor_documental"
});

app.post("/insertar-permiso", (req, res) => {
    const id_rol = req.body.id_rol;
    const nombre_rol = req.body.nombre_rol;
    const modulo_id = req.body.modulo_id; 

    db.query('INSERT INTO permisos (id_rol, nombre_rol, modulo_id) VALUES (?, ?, ?)', [id_rol, nombre_rol, modulo_id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al insertar permiso en la base de datos");
            } else {
                res.status(200).send("Permiso registrado con éxito");
            }
        }
    );
});


app.get("/permisos", (req, res) => {
    db.query('    SELECT  permisos.per_id, permisos.id_rol, permisos.nombre_rol, modulos.modulo_nombre FROM permisos  , modulos WHERE  permisos.modulo_id = modulos.modulo_id', (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error interno del servidor");
        } else {
            res.send(result);
        }
    }
    );
});


app.listen(3001, () => {
    console.log("Servidor escuchando en el puerto 3001");
});
