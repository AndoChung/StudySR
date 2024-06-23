import { DataTypes } from "sequelize";
import db from "../config/database.js";

const User = db.define("User", {
  userID : {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  assignmentStack: {
    type: DataTypes.ARRAY,
  },
});

export default User;