import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LinearGradient from "react-native-linear-gradient";

import { logoutIcon, backIcon } from "../../helpers/index";

import { saveTask } from "../../services/api";

import styles from "./styles";

export default function AddTaskScreen({ route, setUser, navigation }) {
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const getUserId = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setUserId(user.userId);
      }
    };

    if (route.params?.userId) {
      setUserId(route.params.userId);
    } else {
      getUserId();
    }
  }, [route.params]);

  const handleSaveTask = async () => {
    if (!title) {
      Alert.alert("Error", "Por favor ingresa un título para la tarea.");
      return;
    }

    if (!userId) {
      Alert.alert("Error", "No se ha podido obtener el ID del usuario.");
      return;
    }

    const newTask = { title, userId, completed: false };

    try {
      const createdTask = await saveTask(newTask);
      Alert.alert("Éxito", "Tarea agregada con éxito.");

      if (route.params?.onGoBack) {
        route.params.onGoBack();
      }

      navigation.navigate("Tasks", { newTask: createdTask });
    } catch (error) {
      Alert.alert("Error", "No se pudo crear la tarea. Intenta de nuevo.");
    }
  };

  const handleCancel = () => {
    navigation.navigate("Tasks");
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
          <Text style={styles.headerTitle}>Agregar Tarea</Text>
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
        <TouchableOpacity style={styles.buttonSave} onPress={handleSaveTask}>
          <Text style={styles.buttonTextSave}>Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
          <Text style={styles.buttonTextCancel}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
