import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost, updatePost } from './actions';
import { v4 as uuid } from 'uuid';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './PostForm.css';

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
    <div className="PostForm">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="Enter a title"
            value={formData.title}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Enter a description"
            value={formData.description}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="body">
          <Form.Label>Body</Form.Label>
          <Form.Control
            name="body"
            type="text"
            placeholder="Blog here!"
            value={formData.body}
            onChange={handleChange}
            as="textarea" rows="4" />
        </Form.Group>
        <Button className="PostForm-button" variant="primary" type="submit">Save</Button>
        <Button className="PostForm-button" variant="secondary" onClick={handleCancel}>Cancel</Button>
      </Form >
    </div>
  );
}

export default PostForm;