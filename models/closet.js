module.exports = function (sequelize, DataTypes) {
  const Closet = sequelize.define("Closet", {
    closet_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Closet.associate = function (models) {
    Closet.hasMany(models.Garment, {
      onDelete: "cascade",
    });
  };

  Closet.associate = function (models) {
    Closet.hasMany(models.Outfit, {
      onDelete: "cascade",
    });
  };

  return Closet;
};
