const mysql = require('mysql2');
const dbConfig = require('../config/db');

const pool = mysql.createPool(dbConfig);

const db = pool.promise();

module.exports = db;
