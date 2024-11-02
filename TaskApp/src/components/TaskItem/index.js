import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { editIcon, deleteIcon } from "../../helpers/index";

import styles from "./styles";

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskInfo}>
        <Text style={styles.taskStatus}>
          {task.completed === true ? "Completado" : "En proceso"}
        </Text>
        <Text style={styles.taskText} numberOfLines={1} ellipsizeMode="tail">
          {task.id} - {task.title}
        </Text>
      </View>
      <View style={styles.taskIcons}>
        <TouchableOpacity onPress={() => onEdit(task)}>
          <Image source={editIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task.id)}>
          <Image source={deleteIcon} style={[styles.icon, styles.iconMargin]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TaskItem