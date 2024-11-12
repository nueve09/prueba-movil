import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

export const addTaskToStorage = async (newTask) => {
  try {
    const storedTasksJson = await AsyncStorage.getItem("tasks");
    const storedTasks = storedTasksJson ? JSON.parse(storedTasksJson) : [];

    const apiTasks = await fetchTasks();

    const allTasks = [...apiTasks, ...storedTasks];
    const validTasks = allTasks.filter(
      (task) => !isNaN(task.id) && task.id !== null
    );

    const maxId =
      validTasks.length > 0
        ? Math.max(...validTasks.map((task) => task.id))
        : 0;

    const newTaskId = maxId + 1;

    const taskWithId = { ...newTask, id: newTaskId };

    const updatedTasks = [...storedTasks, taskWithId];

    await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));

    console.log("Tarea agregada con éxito:", taskWithId);
  } catch (error) {
    console.error("Error al agregar la tarea:", error);
  }
};

export const updateTaskInStorage = async (updatedTask) => {
  try {
    const storedTasks = await AsyncStorage.getItem("tasks");
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);
    if (taskIndex !== -1) {
      tasks[taskIndex] = updatedTask;
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    }
  } catch (error) {
    console.error("Error al actualizar la tarea:", error);
  }
};

export const deleteTaskFromStorage = async (taskId) => {
  try {
    const storedTasks = await AsyncStorage.getItem("tasks");
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    await AsyncStorage.setItem("tasks", JSON.stringify(filteredTasks));
  } catch (error) {
    console.error("Error al eliminar la tarea:", error);
  }
};
