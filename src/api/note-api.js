import axios from "axios";

const BASE_URL = "https://64a679db096b3f0fcc7fd94c.mockapi.io/notes";
// const BASE_URL = "http://localhost:3300/notes";

export class NoteAPI {
  static async create(formValues) {
    return this.formatId((await axios.post(`${BASE_URL}`, formValues)).data);
  }

  static async fetchAll() {
    return (await axios.get(`${BASE_URL}`)).data.map(this.formatId);
  }

  static async fetchById(noteId) {
    return this.formatId((await axios.get(`${BASE_URL}/${noteId}`)).data);
  }

  static async deleteById(noteId) {
    return (await axios.delete(`${BASE_URL}/${noteId}`)).data;
  }

  static async updateById(id, values) {
    return this.formatId((await axios.patch(`${BASE_URL}/${id}`, values)).data);
  }

  static formatId(note) {
    return {
      ...note,
      id: note.id.toString(),
    };
  }
}
