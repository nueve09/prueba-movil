import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 50,
    backgroundColor: "#fff",
  },
  containerLoader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  loginIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 0,
    zIndex: 1,
  },
  imgInit: {
    height: 450,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#5F33E1",
    borderRadius: 20,
    padding: 10,
    height: 70,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 20,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    flex: 1,
    textAlign: "center",
  },
});
