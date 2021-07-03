import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scroller: {
    position: "absolute",
    backgroundColor: "#f2f1e4",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 60,
  },
  noNotesTxt: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 15,
  },
});
