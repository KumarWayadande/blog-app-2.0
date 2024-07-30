import bcrypt from "bcryptjs";
import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // CHECK EXISTING USER
  const email = req.body.email;
  const name = req.body.username;
  const password = req.body.password;
  const q = "select * from users where email = ? or username = ?";
  db.query(q, [email, name], (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length) {
      return res.status(409).json("User aleardy exists");
    }

    // HASH THE PASSWORD
    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(password, salt);

    const q = "INSERT INTO USERS(`username`, `email`, `password`) VALUES (?)";
    const values = [name, email, hash];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      if (data) return res.status(200).json("User created successfully");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) {
      return res.status(404).json("User not found!");
    }

    // isPassword Correct
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong user name or password");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {};
