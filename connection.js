const { Pool } = require("pg");

const pool = new Pool({
  host: "aws-0-eu-west-3.pooler.supabase.com",
  port: 6543,
  user: "postgres.sdhbcatwehwabtjpobtf",
  password: "W4mfFTUOSJ8YgOlX",
  database: "postgres",
  max: 20, // maximum number of connections
  idleTimeoutMillis: 30000, // connection timeout after 30 seconds idle
  connectionTimeoutMillis: 2000, // timeout to connect
});

// Log connection events
pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

module.exports = pool;