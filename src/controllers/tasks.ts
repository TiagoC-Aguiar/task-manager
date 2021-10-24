import { Request, Response } from 'express';

import Task from '../models/Task';

const getAllTasks = (req: Request, res: Response): void => {
  res.send('all items - controller');
};

const createTask = async (req: Request, res: Response): Promise<void> => {
  const newTask = req.body;
  if (newTask.completed) {
    newTask.completed_at = new Date();
  }
  try {
    const task = await Task.create(newTask);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getTask = (req: Request, res: Response): void => {
  res.json({ id: req.params.id });
};

const updateTask = (req: Request, res: Response): void => {
  res.send('update task');
};

const deleteTask = (req: Request, res: Response): void => {
  res.send('delete task');
};

export { getAllTasks, createTask, getTask, updateTask, deleteTask };
