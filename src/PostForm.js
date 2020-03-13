import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost, updatePost } from './actions';
import { v4 as uuid } from 'uuid';

function PostForm({ postId, editing, setEditing, post }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const INITIAL_FORM_DATA = post ?
    {
      title: post.title,
      description: post.description,
      body: post.body,
      comments: post.comments
    }
    : {
      title: "",
      description: "",
      body: "",
      comments: []
    };
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleSubmit = e => {
    if (!editing) {
      e.preventDefault();
      let newPost = { ...formData, id: uuid() };
      dispatch(addPost({ ...newPost }));
      history.push('/');
      setFormData(INITIAL_FORM_DATA);
    } else {
      e.preventDefault();
      dispatch(updatePost({ ...formData, id: postId }));
      setEditing(false);
      history.push(`/posts/${postId}`);
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleCancel = () => {
    history.push('/');
    setFormData(INITIAL_FORM_DATA);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="body">Body:</label>
        <input
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
        />
        <button>Save</button>
      </form>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default PostForm;