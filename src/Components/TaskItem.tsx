import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  toggleTaskCompletion: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span 
        className="task-title" 
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.title}
      </span>
      <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}
