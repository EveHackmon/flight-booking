import React from 'react';
import './FlightCard.css';

function FlightCard({ flight }) {
  const { company, origin, destination, departure_date, arrival_date, price } =
    flight;

  const departure_time = new Date(departure_date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const arrival_time = new Date(arrival_date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <div className="flight-card">
      {/* Left side: Airline logo */}
      <div className="flight-card__logo">
        <img
          src={`https://logo.clearbit.com/${company
            .replace(/\s/g, '')
            .toLowerCase()}.com`}
          alt={`${company} logo`}
          onError={(e) => (e.target.style.display = 'none')}
        />{' '}
      </div>

      {/* Middle: Times and cities */}
      <div className="flight-card__info">
        <div className="flight-card__time-city">
          <div className="flight-card__departure-time">{departure_time}</div>
          <div className="flight-card__departure-city">{origin}</div>
        </div>

        <div className="flight-card__arrow">→</div>

        <div className="flight-card__time-city">
          <div className="flight-card__arrival-time">{arrival_time}</div>
          <div className="flight-card__arrival-city">{destination}</div>
        </div>
      </div>

      {/* Right side: Separator and price + button */}
      <div className="flight-card__price-section">
        <div className="flight-card__separator"></div>
        <div className="flight-card__price">${Number(price).toFixed(2)}</div>
        <button className="flight-card__book-btn">Book Flight</button>
      </div>
    </div>
  );
}

export default FlightCard;
