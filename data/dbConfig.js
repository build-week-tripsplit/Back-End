const knex = require("knex");

const knexConfig = require("../knexfile");

// const environment = process.env.DB_ENVIRONMENT || knexConfig.production;

module.exports = knex(knexConfig.development);
