module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true, // Allowing null as phone number might not be mandatory for all users
        validate: {
          isNumeric: true,
          len: [10, 15], // Assumption for validating international phone numbers
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roleId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Roles",
          key: "id",
        },
      },
      rewardPoints: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      emailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      emailVerificationToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      emailVerificationExpires: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      profileImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["active", "inactive", "pending", "disabled"],
        defaultValue: "active",
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      passwordResetToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      passwordResetExpires: {
        type: DataTypes.DATE,
        allowNull: true,
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
    },
    {
      timestamps: true, // Sequelize automatically manages createdAt and updatedAt
    }
  );

  User.associate = function (models) {
    // Define associations here
    User.belongsTo(models.Role, {foreignKey: "roleId"});
  };

  return User;
};
