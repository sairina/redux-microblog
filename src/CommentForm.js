import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addComment } from './actions'
import { v4 as uuid } from 'uuid';

function CommentForm() {
  const { postId } = useParams();
  const INITIAL_COMMENT_FORM = {id: "", comment:"", postId};
  const [formData, setFormData] = useState(INITIAL_COMMENT_FORM);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addComment({ ...formData, id: uuid(), postId }))
    setFormData(INITIAL_COMMENT_FORM);
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment"></label>
        <input
          id="comment"
          name="comment"
          placeholder="New Comment"
          value={formData.comment}
          onChange={handleChange}
        />
        <button>Add Comment</button>
      </form>
    </div>
  )
}

export default CommentForm;