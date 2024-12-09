import React, { useState } from 'react';

import { TaskList } from '../Components/TaskList';
import { AddTaskForm } from '../Components/AddTaskForm';
import { Task, TaskCategory, TaskPriority } from '../utils/types';
import { TaskFilters } from '../Components/TaskFilter';


const Main = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [filters, setFilters] = useState<{ category: TaskCategory | null; priority: TaskPriority | null }>({ category: null, priority: null })
    
    // Adding Task 
    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
    }

    const toggleTaskCompletion = (taskId: number) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    }

    // Deleting Task 
    const deleteTask = (taskId: number) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    // Filtering Task
    const filteredTasks = tasks.filter(task => {
        return (!filters.category || task.category === filters.category) &&
            (!filters.priority || task.priority === filters.priority);
    });


    return (
        <div className='app'>
            <h1>To-Do Task Manager</h1>
            <AddTaskForm addTask={addTask} />
            <TaskFilters filters={filters} setFilters={setFilters} />
            <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
        </div>
    )
}
export default Main;