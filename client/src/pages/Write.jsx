import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function Write() {
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" name="title" id="title" />
      </div>
      <div className="menu">
        <div className="item">i1</div>
        <div className="item">i2</div>
      </div>
    </div>
  );
}
