import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Post List</Link>
        </li>
        <li>
          <Link to="/create">Create Post</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
