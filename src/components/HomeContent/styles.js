import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scroller: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 60,
  },
});
