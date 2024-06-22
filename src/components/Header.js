// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Question App</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">All Questions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/askquestion">Ask a Question</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
