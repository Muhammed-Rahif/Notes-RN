import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "#f2f1e4",
    paddingTop: 32,
    paddingBottom: 8,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    marginLeft: 18,
    fontSize: 34,
    fontWeight: "bold",
  },
});
