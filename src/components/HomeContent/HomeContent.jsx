import React, { useState, useEffect } from "react";
import { AsyncStorage, ScrollView, View } from "react-native";
import styles from "./styles";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import NoteCard from "../NoteCard/NoteCard";
import CreateNoteButton from "../CreateNoteButton/CreateNoteButton";
import { storageKey } from "../../constants/functions";
import { Text } from "react-native";

function HomeContent(props) {
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem(storageKey, (err, allNotes) => {
      if (allNotes) {
        allNotes = JSON.parse(allNotes);
        setAllNotes(allNotes);
      } else {
        setAllNotes([]);
      }
    });
  }, [allNotes]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroller}>
        {allNotes.length > 0 ? (
          allNotes.map((note, key) => (
            <NoteCard title={note.title} body={note.body} key={key} />
          ))
        ) : (
          <Text style={styles.noNotesTxt}>No notes found!</Text>
        )}
        <HorizontalLine style={{ opacity: 0 }} />
      </ScrollView>
      <CreateNoteButton />
    </View>
  );
}

export default HomeContent;
