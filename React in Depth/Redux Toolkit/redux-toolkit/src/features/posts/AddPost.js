import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

export default function AddPost() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [userId, setUserId] = useState();

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onUserChange = (e) => setUserId(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      id: nanoid(),
      title,
      content,
      userId,
    };
    dispatch(postAdded(post));
    setTitle("");
    setContent("");
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a new Post</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          value={title}
          onChange={(e) => onTitleChange(e)}
        />

        <label htmlFor="author">Author:</label>
        <select id="author" value={userId} onChange={onUserChange}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          id="postContent"
          value={content}
          onChange={(e) => onContentChange(e)}
        ></textarea>
        <button disabled={!canSave}>Save Post</button>
      </form>
    </section>
  );
}
