var express = require("express");
var router = express.Router();
let mysql = require("mysql2");
let actualizar = require("../public/javascripts/actualizarLista");

let refreshList = actualizar.actualizarLista;

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tareastodo",
  port: 3306,
});


/* GET todo page. */
router.get("/", function (req, res, next) {
  connection.connect((error) => {
    if (error) throw error;
    refreshList(connection, res);
  });
});

router.post("/add", function (req, res, next) {
  let tarea = req.body.nuevaTarea;
  //Insert nueva tarea
  connection.connect((error) => {
    if (error) throw error;

    connection.query(
      `INSERT INTO tareas (idTarea, tareaDesc) VALUES (NULL, '${tarea}')`,
      (err, result) => {
        if (err) throw err;
        console.log(result.affectedRows + " Tarea insertada");
      }
    );

    refreshList(connection, res);
  });
});

router.post("/delete/:tareaid", function (req, res) {
  connection.connect((error) => {
    if (error) throw error;

    connection.query(
      `DELETE FROM tareas WHERE idTarea = ${req.params.tareaid}`,
      (err, result) => {
        if (err) throw err;
        console.log("Tareas eliminadas: " + result.affectedRows);
      }
    );
    refreshList(connection, res);
  });
});

module.exports = router;
