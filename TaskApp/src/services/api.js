import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.slice(0, 50);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const updateTask = async (task) => {
  try {
    const response = await axios.put(`${API_URL}/${task.id}`, {
      id: task.id,
      title: task.title,
      userId: 1,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const saveTask = async (task) => {
  try {
    const response = await axios.post(API_URL, {
      title: task.title,
      userId: task.userId,
      completed: task.completed,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};
