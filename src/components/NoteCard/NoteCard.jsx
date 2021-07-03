import React from "react";
import { Text, View, TouchableNativeFeedback } from "react-native";
import styles from "./styles";
import HR from "../HorizontalLine/HorizontalLine";

export default function NoteCard() {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback style={{ borderRadius: 12 }}>
        <View style={styles.card}>
          <Text style={styles.noteTitle}>Your note title</Text>
          <HR />
          <Text numberOfLines={4} style={styles.noteBody}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
            neque, excepturi quibusdam corporis hic asperiores, quod ea dicta
            deserunt esse nostrum laboriosam voluptatem aliquid! Possimus natus
            delectus pariatur iusto deserunt.
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
