import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3004/tasks');
        setTasks(response.data);
        localStorage.setItem('tasks', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      fetchTasks();
    }
  }, []);

  const getTaskById = async (taskId) => {
    try {
      const response = await axios.get(`http://localhost:3004/getSingleTask/${taskId}`);
      return response.data; // Specific task ka data return karega
    } catch (error) {
      console.error('Error fetching single task:', error);
      return null;
    }
  };
  

  const addTask = async (task) => {
    try {
      const response = await axios.post('http://localhost:3004/create', task, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const newTask = response.data;
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error adding task:', error.response?.data || error.message);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const response = await axios.put(`http://localhost:3004/updateTask/${updatedTask.id}`, updatedTask, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const newTask = response.data;
      const updatedTasks = tasks.map(task => task.id === newTask.id ? newTask : task);
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error updating task:', error.response?.data || error.message);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:3004/deleteTask/${taskId}`);
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, getTaskById }}>
      {children}
    </TaskContext.Provider>
  );
};