import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';




function PostForm({ add, update, id, title="", description="", body="" }) {
 
  let editing = false;
  if(title !== ""){
    editing = true;
  }
  
  const history = useHistory();
  
  const INITIAL_FORM_DATA = {
    title,
    description,
    body
  }
  console.log("Initial Form Data", INITIAL_FORM_DATA)
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
console.log("FORM DATA", formData.title, formData.description, formData.body)
  const handleSubmit = e => {
    if(!editing){
    e.preventDefault();
    add({...formData});
    history.push('/');
    setFormData(INITIAL_FORM_DATA);
    } else {
    e.preventDefault();
    update(id, formData)
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

  // const handleUpdate = e => {
  //   e.preventDefault();
  //   update(id, formData)
  // }




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