import React from "react";
import { Text, View, TouchableNativeFeedback } from "react-native";
import styles from "./styles";
import HR from "../HorizontalLine/HorizontalLine";

export default function NoteCard({ title = "", body = "" }) {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback style={{ borderRadius: 12 }}>
        <View style={styles.card}>
          <Text numberOfLines={4} style={styles.noteTitle}>
            {title}
          </Text>
          <HR />
          <Text numberOfLines={8} style={styles.noteBody}>
            {body}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
