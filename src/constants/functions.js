import { AsyncStorage } from "react-native";
const storageKey = "Notes";

const getAllNotes = () => {
  AsyncStorage.getItem(storageKey, (err, allNotes) => {
    if (allNotes) {
      allNotes = JSON.parse(allNotes);
      console.log({ allNotes });
      return allNotes;
    } else {
      return [];
    }
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
        AsyncStorage.setItem(storageKey, allNotes);
      }
    }
  });
};

export { addNote, getAllNotes, storageKey };
