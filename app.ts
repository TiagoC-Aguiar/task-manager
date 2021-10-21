import express, { Request, Response } from 'express';

const app = express();

app.get('/hello', (req: Request, res: Response) => {
  res.send('Task Manager App');
});

const port = 3000;

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
