import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  paginationButton: {
    padding: 10,
    backgroundColor: "#6C63FF",
    borderRadius: 20,
    marginHorizontal: 10,
  },
  paginationText: {
    color: "#fff",
  },
  pageNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#B0B0B0",
  },
});
