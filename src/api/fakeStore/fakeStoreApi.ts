import axios from "axios";

export const fakeStoreApi = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});
