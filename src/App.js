import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import CreatePostForm from './CreatePostForm';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<CreatePostForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
