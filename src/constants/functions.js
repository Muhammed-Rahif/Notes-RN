import { AsyncStorage } from "react-native";
const storageKey = "Notes";

const getAllNotes = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(storageKey, (err, allNotes) => {
      if (allNotes) {
        allNotes = JSON.parse(allNotes);
        resolve(allNotes);
      } else {
        resolve([]);
      }
    });
  });
};

const addNote = (noteData) => {
  AsyncStorage.getItem(storageKey, (err, storage) => {
    console.log({ storage });
    if (err) {
      console.error(err);
    } else {
      storage = JSON.parse(storage);
      console.log(storage);
      if (storage) {
        storage.push(noteData);
        AsyncStorage.setItem(storageKey, JSON.stringify(storage));
      } else {
        let allNotes = [];
        allNotes.push(noteData);
        AsyncStorage.setItem(storageKey, JSON.stringify(allNotes));
      }
    }
  });
};

const getNote = (id) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(storageKey, (err, storage) => {
      var allNotes = JSON.parse(storage);
      var note = allNotes.find((note) => note.id === id);
      resolve(note);
    });
  });
};

export { addNote, getAllNotes, getNote, storageKey };
