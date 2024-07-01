// PW HoKjrh4yZ8Hzyf9Q
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";

const app: Express = express();
const port = process.env.port || 3000;

app.use(express.json());

const mongoURI =
  "mongodb+srv://aizadridzoo:HoKjrh4yZ8Hzyf9Q@personalfinancetracker.pwn0r8z.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected"))
  .catch((err) => console.error("Failed", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
