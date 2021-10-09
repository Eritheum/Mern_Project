import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/post.js";

const app = express();
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL = `mongodb+srv://mern:Js053eDAviycXSJr@cluster0.xuv3i.mongodb.net/mern?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))
  )
  .catch((error) => {
    throw error;
  });

//
