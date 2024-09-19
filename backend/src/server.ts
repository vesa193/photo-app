import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import pool from './database/database';

const app: express.Express = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send({ title: 'Hello Node.js' });
});

app.post('/api/v1/auth/register', (req: Request, res: Response) => {
    const { user_id, username, email, password } = req.body;
    pool.query(
        'INSERT INTO "user" (user_id, username, email, password) VALUES ($1, $2, $3, $4)',
        [user_id, username, email, password],
        (err, result) => {
            if (err) {
                console.log(err);
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
