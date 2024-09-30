import React, { useState } from 'react';

const TaskForm = ({ task, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: task?.id || '',
    assignedTo: task?.assignedTo || '',
    status: task?.status || 'Not Started',
    dueDate: task?.dueDate || '',
    priority: task?.priority || 'Normal',
    comments: task?.comments || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="task-form">
      <h2>{task ? 'Edit Task' : 'New Task'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Assigned To:
          <input type="text" name="assignedTo" value={formData.assignedTo} onChange={handleChange} required />
        </label>
        <label>
          Status:
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <label>
          Due Date:
          <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} required />
        </label>
        <label>
          Priority:
          <select name="priority" value={formData.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </label>
        <label>
          Comments:
          <textarea name="comments" value={formData.comments} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default TaskForm;
