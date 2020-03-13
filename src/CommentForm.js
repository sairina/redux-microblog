import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addComment } from './actions'
import { v4 as uuid } from 'uuid';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CommentForm() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const INITIAL_COMMENT_FORM = { id: "", comment: "", postId };
  const [formData, setFormData] = useState(INITIAL_COMMENT_FORM);

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
    <div className="CommentForm">
      <Form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
        <Form.Group controlId="comment">
          <Form.Label></Form.Label>
          <Form.Control
            name="comment"
            type="text"
            placeholder="New comment"
            value={formData.comment}
            onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Add Comment</Button>
      </Form>
    </div>
  )
}

export default CommentForm;