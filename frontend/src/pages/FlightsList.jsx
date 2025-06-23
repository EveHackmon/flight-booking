import React, { useEffect, useState } from 'react';
import api from '../services/api.js';
import FlightCard from '../components/FlightCard.jsx';
import './FlightsList.css';

function FlightsList() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      const response = await api.get('/flights/read-all-flights');
      setFlights(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch flights');
      setLoading(false);
    }
  };

  if (loading)
    return (
      <p style={{ textAlign: 'center', marginTop: '50px' }}>
        Loading flights...
      </p>
    );
  if (error)
    return <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>;

  return (
    <div className="flights-list-wrapper">
      {flights.map((flight) => (
        <div key={flight.flight_id} className="flight-card-wrapper">
          <FlightCard flight={flight} />
        </div>
      ))}
    </div>
  );
}

export default FlightsList;
