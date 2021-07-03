import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    zIndex: 1,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    top: (Dimensions.get("window").height * 85) / 100,
  },
  btn: {
    backgroundColor: "#44b158",
    padding: 12,
    marginBottom: 22,
    borderRadius: 12,
    width: 160,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});