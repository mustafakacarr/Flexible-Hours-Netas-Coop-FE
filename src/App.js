
import React from 'react';
import Home from './Pages/Home';
import MainPage from './Pages/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileManagement from './Pages/PorfileManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/profile-management" element={<ProfileManagement/>} />
      </Routes>
    </Router>
  );
}

export default App;

/* loaclhostun oraya /home yaz*/