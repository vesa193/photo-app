import 'dotenv/config';
import express, { Request, Response } from 'express';
import { pool } from './database/database';

const app: express.Express = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    // console.log('pool', pool);
    res.send({ title: 'Hello Node.js' });
});

app.get('/api/v1/users', (req: Request, res: Response) => {
    pool.query('SELECT "username" FROM "users"', (err: Error, result) => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log('Users:', result);
        res.send(result);
    });
});

app.get('/api/v1/users/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    res.send({ id: id });
});

app.post('/api/v1/auth/register', (req: Request, res: Response) => {
    const { user_id, username, email, password } = req.body;
    pool.query(
        'INSERT INTO "users" (user_id, username, email, password) VALUES ($1, $2, $3, $4)',
        [user_id, username, email, password],
        (err: Error, result) => {
            if (err) {
                console.log('hello error', err);
                return;
            }
            console.log('User is created', result);
            res.send(result);
        }
    );
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
