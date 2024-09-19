import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: 'vesadev193',
    host: 'localhost',
    port: 5432,
    database: 'photo_app',
    idleTimeoutMillis: 30000,
});

export default pool;
