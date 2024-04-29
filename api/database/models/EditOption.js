module.exports = (sequelize, DataTypes) => {
  const EditOption = sequelize.define("EditOption", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    additionalCost: {
      type: DataTypes.DECIMAL(10, 2), // Consider precision if there's extra cost involved
      defaultValue: 0.0,
      allowNull: false,
    },
  });

  EditOption.associate = function (models) {
    // Many-to-Many association between EditOption and MenuItem
    EditOption.belongsToMany(models.MenuItem, {
      through: "MenuItemEditOptions",
      as: "menuItems",
      foreignKey: "editOptionId",
      otherKey: "menuItemId",
    });
  };

  return EditOption;
};
