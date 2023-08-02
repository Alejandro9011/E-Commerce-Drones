import express from "express";
import cors from "cors";
import db from "./database/db.js";
import dronRoutes from "./routes/routes.js";
import userRouter from "./routes/UserRouter.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import multer from "multer";

mongoose.connect("mongodb://127.0.0.1:27017/merr", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/drons", dronRoutes);
app.use("/users", userRouter);

app.listen(8000, () => {
  console.log("Server UP running in http://localhost:8000/");
});
