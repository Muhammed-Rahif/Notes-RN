import React from "react";
import {
  Text,
  View,
  TouchableNativeFeedback,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function CreateNoteButton() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        style={{ borderRadius: 35 }}
        onPress={() => {
          navigation.navigate("Create note");
        }}
      >
        <View style={styles.btn}>
          <Text style={styles.btnText}>
            <FontAwesomeIcon icon={faPlus} color="white" />
            {"  "}
            Create a note
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    zIndex: 1,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    top: Dimensions.get("window").height * 0.85,
  },
  btn: {
    backgroundColor: "#44b158",
    padding: 12,
    marginBottom: 22,
    borderRadius: 12,
    width: Dimensions.get("window").width * 0.45,
    display: "flex",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
