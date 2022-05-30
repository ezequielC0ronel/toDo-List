var express = require("express");
var router = express.Router();
let mysql = require("mysql2");
let modeloTarea = require("../models").Tarea;
let actualizar = require("../public/javascripts/actualizarLista");

let refreshList = actualizar.actualizarLista;

/* GET todo page. */
router.get("/", async function (req, res, next) {
  const tareas = await modeloTarea.findAll();
  res.render("todo", { listaTareas: tareas });
});

router.post("/add", async function (req, res, next) {
  let tarea = req.body.nuevaTarea;
  //Insert nueva tarea
  await modeloTarea
    .create({ tareaDesc: tarea })
    .then((data) => {
      console.log("Se añadio la tarea", data);
    })
    .catch((error) => {
      console.error("Ocurrio un error en el añadido", error);
    });
  const tareas = await modeloTarea.findAll();
  res.render("todo", { listaTareas: tareas });
});

router.post("/delete/:tareaid", async function (req, res) {
  modeloTarea
    .destroy({ where: { idTarea: req.params.tareaid } })
    .then((data) => {
      console.log("Se elimino la tarea", data);
    })
    .catch((error) => {
      console.error("No se pudo eliminar la tarea", error);
    });

  const tareas = await modeloTarea.findAll();
  res.render("todo", { listaTareas: tareas });
});

module.exports = router;
