const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
	user: process.env.DB_USER_NAME,
	password: process.env.DB_PASSWORD,
	host: "localhost",
	port: 5432,
	database: "postgres"
});


module.exports = pool;
