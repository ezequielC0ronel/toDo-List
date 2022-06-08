"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.Lista, {foreignKey: "lista_origen"});
    }
  }
  Item.init(
    {
      idItem: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha_creacion: { type: DataTypes.DATEONLY, allowNull: false },
      fecha_resolucion: { type: DataTypes.DATEONLY },
      descripcion: { type: DataTypes.STRING(120) },
      prioridad: { type: DataTypes.STRING(60) },
      fecha_limite: { type: DataTypes.DATEONLY },
    },
    {
      sequelize,
      modelName: "Item",
      tableName: "items",
      updatedAt: false,
      createdAt: "fecha_creacion"
    }
  );
  return Item;
};
