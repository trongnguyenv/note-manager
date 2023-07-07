// import axios from "axios";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { FirebaseApp } from "utils/firebase";

// const BASE_URL = "http://localhost:3300/notes";

export class NoteAPI {
  static async create(formValues) {
    const response = await addDoc(
      collection(FirebaseApp.db, "notes"),
      formValues
    );

    return {
      id: response.id,
      ...formValues,
    };

    // return this.formatId((await axios.post(`${BASE_URL}`, formValues)).data);
  }

  static async fetchAll() {
    const q = query(
      collection(FirebaseApp.db, "notes"),
      orderBy("created_at", "desc")
    );

    return (await getDocs(q)).docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    // return (await axios.get(`${BASE_URL}`)).data.map(this.formatId);
  }

  static async deleteById(noteId) {
    return await deleteDoc(doc(collection(FirebaseApp.db, "notes"), noteId));

    // return (await axios.delete(`${BASE_URL}/${noteId}`)).data;
  }

  static async updateById(id, values) {
    const query = doc(FirebaseApp.db, "notes", id);
    await updateDoc(query, values);

    return {
      id,
      ...values,
    };

    // return this.formatId((await axios.patch(`${BASE_URL}/${id}`, values)).data);
  }

  static onShouldSyncNotes(onChange) {
    const q = query(collection(FirebaseApp.db, "notes"));

    const unsub = onSnapshot(q, (snapShot) => {
      const isUserPerformingChange = snapShot.metadata.hasPendingWrites;

      if (!isUserPerformingChange) {
        onChange();
      }
    });

    return unsub;
  }

  //static async fetchById(noteId) {
  // return this.formatId((await axios.get(`${BASE_URL}/${noteId}`)).data);
  //}

  // static formatId(note) {
  //   return {
  //     ...note,
  //     id: note.id.toString(),
  //   };
  // }
}
