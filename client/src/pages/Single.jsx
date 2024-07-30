import React, { useState, useContext, useEffect } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import moment from "moment";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
export default function Single() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);
  console.log(post);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [postId]);

  return (
    <div className="single">
      <div className="content">
        <img src={post?.postImage} alt="" />
        <div className="user">
          <img src={post?.postImage} alt="" />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.postDate).fromNow()}</p>
          </div>
          {currentUser && post && currentUser.username === post.username && (
            <div className="edit">
              <Link to={"/write?edit=2"}>
                <img src={Edit} alt="" />
              </Link>

              <img src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.descr}
      </div>
      <Menu />
    </div>
  );
}
