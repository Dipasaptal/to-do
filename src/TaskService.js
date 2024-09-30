const tasks = [
    { id: 1, assignedTo: 'User 1', status: 'Completed', dueDate: '2024-10-12', priority: 'Low', comments: 'This task is good' },
    { id: 2, assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', comments: 'This task is urgent' },
    { id: 3, assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', comments: 'This task is pending' },
  ];
  
  class TaskService {
    static getTasks() {
      return tasks;
    }
  
    static addTask(task) {
      task.id = tasks.length + 1;
      tasks.push(task);
    }
  
    static updateTask(id, updatedTask) {
      const index = tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        tasks[index] = updatedTask;
      }
    }
  
    static deleteTask(id) {
      const index = tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        tasks.splice(index, 1);
      }
    }
  }
  
  export default TaskService;
  