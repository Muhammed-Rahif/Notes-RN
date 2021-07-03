import React from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import NoteCard from "../NoteCard/NoteCard";
import CreateNoteButton from "../CreateNoteButton/CreateNoteButton";

function HomeContent(props) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroller}>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <HorizontalLine style={{ opacity: 0 }} />
      </ScrollView>
      <CreateNoteButton />
    </View>
  );
}

export default HomeContent;
