require('dotenv/config');

module.export = {
    "development":
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres"
}