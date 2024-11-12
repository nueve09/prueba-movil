import { View, TouchableOpacity, Text, TextInput } from "react-native";
import styles from "./styles";

const Filter = ({
  toggleEvenOdd,
  showAllTasks,
  setSelectedUserId,
  setCompletedFilter,
}) => {
  return (
    <View>
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

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCompletedFilter(true)}
        >
          <Text style={styles.buttonText}>Completadas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCompletedFilter(false)}
        >
          <Text style={styles.buttonText}>No completadas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={showAllTasks}>
          <Text style={styles.buttonText}>Ver todas</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Filtrar por userId"
        keyboardType="numeric"
        onChangeText={(text) => setSelectedUserId(text ? parseInt(text) : null)}
      />
    </View>
  );
};

export default Filter;
