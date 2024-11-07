import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "center",
    position: "relative",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  logoutIconContainer: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  logoutIcon: {
    width: 24,
    height: 24,
  },
});
