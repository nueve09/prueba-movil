import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  button: {
    backgroundColor: "#6C63FF",
    padding: 10,
    borderRadius: 5,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
  input: {
    height: 50,
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#5F33E1",
    borderRadius: 20,
    padding: 10,
  },
});
