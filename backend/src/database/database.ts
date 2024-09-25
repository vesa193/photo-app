import { Pool } from 'pg';
import { postgresConfig } from '../config';

const pool = new Pool({
    ...postgresConfig,
    idleTimeoutMillis: 30000,
});

const connectToDB = async () => {
    try {
        await pool.connect();
    } catch (err) {
        console.log(err);
    }
};

export { pool, connectToDB };
