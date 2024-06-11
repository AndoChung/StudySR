import { Sequelize } from "sequelize";

const db = new Sequelize("studysr", "postgres", "gloriaisamazing", {
  host: "localhost",
  dialect: "postgres",
});

export default db
