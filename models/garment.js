module.exports = function (sequelize, DataTypes) {
  const Garment = sequelize.define("Garment", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: DataTypes.STRING,
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Garment.associate = function (models) {
    Garment.belongsTo(models.Closet, {
      foreignKey: {
        allowNull: true,
      },
    });
    Garment.hasOne(models.Outfit, { as: "Hat", foreignKey: 'hat_id'});
    Garment.hasOne(models.Outfit, { as: "Shirt", foreignKey: 'shirt_id'});
    Garment.hasOne(models.Outfit, { as: "Pant", foreignKey: 'pant_id'});
    Garment.hasOne(models.Outfit, { as: "Shoe", foreignKey: 'shoe_id'});
    Garment.hasOne(models.Outfit, { as: "Outer", foreignKey: 'outer_id'});
  };

  return Garment;
};
