import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  // FOR DEV PURPOSES ONLY - TESTING LOADING
  await pause(1000);

  return response.data;
});

// FOR DEV PURPOSES ONLY - TESTING LOADING
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
