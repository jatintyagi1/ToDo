import React, { useState, FormEvent } from 'react';
import { Task, TaskCategory, TaskPriority } from '../types';

import '../styles/addTaskForm.css'

interface AddTaskFormProps {
  addTask: (task: Task) => void;
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<TaskCategory>(TaskCategory.WORK);
  const [priority, setPriority] = useState<TaskPriority>(TaskPriority.MEDIUM);
  const [deadline, setDeadline] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title || !deadline) return;
    const newTask: Task = {
      id: Date.now(),
      title,
      category,
      priority,
      deadline: new Date(deadline),
      completed: false
    };
    addTask(newTask);
    setTitle('');
    setCategory(TaskCategory.WORK);
    setPriority(TaskPriority.MEDIUM);
    setDeadline('');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a new task..." 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <select value={category} onChange={(e) => setCategory(e.target.value as TaskCategory)}>
        {Object.values(TaskCategory).map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <select value={priority} onChange={(e) => setPriority(e.target.value as TaskPriority)}>
        {Object.values(TaskPriority).map(pri => (
          <option key={pri} value={pri}>{pri}</option>
        ))}
      </select>
      <input 
        type="date" 
        value={deadline} 
        onChange={(e) => setDeadline(e.target.value)} 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
