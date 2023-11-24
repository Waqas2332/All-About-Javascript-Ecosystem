import { useDispatch } from "react-redux";
import { useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";

export default function AddPost() {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const contentRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      id: nanoid(),
      title: titleRef.current.value,
      content: contentRef.current.value,
    };
    dispatch(postAdded(post));
  };

  return (
    <section>
      <h2>Add a new Post</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" ref={titleRef} />
        <label htmlFor="postContent">Post Content:</label>
        <textarea id="postContent" ref={contentRef}></textarea>
        <button>Save Post</button>
      </form>
    </section>
  );
}
