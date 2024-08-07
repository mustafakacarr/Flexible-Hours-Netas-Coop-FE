/*import React from 'react';
import Home from './Pages/Home';
import MainPage from './Pages/MainPage';
import { Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/main-page" element={<MainPage />} />
      
      </Routes>
    </Router>
  );
}

export default App;
*/
import React from 'react';
import Home from './Pages/Home';
import MainPage from './Pages/MainPage';
import SigninModal from './Components/SigninModal';
import SignupModal from './Components/SignupModal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/signin" element={<SigninModal />} />
        <Route path="/signup" element={<SignupModal />} />
      </Routes>
    </Router>
  );
}

export default App;

/* loaclhostun oraya /home yaz*/