import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  FlatList,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AuthContext from "../../context/AuthContext";

import TaskItem from "../../components/TaskItem";
import Paginator from "../../components/Paginator";
import Gradient from "../../components/Gradient";
import Filter from "../../components/Filter";

import { fetchTasks } from "../../services/api";

import styles from "./styles";

export default function TaskListScreen({ navigation, route }) {
  const { logout } = useContext(AuthContext);
  const { top } = useSafeAreaInsets();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [filterType, setFilterType] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [completedFilter, setCompletedFilter] = useState(null);

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const fetchTasksData = async () => {
    try {
      const apiTasks = await fetchTasks();

      const storedTasksJson = await AsyncStorage.getItem("tasks");
      const storedTasks = storedTasksJson ? JSON.parse(storedTasksJson) : [];

      const allTasks = [...apiTasks, ...storedTasks];

      setTasks(allTasks || []);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasksData();

    const unsubscribe = navigation.addListener("focus", () => {
      fetchTasksData();
    });

    return unsubscribe;
  }, [navigation]);

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

    // Filtrar por término de búsqueda
    if (searchTerm) {
      newFilteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTasks(newFilteredTasks);
      setPage(1);
      return;
    }

    // Filtrar por userId
    if (selectedUserId !== null) {
      newFilteredTasks = tasks.filter((task) => task.userId === selectedUserId);
      setFilteredTasks(newFilteredTasks);
      return;
    }

    // Filtrar por estado status
    if (completedFilter !== null) {
      newFilteredTasks = tasks.filter(
        (task) => task.completed === completedFilter
      );
      setFilteredTasks(newFilteredTasks);
      return;
    }

    // Filtrar por par/impar
    if (filterType === "even") {
      newFilteredTasks = tasks.filter((task) => parseInt(task.id) % 2 === 0);
      setFilteredTasks(newFilteredTasks);
      return;
    } else if (filterType === "odd") {
      newFilteredTasks = tasks.filter((task) => parseInt(task.id) % 2 !== 0);
      setFilteredTasks(newFilteredTasks);
      return;
    }

    setFilteredTasks(tasks);
    setPage(1);
  }, [tasks, searchTerm, filterType, selectedUserId, completedFilter]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredTasks(tasks);
    }
  }, [searchTerm, tasks]);

  const tasksToDisplay = filteredTasks.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

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
          onPress: async () => {
            try {
              const updatedTasks = tasks.filter((task) => task.id !== taskId);
              setTasks(updatedTasks);

              const storedTasksJson = await AsyncStorage.getItem("tasks");
              const storedTasks = storedTasksJson
                ? JSON.parse(storedTasksJson)
                : [];
              const updatedStoredTasks = storedTasks.filter(
                (task) => task.id !== taskId
              );

              await AsyncStorage.setItem(
                "tasks",
                JSON.stringify(updatedStoredTasks)
              );
            } catch (error) {
              console.error(
                "Error al eliminar la tarea de AsyncStorage:",
                error
              );
              Alert.alert("Error", "Hubo un problema al eliminar la tarea.");
            }
          },
        },
      ]
    );
  };

  const clearInputs = () => {
    navigation.navigate("Login", { clearInputs: true });
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      logout();
      clearInputs();
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
    <SafeAreaView style={{ flex: 1, paddingTop: top }}>
      <View style={styles.container}>
        <Gradient
          onLogout={handleLogout}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onAddTask={handleAddTask}
          clearInputs={clearInputs}
        />
        <Filter
          toggleEvenOdd={toggleEvenOdd}
          showAllTasks={showAllTasks}
          setSelectedUserId={setSelectedUserId}
          setCompletedFilter={setCompletedFilter}
        />
        <Text style={styles.taskCountText}>
          {tasks.length} {tasks.length === 1 ? "tarea" : "tareas"} registradas
        </Text>
        <FlatList
          data={tasksToDisplay}
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
    </SafeAreaView>
  );
}
