import express from "express";
import cors from "cors";
// import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
const app = express();

app.use(express.json());
app.use(cors())

app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);

app.listen(8800, () => {
  console.log("Connected");
});
