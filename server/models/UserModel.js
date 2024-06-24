import { DataTypes } from "sequelize";
import db from "../config/database.js";

const User = db.define("User", {
  id : {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
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
  assignment_stack: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
  },
},{ timestamps: false });

export default User;