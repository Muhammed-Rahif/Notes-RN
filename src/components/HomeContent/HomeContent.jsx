import React from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import TopBar from "../TopBar/TopBar";
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
      </ScrollView>
      <CreateNoteButton />
    </View>
  );
}

export default HomeContent;
