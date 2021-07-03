import React from "react";
import { Text, View, TouchableNativeFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
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
