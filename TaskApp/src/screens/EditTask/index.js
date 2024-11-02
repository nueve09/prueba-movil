import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import LinearGradient from "react-native-linear-gradient";

import { logoutIcon, backIcon } from "../../helpers/index";

import { updateTask } from "../../services/api";

import styles from "./styles";

export default function EditTaskScreen({ route, navigation, setUser }) {
  const { task } = route.params;

  const initialStatus = task.completed ? "Completada" : "Pendiente";
  const [title, setTitle] = useState(task.title || "");
  const [status, setStatus] = useState(initialStatus);

  const handleEditTask = async () => {
    if (!title) {
      Alert.alert("Error", "Por favor ingresa un título para la tarea.");
      return;
    }

    const updatedTask = {
      ...task,
      title,
      completed: status === "Completada",
    };

    try {
      await updateTask(updatedTask);
      Alert.alert("Éxito", "Tarea editada exitosamente.");
      navigation.navigate("Tasks", { updatedTask });
    } catch (error) {
      Alert.alert("Error", "No se pudo actualizar la tarea.");
      console.error("Error al actualizar la tarea:", error);
    }
  };

  const handleDelete = () => {
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
            Alert.alert("Éxito", "Tarea eliminada exitosamente.");
            navigation.navigate("Tasks");
          },
        },
      ]
    );
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setUser(null);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      Alert.alert("Error", "No se pudo cerrar la sesión.");
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#CDEBF6", "#F2F9FC", "#FFFFFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientContainer}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backIcon} style={styles.iconBack} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Editar Tarea</Text>

          <TouchableOpacity onPress={handleLogout}>
            <Image source={logoutIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/imgSec.png")}
            resizeMode="cover"
          />

          <LinearGradient
            colors={["transparent", "rgba(255, 255, 255, 0.8)"]}
            style={styles.gradient}
          />
        </View>
      </LinearGradient>

      <TextInput
        style={styles.input}
        placeholder="Nombre de la tarea"
        value={title}
        onChangeText={setTitle}
      />

      <View style={styles.selectContainer}>
        <Picker
          selectedValue={status}
          style={styles.picker}
          onValueChange={(itemValue) => setStatus(itemValue)}
        >
          <Picker.Item label="Selecciona un estado" value="" />
          <Picker.Item label="Pendiente" value="Pendiente" />
          <Picker.Item label="Completada" value="Completada" />
        </Picker>
      </View>

      <View style={{ flex: 1 }} />

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonSave} onPress={handleEditTask}>
          <Text style={styles.buttonTextSave}>Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCancel} onPress={handleDelete}>
          <Text style={styles.buttonTextCancel}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
