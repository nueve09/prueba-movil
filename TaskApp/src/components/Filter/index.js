import { View, TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const Filter = ({ toggleEvenOdd, showAllTasks }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleEvenOdd("even")}
      >
        <Text style={styles.buttonText}>Tareas Pares</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleEvenOdd("odd")}
      >
        <Text style={styles.buttonText}>Tareas Impares</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={showAllTasks}>
        <Text style={styles.buttonText}>Ver todas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filter;
