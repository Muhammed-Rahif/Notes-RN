import React from "react";
import { View } from "react-native";

export default function HorizontalLine({ style }) {
  return (
    <View
      style={[
        {
          borderBottomColor: "grey",
          borderBottomWidth: 1,
          opacity: 0.1,
          width: "80%",
          marginTop: 8,
          marginBottom: 8,
        },
        { ...style },
      ]}
    />
  );
}
