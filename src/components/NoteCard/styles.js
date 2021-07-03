import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "auto",
    marginTop: 13,
    marginBottom: 0,
    margin: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0.2, height: 0.2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  noteBody: {
    fontSize: 16,
  },
});
