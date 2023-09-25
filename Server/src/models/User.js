const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email: { type: DataTypes.STRING, allowNull: false, isEmail: true },
      password: { type: DataTypes.STRING, allowNull: false },
    },
    //CON UN IS EN EL PASSWORD SE PUEDE AGREGAR UN REGEX PARA VALIDAR IS:[""]
    { timestamps: false }
  );
};
