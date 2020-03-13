import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addComment } from './actions'

function CommentForm() {
  const { postId } = useParams();
  const [formData, setFormData] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addComment({ formData, id: postId }))
    setFormData('');
  }

  const handleChange = e => {
    setFormData(e.target.value);
  };

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