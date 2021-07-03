import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function CreateNoteButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>+ Create a note</Text>
      </TouchableOpacity>
    </View>
  );
}
