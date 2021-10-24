import express, { Request, Response } from 'express';
import tasks from './routes/tasks';
import connectDB from './db/connect';

require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/hello', (req: Request, res: Response) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async (): Promise<void> => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log('Error: ', error);
  }
}

start();
