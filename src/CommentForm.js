import React, { useState } from 'react';

function CommentForm({ post, add }) {

  const [formData, setFormData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    add(formData);
    // history.push('/');
    setFormData('');
  }

  const handleChange = e => {
    setFormData(e.target.value);
  };
  console.log(formData)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment"></label>
        <input
          id="comment"
          name="comment"
          placeholder="New Comment"
          value={formData}
          onChange={handleChange}
        />
        <button>Add Comment</button>
      </form>
    </div>
  )
}

export default CommentForm;