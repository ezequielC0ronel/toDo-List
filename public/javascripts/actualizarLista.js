function actualizar(con, res){
    con.query(
        "SELECT idTarea, tareaDesc FROM tareas",
        (err, result, fields) => {
          if (err) throw err;
          res.render("todo", { listaTareas: result });
        }
      );
}

exports.actualizarLista = actualizar;