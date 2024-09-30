import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskService from './TaskService'; // Assuming this handles API calls for now.

function App() {
  const [tasks, setTasks] = useState(TaskService.getTasks()); // Load initial tasks
  const [editingTask, setEditingTask] = useState(null); // Tracks task for editing
  const [isFormVisible, setIsFormVisible] = useState(false); // Controls form visibility

  const handleAddNewTask = () => {
    setEditingTask(null);
    setIsFormVisible(true);
  };

  const handleSaveTask = (task) => {
    if (editingTask) {
      // Update existing task
      TaskService.updateTask(task.id, task);
    } else {
      // Add new task
      TaskService.addTask(task);
    }
    setTasks(TaskService.getTasks()); // Refresh tasks
    setIsFormVisible(false); // Hide form after save
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsFormVisible(true);
  };

  const handleDeleteTask = (task) => {
    TaskService.deleteTask(task.id);
    setTasks(TaskService.getTasks()); // Refresh task list after deletion
  };

  return (
    <div className="app-container">
      <h1>To-Do List Application</h1>
      {isFormVisible ? (
        <TaskForm task={editingTask} onSave={handleSaveTask} onCancel={() => setIsFormVisible(false)} />
      ) : (
        <>
          <button onClick={handleAddNewTask}>New Task</button>
          <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
        </>
      )}
    </div>
  );
}

export default App;
