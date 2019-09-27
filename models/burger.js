module.exports = function (sequelize, DataTypes) {
  var Burgers = sequelize.define('Burgers', {
    burger_name: {
      type: DataTypes.STRING,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  },
    {
      timestamps: false,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: false
    });
  return Burgers;
};