import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f695b07c967b4ca5b68ffdadacc2bd78",
  },
});
