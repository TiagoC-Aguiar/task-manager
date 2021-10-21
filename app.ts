import express, { Request, Response } from 'express';
import tasks from './routes/tasks';

const app = express();

app.use(express.json());

app.get('/hello', (req: Request, res: Response) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
