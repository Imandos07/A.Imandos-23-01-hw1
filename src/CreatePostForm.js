import React, { useState } from 'react';
import axios from 'axios';

function CreatePostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
        console.log('New post created:', response.data);
        setTitle('');
        setBody('');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreatePostForm;