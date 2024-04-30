module.exports = (sequelize, DataTypes) => {
  const UISetting = sequelize.define("UISetting", {
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    value: {
      type: DataTypes.TEXT, // TEXT type to allow storing longer or serialized values
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING, // Can be used to determine how to parse the value (e.g., 'color', 'url', 'json')
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true, // Optional description of what the setting is used for
    },
  });

  return UISetting;
};
