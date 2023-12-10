require('dotenv').config();

const config = {
  port: process.env.port || 9000,
  nodeEnv: process.env.NODE_ENV || 'development',

  jwtSecret: process.env.JWT_SECRET,
  db: {
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'root',
    dbName: process.env.DB_NAME,
    port: process.env.DB_PORT || 5432
  }
};

module.exports = config;
