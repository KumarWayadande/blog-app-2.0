import { db } from "../db.js";
import jwt from "jsonwebtoken";
const {verify} = jwt;
export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat = ?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  const q =
    "SELECT `username`, `title`, `descr`, p.img as postImage, u.img as userImage, `cat`, `postDate` FROM users u JOIN posts p ON u.id = p.postUid WHERE p.id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data[0]);
  });
};
export const addPost = (req, res) => {
  res.json("From Controller");
};
export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json("Not authenticated!");
  }

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token was expired!");

    const postId = req.params.id;
    const q = "delete from posts where `id` = ? and `postId` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.json(403).json("You can delete only your post");

      return res.json("Post has been deleted");
    });
  });
};
export const updatePost = (req, res) => {
  res.json("From Controller");
};
