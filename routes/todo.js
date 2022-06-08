var express = require("express");
var router = express.Router();
let mysql = require("mysql2");
const modelItem = require("../models").Item;

/* GET todo page. */
router.get("/", async function (req, res, next) {
  const items = await modelItem.findAll();
  res.render("todo", { listaItems: items });
});

router.post("/add", async function (req, res, next) {
  let descripcionItem = req.body.nuevaTarea;
  //Insert nueva tarea
  const nuevoItem = await modelItem
    .create({
      fecha_resolucion: null,
      descripcion: descripcionItem,
      prioridad: "baja",
    })
    .then((data) => {
      console.log("El item fue cargado", data);
    })
    .catch((error) => {
      console.log("No se pudo cargar el item", error);
    });

  const items = await modelItem.findAll();
  res.render("todo", { listaItems: items });
});

router.post("/delete/:tareaid", async function (req, res) {
  modelItem
    .destroy({ where: { idItem: req.params.tareaid } })
    .then((data) => {
      console.log("Se elimino el item con idItem: ", data);
    })
    .catch((error) => {
      console.error("No se pudo eliminar el item", error);
    });

  const items = await modelItem.findAll();
  res.render("todo", { listaItems: items });
});

module.exports = router;
