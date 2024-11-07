import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  taskContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    borderWidth: 1.5,
    borderColor: "#DCDCDC",
    margin: 5,
    borderRadius: 20,
  },
  taskInfo: {
    flex: 1,
    marginRight: 10,
  },
  taskStatus: {
    fontSize: 12,
    color: "gray",
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
    color: "#333",
    flexShrink: 1,
  },
  taskIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconMargin: {
    marginLeft: 10,
  },
});
