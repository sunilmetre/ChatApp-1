import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { app, server } from "./SocketIO/server.js";
import path from "path";

dotenv.config();

const _dirname = path.resolve();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI);
  console.log("Connected mongobd");
} catch (error) {
  console.log(error);
}
// app.get("/", (req, res) => {
//   res.send("Hello its Sunil");
// });

//route
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// deployment
app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
  console.log(path.join(_dirname, "/frontend/dist"))
});

server.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
