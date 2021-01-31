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

  Garment.associate = function(models) {
      Garment.belongsTo(models.Closet, {
          foreignKey: {
              allowNull: false
          }
      })
  }
};
