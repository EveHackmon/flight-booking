import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import FlightsList from './pages/FlightsList.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>SkyFlights</h1>
          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/my-orders">My Orders</a>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/flights" element={<FlightsList />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 SkyFlights. All rights reserved.</p>
          <div>
            <a href="/terms">Terms</a> | <a href="/privacy">Privacy</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
