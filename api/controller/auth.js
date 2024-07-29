import bcrypt from "bcryptjs";
import { db } from "../db.js";

export const register = (req, res) => {
  // CHECK EXISTING USER
  const email = req.body.email;
  const name = req.body.name;
  const q = "select * from users where email = ? or username = ?";
  db.query(q, [email, name], (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length) {
      return res.staus(409).json("User aleardy exists");
    }

    // HASH THE PASSWORD
    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO USERS(`username`, `email`, `password`) VALUES (?)";
    const values = [name, email, hash];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      if(data) return res.status(200).json("User created successfully");
    })
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
