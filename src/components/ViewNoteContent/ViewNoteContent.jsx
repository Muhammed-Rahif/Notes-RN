import React, { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { getNote } from "../../constants/functions";
import { useRoute } from "@react-navigation/native";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import ViewNoteActions from "../ViewNoteActions/ViewNoteActions";

export default function ViewNoteContent({}) {
  const route = useRoute();

  const [note, setNote] = useState();

  useEffect(() => {
    getNote(route.params.id).then((note) => {
      setNote(note);
    });
  }, [note]);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{note ? note.title : "Loading..!"}</Text>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HorizontalLine />
          </View>
          <Text style={styles.body}>{note ? note.body : "Loading..!"}</Text>
        </View>
      </ScrollView>
      <ViewNoteActions id={route.params.id} />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 780,
    backgroundColor: "#f2f1e4",
  },
  card: {
    borderRadius: 12,
    backgroundColor: "white",
    margin: 12,
    padding: 5,
    paddingTop: 18,
    paddingBottom: 18,
    marginBottom: 180,
    shadowColor: "#000",
    shadowOffset: { width: 0.2, height: 0.2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 12,
    marginRight: 12,
  },
  body: {
    fontSize: 18,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 6,
  },
});
