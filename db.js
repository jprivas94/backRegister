import { createPool } from 'mysql2/promise';

export const pool = new createPool({
	host: 'localhost',
	port: 3307,
	user: 'root',
	password: '@@@@@@',
	database: '@@@@',
});
