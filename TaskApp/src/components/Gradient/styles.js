import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default styles = StyleSheet.create({
  gradientContainer: {
    width: screenWidth,
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  containerImgs: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  taskImage: {
    width: 60,
    height: 60,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#5F33E1",
    borderRadius: 20,
    height: 70,
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
  },
  buttonAdd: {
    backgroundColor: "#6C63FF",
    paddingVertical: 12,
    borderRadius: 20,
    marginVertical: 20,
    height: 60,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
