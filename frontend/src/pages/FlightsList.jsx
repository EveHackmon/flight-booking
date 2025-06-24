// Frontend/src/pages/FlightList.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api.js';
import FlightCard from '../components/FlightCard.jsx';
import './FlightsList.css';

function FlightsList({ searchParams }) {
  console.log('search params:', searchParams);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFlights();
  }, [searchParams]);

  const fetchFlights = async () => {
    setLoading(true);
    setError(null);
    try {
      // אפשר להעביר את הפרמטרים כשאילתא ל-API, אם ה-API תומך בכך
      // לדוגמה:
      const query = new URLSearchParams(searchParams).toString();
      console.log('Fetching flights with query:', query);
      const response = await api.get(`/flights/search-flights?${query}`);

      setFlights(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch flights');
    } finally {
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

  if (flights.length === 0)
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>No flights found</p>;

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
