import React, { useState, useEffect } from "react";
import { View, Text, Alert, FlatList, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import TaskItem from "../../components/TaskItem";
import Paginator from "../../components/Paginator";
import Gradient from "../../components/Gradient";
import Filter from "../../components/Filter";

import { fetchTasks } from "../../services/api";

import styles from "./styles";

export default function TaskListScreen({ navigation, setUser, route }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [filterType, setFilterType] = useState(null);

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const fetchTasksData = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data || []);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasksData();
  }, []);

  useEffect(() => {
    if (route.params?.updatedTask) {
      const updatedTaskIndex = tasks.findIndex(
        (task) => task.id === route.params.updatedTask.id
      );
      if (updatedTaskIndex > -1) {
        const updatedTasks = [...tasks];
        updatedTasks[updatedTaskIndex] = route.params.updatedTask;
        setTasks(updatedTasks);
      }
    }
  }, [route.params?.updatedTask]);

  useEffect(() => {
    let newFilteredTasks = tasks;

    if (searchTerm) {
      newFilteredTasks = newFilteredTasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType === "even") {
      newFilteredTasks = newFilteredTasks.filter(
        (task) => parseInt(task.id) % 2 === 0
      );
    } else if (filterType === "odd") {
      newFilteredTasks = newFilteredTasks.filter(
        (task) => parseInt(task.id) % 2 !== 0
      );
    }

    setFilteredTasks(newFilteredTasks);
  }, [tasks, searchTerm, filterType]);

  const toggleEvenOdd = (type) => {
    setFilterType(type);
  };

  const showAllTasks = () => {
    setFilterType(null);
    setFilteredTasks(tasks);
  };

  const handleEdit = (task) => {
    navigation.navigate("EditTask", { task });
  };

  const handleAddTask = () => {
    navigation.navigate("AddTask");
  };

  const handleDelete = (taskId) => {
    Alert.alert(
      "Confirmar Eliminación",
      "¿Estás seguro de que deseas eliminar esta tarea?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            setTasks(tasks.filter((task) => task.id !== taskId));
          },
        },
      ]
    );
  };

  const handleLogout = async () => {
    try {
      console.log("Cerrando sesión...");
      await AsyncStorage.removeItem("user");
      setUser(null);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      Alert.alert("Error", "No se pudo cerrar la sesión.");
    }
  };

  if (loading) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color="#6C63FF" />
      </View>
    );
  }

  if (error) {
    return <Text>Error al cargar las tareas</Text>;
  }

  return (
    <View style={styles.container}>
      <Gradient
        onLogout={handleLogout}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onAddTask={handleAddTask}
      />
      <Filter toggleEvenOdd={toggleEvenOdd} showAllTasks={showAllTasks} />
      <Text style={styles.taskCountText}>
        {tasks.length} {tasks.length === 1 ? "tarea" : "tareas"} registradas
      </Text>
      <FlatList
        data={filteredTasks.slice(
          (page - 1) * itemsPerPage,
          page * itemsPerPage
        )}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem task={item} onEdit={handleEdit} onDelete={handleDelete} />
        )}
        contentContainerStyle={styles.containerTask}
      />
      <Paginator
        page={page}
        setPage={setPage}
        totalItems={filteredTasks.length}
        itemsPerPage={itemsPerPage}
      />
    </View>
  );
}
