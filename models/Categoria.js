"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categoria.hasMany(models.Lista, { foreignKey: "categoria_lista"});
    }
  }
  Categoria.init(
    {
      idCategoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_categoria: { type: DataTypes.STRING(60), allowNull: false }
    },
    {
      sequelize,
      modelName: "Categoria",
      tableName: "items",
      timestamps: false
    }
  );
  return Categoria;
};
