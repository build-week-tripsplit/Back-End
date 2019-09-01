require("dotenv").config();

module.exports = {
  // development: {
  //   client: "sqlite3",
  //   connection: { filename: "./database/trip-split.db3" }, // change this if you want a different name for the database
  //   pool: {
  //     afterCreate: (conn, done) => {
  //       conn.run("PRAGMA foreign_keys = 1", done);
  //     }
  //   },
  //   useNullAsDefault: true, // used to avoid warning on console
  //   migrations: {
  //     directory: "./database/migrations",
  //     tableName: "dbmigrations"
  //   },
  //   seeds: { directory: "./database/seeds" }
  // },
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: {
      database: process.env.DB_DEV_DATABASE,
      user: process.env.DB_DEV_USER,
      password: process.env.DB_DEV_PASSWORD
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
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
  },
  production: {
    client: "pg",

    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
