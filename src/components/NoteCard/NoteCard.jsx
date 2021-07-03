import React from "react";
import { Text, View, TouchableNativeFeedback, Alert } from "react-native";
import styles from "./styles";
import HR from "../HorizontalLine/HorizontalLine";
import { useNavigation } from "@react-navigation/native";

export default function NoteCard({ title = "", body = "", id }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        style={{ borderRadius: 12 }}
        onPress={() => {
          navigation.navigate("View note", { id });
        }}
      >
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
