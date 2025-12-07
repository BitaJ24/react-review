import React from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.tvmaze.com",
  headers: {
    "Content-Type": "application/json",
  },
  //   timeout: "1000",
});

export default instance;
