import React from 'react';
import { Link } from 'react-router-dom';
import SpaceTravel from '../WarpSpeed/SpaceTravel';
import './NoMatch.css';

const NoMatch = () => {
  return (
    <div className="NoMatch">
      <p>404 Page not found</p>
      <div>
        <Link to="/" className="NoMatch__button">Return</Link>
      </div>
      <SpaceTravel />
    </div>
  );
};

export default NoMatch;
