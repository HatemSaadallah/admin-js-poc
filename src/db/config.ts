import config from 'config/index.js';

let databaseConfig: any;
config.forEach(
  (value) => (databaseConfig = value().database ?? databaseConfig),
);
module.exports = databaseConfig;
