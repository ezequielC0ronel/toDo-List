var express = require("express");
var router = express.Router();
let mysql = require("mysql2");
let modeloTareas = require('../models').Tarea;
let actualizar = require("../public/javascripts/actualizarLista");

let refreshList = actualizar.actualizarLista;


/* GET todo page. */
router.get("/",  async function(req, res, next) {
  const tareas = await modeloTareas.findAll();
  res.render("todo", {listaTareas: tareas})
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
