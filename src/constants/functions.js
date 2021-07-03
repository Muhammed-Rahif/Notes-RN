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

const deleteNote = (id) => {
  AsyncStorage.getItem(storageKey, (err, storage) => {
    var allNotes = JSON.parse(storage);
    var newArray = allNotes.filter((note) => note.id !== id);
    AsyncStorage.setItem(storageKey, JSON.stringify(newArray));
  });
};

const updateNote = (id, noteData) => {
  AsyncStorage.getItem(storageKey, (err, storage) => {
    var allNotes = JSON.parse(storage);
    var newArray = allNotes.map((note) => {
      if (note.id === id) {
        console.log({ noteData });
        note.title = noteData.title;
        note.body = noteData.body;
        note.lastModified = new Date();
      }
      return note;
    });
    AsyncStorage.setItem(storageKey, JSON.stringify(newArray));
  });
};

export { addNote, getAllNotes, getNote, deleteNote, updateNote, storageKey };
