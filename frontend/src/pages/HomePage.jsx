// Frontend/src/pages/HomePage.jsx
import React, { useState } from 'react';
import FlightsList from './FlightsList';
import './HomePage.css';

function HomePage() {
  // state לאחסון בחירות המשתמש
  const [searchParams, setSearchParams] = useState({
    origin: '',
    destination: '',
    departure_date: '',
    passengers: '1',
  });

  const [showFlights, setShowFlights] = useState(false);

  // handler לעדכון state לפי הקלדה/בחירה
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchClick = () => {
    setShowFlights(true);
  };

  return (
    <div>
      <section className="hero">
        <h2>Find your perfect flight</h2>
        <p>Compare flights from hundreds of airlines worldwide</p>
        <div className="search-box">
          <input
            type="text"
            name="origin"
            placeholder="From"
            value={searchParams.origin}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="destination"
            placeholder="To"
            value={searchParams.destination}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="departure_date"
            value={searchParams.departure_date}
            onChange={handleInputChange}
          />
          <select
            name="passengers"
            value={searchParams.passengers}
            onChange={handleInputChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={handleSearchClick}>Search Flights</button>
        </div>
      </section>

      <section className="featured-section">
        {showFlights && <FlightsList searchParams={searchParams} />}
      </section>
    </div>
  );
}

export default HomePage;
