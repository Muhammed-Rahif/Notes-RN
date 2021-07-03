import React from "react";
import { Text, View, TouchableNativeFeedback } from "react-native";
import styles from "./styles";

export default function CreateNoteButton() {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback style={{ borderRadius: 35 }}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>+ Create a note</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
