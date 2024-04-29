module.exports = (sequelize, DataTypes) => {
  const Allergen = sequelize.define("Allergen", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  Allergen.associate = function (models) {
    Allergen.belongsToMany(models.MenuItem, {
      through: "MenuItemAllergens",
      as: "menuItems",
      foreignKey: "allergenId",
      otherKey: "menuItemId",
    });
  };

  return Allergen;
};
