// database/models/permission.js
module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define(
    "Permission",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {}
  );

  Permission.associate = function (models) {
    Permission.belongsToMany(models.Role, {
      through: "RolePermissions",
      foreignKey: "permissionId",
      otherKey: "roleId",
    });
  };

  return Permission;
};
