import { Request, Response } from 'express';

const getAllTasks = (req: Request, res: Response): void => {
  res.send('all items - controller');
};

const createTask = (req: Request, res: Response): void => {
  res.send('create task');
};

const getTask = (req: Request, res: Response): void => {
  res.send('get sigle task');
};

const updateTask = (req: Request, res: Response): void => {
  res.send('update task');
};

const deleteTask = (req: Request, res: Response): void => {
  res.send('delete task');
};

export { getAllTasks, createTask, getTask, updateTask, deleteTask };
