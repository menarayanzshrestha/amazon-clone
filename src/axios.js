import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "localhost:5001/clone-78aed/us-central1/api",
});

export default instance;
