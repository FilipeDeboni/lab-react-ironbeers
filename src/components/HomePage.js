import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <h2>All Beers</h2>
        <p></p>
      </Link>
      <Link to="/randombeer">
        <h2>random Beers</h2>
        <p></p>
      </Link>
      <Link to="/newbeer">
        <h2>New Beer</h2>
        <p></p>
      </Link>
    </div>
  );
}

export default HomePage;
