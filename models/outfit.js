module.exports = function (sequelize, DataTypes) {
  const Outfit = sequelize.define("Outfit", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });


};
