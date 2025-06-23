// src/pages/HomePage.jsx
import React, { useState } from 'react';
import FlightsList from './FlightsList';
import './HomePage.css';

function HomePage() {
  const [showFlights, setShowFlights] = useState(false);

  const handleSearchClick = () => {
    setShowFlights(true);
  };
  return (
    <div>
      <section className="hero">
        <h2>Find your perfect flight</h2>
        <p>Compare flights from hundreds of airlines worldwide</p>
        <div className="search-box">
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
          <input type="date" />
          <input type="date" />
          <select>
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>3 Adults</option>
          </select>
          <button onClick={handleSearchClick}>Search Flights</button>
        </div>
      </section>

      <section className="featured-section">
        <FlightsList />
      </section>
    </div>
  );
}

export default HomePage;
