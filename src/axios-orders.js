import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-2347d.firebaseio.com/",
});

export default instance;
