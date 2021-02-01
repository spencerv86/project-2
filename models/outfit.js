module.exports = function (sequelize, DataTypes) {
  const Outfit = sequelize.define("Outfit", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Outfit.associate = function (models) {
    Outfit.belongsTo(models.Closet, {
      foreignKey: {
        allowNull: false,
      },
    });

  };
  return Outfit;
};
