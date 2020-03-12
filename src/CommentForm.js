import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function CommentForm({ add }) {
  const { postId } = useParams();
  const [formData, setFormData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    add(postId, formData);
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