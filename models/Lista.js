"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Lista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Lista.belongsTo(models.Categoria, {foreignKey: "categoria_lista"});
      Lista.hasMany(models.Item,{foreignKey:"lista_origen"});
    }
  }
  Lista.init(
    {
      idLista: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: { type: DataTypes.STRING(60) },
      fecha_creacion: { type: DataTypes.DATEONLY, allowNull: false },
      fecha_resolucion: { type: DataTypes.DATEONLY },
      estado: { type: DataTypes.STRING(60) }
    },
    {
      sequelize,
      modelName: "Lista",
      tableName: "listas_item",
      updatedAt:false
    }
  );
  return Lista;
};
