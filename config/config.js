const fs = require('fs');

module.exports = {
  development: {
    username: 'expressuser',
    password: 'ThePassword',
    database: 'hello_sequelize',
    host: 'nuc-coreos',
    dialect: 'mysql',
    "seederStorage": "sequelize"
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
// dialectOptions: {
//   ssl: {
//     ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
//   }
// }
  }
};
