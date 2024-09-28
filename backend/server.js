import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from "./Routes/userRoute.js";
import { books } from "./data.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", userRoute);

const api_key = process.env.API_KEY;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/top_rating", async (req, res) => {
  try {
    res.json(books.slice(0, 12));
  } catch (error) {
    console.log(error);
  }
});
app.get("/books/:id", async (req, res) => {
  try {
    const book = books.find((book) => book._id === req.params.id);
    res.json(book);
  } catch (error) {
    console.log(error);
  }
});
app.get("/search", async (req, res) => {
  const { query } = req.body;
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${api_key}`
    );
    res.json(response.data.items);
  } catch (error) {
    console.log(error);
  }
});
app.get("/book/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${req.params.id}?key=${api_key}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
