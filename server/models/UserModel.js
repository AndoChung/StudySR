import { DataTypes } from "sequelize";
import db from "../config/database.js";

const User = db.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});

export default User;