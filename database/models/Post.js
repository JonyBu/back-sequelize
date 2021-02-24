const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Post extends Model {}

Post.init(
  {
    Titulo: DataTypes.STRING,
    Contenido: DataTypes.STRING,
    Imagen: {
      type: DataTypes.STRING,
      validate: {
        is: /[.]png$|[.]jpg$/gs
      }
    },
    Categoria: DataTypes.STRING,
    FechaDeCreacion: DataTypes.DATE,
  },
  { sequelize, modelName: "post" }
);

module.exports = Post;