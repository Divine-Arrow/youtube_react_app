import axios from "axios";

const KEY = "AIzaSyCpjMA9ETGwj0k8_5s1QBpR3SH4O4ABdLg";


export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
