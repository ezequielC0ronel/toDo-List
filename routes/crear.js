var express = require("express");
var router = express.Router();
let modelItem = require("../models").Item;
let modelLista = require("../models").Lista;

/* GET home page. */
router.get("/item", async function (req, res, next) {
  const listas = await modelLista.findAll();
  res.render("crearItem", {listasCreadas: listas});
});

router.get("/lista", function (req, res) {
  res.render("crearLista", {});
});

router.post("/item/add", async function (req, res) {
  let datosItem = req.body;
  const nuevoItem = await modelItem
    .create({
      titulo: datosItem.tituloItem,
      descripcion: datosItem.descripcionItem,
      fecha_limite: datosItem.fechaLimite,
      prioridad: datosItem.prioridad,
      estado: "sin resolver",
      lista_origen: datosItem.listasItem == "sin lista" ? null : datosItem.listasItem
    })
    .then((data) => {
      console.log("El item fue cargado", data);
    })
    .catch((error) => {
      console.log("No se pudo cargar el item", error);
    });
    const listas = await modelLista.findAll();
    res.render("crearItem", {listasCreadas: listas});
  console.log(datosItem);
});

router.post("/lista/add", async function (req, res) {
  let datosLista = req.body;
  const nuevaLista = await modelLista
    .create({
      titulo: datosLista.tituloLista,
      estado: "sin resolver",
    })
    .then((data) => {
      console.log("La lista fue creada", data);
    })
    .catch((error) => {
      console.log("No se pudo crear la lista", error);
    });
  res.render("crearLista", {});
});

module.exports = router;
