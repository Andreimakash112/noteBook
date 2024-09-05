import React, { useState, useEffect } from 'react';
import './Product.css';

function Product() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    loadTasksFromJSON();
  }, []);

  const loadTasksFromJSON = () => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(storedTasks);
    } catch (error) {
      console.error('Error loading tasks from JSON:', error);
    }
  };

  const saveTasksToJSON = () => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks to JSON:', error);
    }
  };

  const addTask = () => {
    if (newTaskTitle.trim() !== '') {
      const newTask = { id: Date.now(), title: newTaskTitle };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
      saveTasksToJSON();
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasksToJSON();
  };

  return (
    <div className="RecordBook">
      <h1>Записная книжка</h1>
      <div className="task-input">
        <input
          type="text"
          id="task-title"
          placeholder="Введите название задачи"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button id="add-task" onClick={addTask}>
          Добавить
        </button>
      </div>
      <div className="task-list">
        <ul id="task-list">
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}
              <button onClick={() => deleteTask(task.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Product;