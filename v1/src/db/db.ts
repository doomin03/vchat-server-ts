import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_HOST || "db",
  port: Number(process.env.MYSQL_PORT) || 3306,
  username: process.env.MYSQL_USER || "hamin",
  password: process.env.MYSQL_PASSWORD || "system1234",
  database: process.env.MYSQL_DATABASE || "vchat",
  entities: [__dirname + "/entities/**/*.{ts,js}"],
  synchronize: false,
  logging: true,
});
