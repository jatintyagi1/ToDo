export interface Task {
  id: number;
  title: string;
  category: TaskCategory;
  priority: TaskPriority;
  deadline: Date;
  completed: boolean;
}

export enum TaskCategory {
  WORK = 'Work',
  PERSONAL = 'Personal',
  HOBBY = 'Hobby'
}

export enum TaskPriority {
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low'
}
