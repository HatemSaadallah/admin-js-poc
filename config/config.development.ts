import { Dialect } from 'sequelize';

/* eslint-disable complexity */
export const config = () => ({
  database: {
    dialect: 'mysql' as Dialect,
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'admin-js-nestjs-test',
    pool: {
      handleDisconnects: true,
      max: 20,
      min: 1,
      idle: 10000,
      acquire: 20000,
    },
  },
  port: process.env.PORT || 3000,
});
