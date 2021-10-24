export type TaskType = {
  name: string;
  completed: boolean;
  created_at: Date;
  updated_at: Date;
  completed_at?: Date;
  deleted_at?: Date;
};
