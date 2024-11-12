import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const Paginator = ({ page, setPage, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <View style={styles.paginationContainer}>
      <TouchableOpacity
        onPress={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        style={[styles.paginationButton, page === 1 && styles.disabledButton]}
      >
        <Text style={styles.paginationText}>Anterior</Text>
      </TouchableOpacity>

      <Text style={styles.pageNumber}>Página {page}</Text>

      <TouchableOpacity
        onPress={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        style={[
          styles.paginationButton,
          page === totalPages && styles.disabledButton,
        ]}
      >
        <Text style={styles.paginationText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Paginator;
