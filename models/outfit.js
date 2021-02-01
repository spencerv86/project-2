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
    Outfit.hasOne(models.Garment, { as: "Hat", foreignKey: 'hat_id'});
    Outfit.hasOne(models.Garment, { as: "Shirt", foreignKey: 'shirt_id'});
    Outfit.hasOne(models.Garment, { as: "Pant", foreignKey: 'pant_id'});
    Outfit.hasOne(models.Garment, { as: "Shoe", foreignKey: 'shoe_id'});
    Outfit.hasOne(models.Garment, { as: "Outer", foreignKey: 'outer_id'});
  };
  return Outfit;
};
