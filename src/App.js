
import React from 'react';
import Home from './Pages/Home';
import MainPage from './Pages/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main-page" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;

/* loaclhostun oraya /home yaz*/