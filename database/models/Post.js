const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Post extends Model {}

Post.init(
  {
    Titulo: DataTypes.STRING,
    Contenido: DataTypes.STRING,
    Imagen: DataTypes.STRING,
    Categoria: DataTypes.STRING,
    FechaDeCreacion: DataTypes.DATE,
  },
  { sequelize, modelName: "post" }
);

module.exports = Post;