import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
    res.render('index', { title: 'Hello Node.js' });
});

app.get('/api/v1/something', (req: Request, res: Response) => {
    res.send({
        something: 'something',
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
