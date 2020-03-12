import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function PostForm({ add, update, postId, editing, setEditing, post}) {
  const INITIAL_FORM_DATA = post ? post[1] : { title: "", description: "", body: "", comments: [] };
  const history = useHistory();
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleSubmit = e => {
    if (!editing) {
      e.preventDefault();
      add({ ...formData });
      history.push('/');
      setFormData(INITIAL_FORM_DATA);
    } else {
      e.preventDefault();
      update(postId, formData);
      setEditing(false);
      history.push(`/${postId}`);
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