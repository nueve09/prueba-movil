import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    width: screenWidth,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  imageContainer: {
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconBack: {
    width: 35,
    height: 25,
  },
  containerButton: {
    margin: 40,
  },
  input: {
    height: 70,
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
    borderColor: "#6C63FF",
    borderWidth: 1.5,
    borderRadius: 20,
    marginBottom: 30,
  },
  selectContainer: {
    marginLeft: 40,
    marginRight: 40,
    borderColor: "#6C63FF",
    borderWidth: 1.5,
    borderRadius: 20,
  },
  selectLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 70,
    width: "100%",
  },
  buttonSave: {
    backgroundColor: "#6C63FF",
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 20,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextSave: {
    color: "#fff",
    fontSize: 18,
  },
  buttonCancel: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 20,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#6C63FF",
    borderWidth: 1.5,
  },
  buttonTextCancel: {
    color: "#6C63FF",
    fontSize: 18,
  },
});
