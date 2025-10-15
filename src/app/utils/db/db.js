import pg from "pg";
import "dotenv/config"; // Forma moderna de carregar as variáveis de ambiente

const { Pool } = pg;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT || 5432,
});

// Usando 'export' em vez de 'module.exports'
export const db = {
  query: (text, params) => pool.query(text, params),
};

// Se você exportar como 'default', poderá importar com qualquer nome
// export default {
//   query: (text, params) => pool.query(text, params),
// };
