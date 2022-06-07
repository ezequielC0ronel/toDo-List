"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {}
  }
  Item.init(
    {
      idItem: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha_creacion: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      fecha_resolucion: {
        type: DataTypes.DATEONLY,
      },
      descripcion: {
        type: DataTypes.STRING(120),
      },
      prioridad: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      fecha_limite: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      sequelize,
      modelName: "Item",
      createdAt: "fecha_creacion",
      updatedAt: false,
    }
  );
};
