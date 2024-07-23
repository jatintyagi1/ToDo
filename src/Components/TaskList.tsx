import React from 'react';
import { Task } from '../types';
import { TaskItem } from './TaskItem';

import '../styles/taskList.css'

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          toggleTaskCompletion={toggleTaskCompletion} 
          deleteTask={deleteTask} 
        />
      ))}
    </ul>
  );
}
