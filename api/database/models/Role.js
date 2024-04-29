module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
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

  Role.associate = function (models) {
    Role.belongsToMany(models.Permission, {
      through: "RolePermissions",
      foreignKey: "roleId",
      otherKey: "permissionId",
    });
  };

  return Role;
};
