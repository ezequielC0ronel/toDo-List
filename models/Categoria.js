"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      Categoria.hasMany(models.Lista, {foreignKey: "categoria_lista"})
    }
  }
  Categoria.init(
    {
      idCategoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_categoria: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Categoria",
      tableName: "categorias",
      timestamps: false,
      createdAt: false,
    }
  );
};
