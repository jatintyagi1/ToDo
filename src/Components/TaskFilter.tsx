import React from 'react';
import { TaskCategory, TaskPriority } from '../types';

interface TaskFiltersProps {
  filters: { category: TaskCategory | null; priority: TaskPriority | null };
  setFilters: (filters: { category: TaskCategory | null; priority: TaskPriority | null }) => void;
}

export const TaskFilters: React.FC<TaskFiltersProps> = ({ filters, setFilters }) => {
  return (
    <div className="task-filters">
      <select 
        value={filters.category || ''} 
        onChange={(e) => setFilters({ ...filters, category: e.target.value as TaskCategory })}
      >
        <option value="">All Categories</option>
        {Object.values(TaskCategory).map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <select
        value={filters.priority || ''} 
        onChange={(e) => setFilters({ ...filters, priority: e.target.value as TaskPriority })}
      >
        <option value="">All Priorities</option>
        {Object.values(TaskPriority).map(pri => (
          <option key={pri} value={pri}>{pri}</option>
        ))}
      </select>
    </div>
  );
}
