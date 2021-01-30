module.exports = function (sequelize, DataTypes) {
  const Closet = sequelize.define("Closet", {
    closet_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
