import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const INITIAL_FORM_DATA = {
  title: '',
  description: '',
  body: ''
}

function PostForm({ add }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    add({...formData});
    history.push('/');
    setFormData(INITIAL_FORM_DATA);
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
          value={FormData.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          value={FormData.description}
          onChange={handleChange}
        />
        <label htmlFor="body">Body:</label>
        <input
          id="body"
          name="body"
          value={FormData.body}
          onChange={handleChange}
        />
        <button>Save</button>
      </form>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default PostForm;