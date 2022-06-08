var express = require("express");
var router = express.Router();
let mysql = require("mysql2");
const modelItem = require('../models').Item;

/* GET todo page. */
router.get("/", async function (req, res, next) {
  const items = await modelItem.findAll();
  res.render("todo", { listaItems: items });
});

router.post("/add", async function (req, res, next) {
  let tarea = req.body.nuevaTarea;
  //Insert nueva tarea
  
});

// router.post("/delete/:tareaid", async function (req, res) {
//   // modeloTarea
//   //   .destroy({ where: { idTarea: req.params.tareaid } })
//   //   .then((data) => {
//   //     console.log("Se elimino la tarea", data);
//   //   })
//   //   .catch((error) => {
//   //     console.error("No se pudo eliminar la tarea", error);
//   //   });

//   // const tareas = await modeloTarea.findAll();
//   // res.render("todo", { listaTareas: tareas });
// });

module.exports = router;
