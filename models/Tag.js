const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    /*
    Tag:
      id
        Integer.
        Doesn't allow null values.
        Set as primary key.
        Uses auto increment.
      tag_name
        String.
    */
   tag_name: {
    type: DataTypes.STRING
   }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
