module.exports = (sequelize, DataTypes) => {
  const MenuItem = sequelize.define("MenuItem", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isEditable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    isGlutenFree: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    isFeatured: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    spicyLevel: {
      type: DataTypes.ENUM,
      values: ["none", "mild", "medium", "hot", "extreme"],
      defaultValue: "none",
      allowNull: true,
    },
    vegetarian: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  MenuItem.associate = function (models) {
    // Relationships
    MenuItem.belongsToMany(models.Allergen, {
      through: "MenuItemAllergens",
      as: "allergens",
      foreignKey: "menuItemId",
      otherKey: "allergenId",
    });
    MenuItem.belongsToMany(models.EditOption, {
      through: "MenuItemEditOptions",
      as: "editOptions",
      foreignKey: "menuItemId",
      otherKey: "editOptionId",
    });
  };

  return MenuItem;
};
