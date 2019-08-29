require("dotenv").config();

module.exports = {
  development: {
    client: "sqlite3",
    connection: { filename: "./database/trip-split.db3" }, // change this if you want a different name for the database
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = 1", done);
      }
    },
    useNullAsDefault: true, // used to avoid warning on console
    migrations: {
      directory: "./database/migrations",
      tableName: "dbmigrations"
    },
    seeds: { directory: "./database/seeds" }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
  // production: {
  //   client: "pg",
  //   // connection: {
  //   //   host: process.env.DB_PROD_HOST || "localhost",
  //   //   database: process.env.DB_PROD_DATABASE || "tripsplit_prod",
  //   //   user: process.env.DB_PROD_USER || "admin",
  //   //   password: process.env.DB_PROD_PASSWORD,
  //   //   port: process.env.DB_PROD_PORT || "5432"
  //   // },
  //   connection: process.env.DATABASE_URL,
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     tableName: "knex_migrations",
  //     directory: "./database/migrations"
  //   },
  //   seeds: {
  //     directory: "./database/seeds"
  //   }
  // }
};
