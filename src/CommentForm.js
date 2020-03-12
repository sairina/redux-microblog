import React from 'react';

function CommentForm( {post}) {
  const INITIAL_FORM_DATA = { body: "" }

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleSubmit = e => {
    e.preventDefault();
    add({ ...formData });
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

return(
  <div>
  <form onSubmit={handleSubmit}>
    <input
      id="title"
      name="title"
      placeholder="New Comment"
      value={formData.title}
      onChange={handleChange}
    />
    </form>
    <button>Add Comment</button>
    </div>
)
}

export default CommentForm;