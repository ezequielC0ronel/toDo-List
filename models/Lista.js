"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Lista extends Model {
    static associate(models) {
      Lista.belongsTo(models.Categoria, { foreignKey: "categoria_lista" });
      Lista.hasMany(models.Item, { foreignKey: "lista_origen" });
    }
  }
  Lista.init(
    {
      idLista: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      fecha_creacion: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      fecha_resolucion: {
        type: DataTypes.DATEONLY,
      },
      estado: {
        type: DataTypes.STRING(60),
      },
    },
    {
      sequelize,
      modelName: "Lista",
      tableName: "listas_item",
      createdAt: "fecha_creacion",
      updatedAt: false,
    }
  );
};
