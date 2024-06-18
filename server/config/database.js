import { Sequelize } from "sequelize";

console.log(process.env)

const db = new Sequelize("postgres", process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: "aws-0-us-west-1.pooler.supabase.com",
  dialect: "postgres",
});

export default db
