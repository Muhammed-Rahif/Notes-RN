import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

function HomeContent(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Notes</Text>
    </View>
  );
}

export default HomeContent;
