module.exports = function (sequelize, DataTypes) {
  var Burgers = sequelize.define('Burgers', {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    }
  },
    {
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: false
    });
  return Burgers;
};