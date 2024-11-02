// components/TaskListHeader.js
import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import Header from "../Header";

import { watch, calendar } from "../../helpers/index";

import styles from "./styles";

const Gradient = ({ onLogout, searchTerm, setSearchTerm, onAddTask }) => {
  return (
    <LinearGradient
      colors={["#CDEBF6", "#F2F9FC", "#FFFFFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientContainer}
    >
      <Header onLogout={onLogout} />

      <View style={styles.containerImgs}>
        <Image source={watch} style={styles.taskImage} resizeMode="contain" />
        <Image
          source={calendar}
          style={styles.taskImage}
          resizeMode="contain"
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Buscar tarea"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <TouchableOpacity style={styles.buttonAdd} onPress={onAddTask}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Gradient;
