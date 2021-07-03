import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableNativeFeedback,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { addNote, getNote, updateNote } from "../../constants/functions";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import uuid from "react-native-uuid";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function EditNoteContent() {
  const route = useRoute();
  const navigation = useNavigation();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  useEffect(() => {
    getNote(route.params.id).then((note) => {
      setTitle(note.title);
      setBody(note.body);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.titleLabel}>Title</Text> */}
      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        value={title}
        onChangeText={(title) => {
          setTitle(title);
        }}
        autoFocus={true}
      />
      <TextInput
        style={styles.bodyInput}
        placeholder="Body"
        multiline
        numberOfLines={22}
        textAlignVertical="top"
        value={body}
        onChangeText={(body) => {
          setBody(body);
        }}
      />
      <View style={styles.btnWrapper}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple("", true)}
          onPress={() => {
            updateNote(route.params.id, { title, body });
            navigation.goBack();
          }}
        >
          <View style={{ borderRadius: 4 }}>
            <Text style={styles.btnText}>
              <FontAwesomeIcon icon={faPlus} color="white" />
              {"  "}
              Update note
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <HorizontalLine style={{ opacity: 0 }} />
      <HorizontalLine style={{ opacity: 0 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f1e4",
    height: "100%",
    paddingTop: 12,
  },
  titleInput: {
    backgroundColor: "white",
    borderColor: "white",
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 12,
    fontSize: 18,
    borderRadius: 12,
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: { width: 0.2, height: 0.2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleLabel: {
    marginLeft: 12,
    marginTop: 12,
    fontSize: 22,
    marginBottom: 0,
  },
  bodyInput: {
    backgroundColor: "white",
    borderColor: "white",
    margin: 12,
    borderWidth: 1,
    padding: 12,
    fontSize: 18,
    borderRadius: 12,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0.2, height: 0.2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnWrapper: {
    backgroundColor: "#44b158",
    padding: 12,
    borderRadius: 12,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0.2, height: 0.2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
