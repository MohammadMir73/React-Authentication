import axios from "axios";

const config = {
    // headers: {
    //   "Access-Control-Allow-Credentials": true,
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    // }
  };

export default axios.create({
    baseURL:'http://localhost:3500'
});